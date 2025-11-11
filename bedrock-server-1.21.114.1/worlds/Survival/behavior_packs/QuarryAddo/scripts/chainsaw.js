import { world, system, ItemStack, BlockPermutation } from "@minecraft/server";
import { ActionFormData, ModalFormData, MessageFormData } from "@minecraft/server-ui";

class SerraSystem {
  constructor() {
    this.quarries = new Map();
    this.initialized = false;
    this.uiBusy = new Set();

// Lista de troncos / madeiras
this.logBlocks = new Set([
  "minecraft:oak_log","minecraft:oak_wood",
  "minecraft:spruce_log","minecraft:spruce_wood",
  "minecraft:birch_log","minecraft:birch_wood",
  "minecraft:jungle_log","minecraft:jungle_wood",
  "minecraft:acacia_log","minecraft:acacia_wood",
  "minecraft:dark_oak_log","minecraft:dark_oak_wood",
  "minecraft:mangrove_log","minecraft:mangrove_wood",
  "minecraft:cherry_log","minecraft:cherry_wood",
  "minecraft:crimson_stem","minecraft:warped_stem",
  // stripped versions
  "minecraft:stripped_oak_log","minecraft:stripped_spruce_log",
  "minecraft:stripped_birch_log","minecraft:stripped_jungle_log",
  "minecraft:stripped_acacia_log","minecraft:stripped_dark_oak_log",
  "minecraft:stripped_mangrove_log","minecraft:stripped_cherry_log",
  // opcional: bamboo block
  "minecraft:bamboo_block",

  "minecraft:oak_leaves",
  "minecraft:spruce_leaves",
  "minecraft:birch_leaves",
  "minecraft:jungle_leaves",
  "minecraft:acacia_leaves",
  "minecraft:dark_oak_leaves",
  "minecraft:mangrove_leaves",
  "minecraft:cherry_leaves",
  // Nether não tem folhas
]);

    // velocidades (ticks)
    this.speedMap = [200, 100, 60, 20, 10];

    this.initialize();
  }

  initialize() {
    try {
      world.sendMessage("§e[Serra] Iniciando sistema de Serra...");

      this.loadData();
      this.setupEvents();
      this.startSerraOperations();
      this.startPeriodicSave();

      this.initialized = true;
      world.sendMessage("§a[Serra] Sistema ativo! Corta apenas madeiras automaticamente!");
    } catch (error) {
      world.sendMessage(`§c[Serra] Erro: ${error}`);
    }
  }

  setupEvents() {
    try {
      // Colocar bloco
      if (world.afterEvents?.playerPlaceBlock) {
        world.afterEvents.playerPlaceBlock.subscribe((event) => {
          try {
            if (!event.block) return;
            if (event.block.typeId === "chainsaw:chainsaw_block") {
              // usa a instância (this)
              this.createSerra(event.player, event.block.location);
            }
          } catch (e) { /* ignorar */ }
        });
      }

      // Interação (abrir UI)
      if (world.beforeEvents?.playerInteractWithBlock) {
        world.beforeEvents.playerInteractWithBlock.subscribe((event) => {
          try {
            const { player, block, isFirstEvent } = event;
            if (!isFirstEvent) return;
            if (!block) return;
            if (block.typeId === "chainsaw:chainsaw_block") {
              event.cancel = true;
              system.run(() => {
                this.openSerraInterface(player, block.location);
              });
            }
          } catch (e) { /* ignorar */ }
        });
      }

      // Quebrar bloco
      if (world.beforeEvents?.playerBreakBlock) {
        world.beforeEvents.playerBreakBlock.subscribe((event) => {
          try {
            const { block } = event;
            if (!block) return;
            if (block.typeId === "chainsaw:chainsaw_block") {
              this.removeSerra(block.location);
            }
          } catch (e) { /* ignorar */ }
        });
      }

      // Chat debug (sempre compara em lowercase)
      if (world.beforeEvents?.chatSend) {
        world.beforeEvents.chatSend.subscribe((event) => {
          try {
            const message = event.message.toLowerCase();
            if (message === "!serra-debug") {
              event.cancel = true;
              const player = event.sender;
              player.sendMessage(`§6=== SERRA DEBUG ===`);
              player.sendMessage(`§8Serras registradas: §f${this.quarries.size}`);

              let activeCount = 0;
              for (const [, s] of this.quarries) if (s.active) activeCount++;
              player.sendMessage(`§8Serras ativas: §f${activeCount}`);
            }
          } catch (e) { /* ignorar */ }
        });
      }
    } catch (error) {
      world.sendMessage(`§c[Serra] Erro nos eventos: ${error}`);
    }
  }

  createSerra(player, location) {
    try {
      const id = this.getLocationKey(location);

      this.quarries.set(id, {
        id,
        location,
        owner: player.name,
        active: false,
        chestLocation: null,
        // Mantive compatibilidade com a quarry (mineração para baixo)
        currentY: Math.floor(location.y) - 1,
        minedBlocks: 0,
        created: Date.now(),
        size: 5, // área 5x5 por padrão
        maxDepth: 100,
        speed: 60
      });

      player.sendMessage("§a Serra colocada!");
      player.sendMessage("§8Clique direito para configurar");
      this.saveData();
    } catch (error) {
      world.sendMessage(`§c[Serra] Erro ao criar Serra: ${error}`);
    }
  }

  openSerraInterface(player, location) {
    try {
      const id = this.getLocationKey(location);
      const serra = this.quarries.get(id);

      if (!serra) {
        player.sendMessage("§c Serra não encontrada!");
        return;
      }

      if (serra.owner !== player.name) {
        player.sendMessage(`§c Esta Serra pertence a §f${serra.owner}§c!`);
        return;
      }

      const form = new ActionFormData()
        .title("§8 SERRA AUTOMÁTICA")
        .body(
          `§8Status: ${serra.active ? "§a ATIVA" : "§c PARADA"}\n§8Baú: ${serra.chestLocation ? "§a Conectado" : "§c Não conectado"}\n§8Blocos cortados: §f${serra.minedBlocks}\n§8Profundidade atual: §f${serra.currentY}\n§8Tamanho: §f${serra.size}x${serra.size}\n§8Profundidade máx: §f${serra.maxDepth}\n§8Velocidade: §f${this.getSpeedDescription(serra.speed)}\n\n§8Corta apenas madeiras automaticamente`
        )
        .button("§8 CONECTAR BAÚ\n§8Definir baú para armazenar")
        .button("§8 CONFIGURAÇÕES\n§8Tamanho, profundidade e velocidade")
        .button(serra.active ? "§8 PARAR SERRA" : "§8 INICIAR SERRA")
        .button("§4 REMOVER SERRA\n§8Quebrar e recuperar bloco");

      form.show(player).then((response) => {
        if (response.canceled) return;
        switch (response.selection) {
          case 0:
            system.runTimeout(() => this.showChestConnectionForm(player, serra), 5);
            break;
          case 1:
            system.runTimeout(() => this.showConfigurationForm(player, serra), 5);
            break;
          case 2:
            system.runTimeout(() => this.toggleSerraOperation(player, serra), 5);
            break;
          case 3:
            system.runTimeout(() => this.showRemoveConfirmation(player, serra), 5);
            break;
        }
      }).catch((e) => {
        player.sendMessage("§c Erro ao abrir interface. Tente novamente!");
        world.sendMessage(`§c[Serra] Erro na interface: ${e}`);
      });

    } catch (error) {
      world.sendMessage(`§c[Serra] Erro na interface: ${error}`);
      player.sendMessage("§c Erro ao abrir interface. Tente novamente!");
    }
  }

  showChestConnectionForm(player, serra) {
    try {
      const coordString = serra.chestLocation ? `${serra.chestLocation.x} ${serra.chestLocation.y} ${serra.chestLocation.z}` : "";
      const form = new ModalFormData()
        .title("§2§l CONECTAR BAÚ")
        .textField("§8Coordenadas do baú (X Y Z):","Ex: 100 64 200", coordString);

      form.show(player).then((response) => {
        if (response.canceled) return;
        const [coordsInput] = response.formValues;
        if (!coordsInput || typeof coordsInput !== "string") {
          player.sendMessage("§c Coordenadas inválidas!");
          return;
        }

        const coords = coordsInput.trim().split(/[\s,;]+/);
        if (coords.length !== 3 || !this.validateCoordinates(...coords)) {
          player.sendMessage("§c Coordenadas inválidas! Use o formato: X Y Z");
          return;
        }

        const chestLocation = { x: parseInt(coords[0]), y: parseInt(coords[1]), z: parseInt(coords[2]) };

        // Verificar se existe um baú na posição (usa a dimensão do jogador)
        const block = player.dimension.getBlock(chestLocation);
        if (!block || block.typeId !== "minecraft:chest") {
          player.sendMessage("§c Não há um baú nesta posição!");
          return;
        }

        serra.chestLocation = chestLocation;
        player.sendMessage("§e Baú conectado com sucesso!");
        this.saveData();
      });
    } catch (error) {
      world.sendMessage(`§c[Serra] Erro na conexão do baú: ${error}`);
    }
  }

  showConfigurationForm(player, serra) {
    try {
      const form = new ModalFormData()
        .title("§8 CONFIGURAÇÕES DA SERRA")
        .slider("§8Tamanho da Área:\n§8Área quadrada de corte (3x3 até 500x500)", 3, 500, 1, serra.size)
        .slider("§8Profundidade Máxima:\n§8Quantos blocos para baixo cortar", 1, 256, 1, serra.maxDepth)
        .dropdown("§8Velocidade de Corte:\n§8Velocidade da serra", [
          " Muito Lenta (10 segundos)",
          " Lenta (5 segundos)",
          " Normal (3 segundos)",
          " Rápida (1 segundo)",
          " Muito Rápida (0.5 segundos)"
        ], this.getSpeedIndex(serra.speed));

      form.show(player).then((response) => {
        if (response.canceled) return;
        const [size, maxDepth, speedIndex] = response.formValues;
        serra.size = Math.floor(size);
        serra.maxDepth = Math.floor(maxDepth);
        serra.speed = this.getSpeedFromIndex(speedIndex);
        player.sendMessage("§a Configurações atualizadas!");
        player.sendMessage(`§8Tamanho: §f${serra.size}x${serra.size}`);
        player.sendMessage(`§8Profundidade: §f${serra.maxDepth} blocos`);
        player.sendMessage(`§8Velocidade: §f${this.getSpeedDescription(serra.speed)}`);
        this.saveData();
      });
    } catch (error) {
      world.sendMessage(`§c[Serra] Erro nas configurações: ${error}`);
    }
  }

  getSpeedDescription(speed) {
    switch (speed) {
      case 200: return "Muito Lenta";
      case 100: return "Lenta";
      case 60: return "Normal";
      case 20: return "Rápida";
      case 10: return "Muito Rápida";
      default: return "Personalizada";
    }
  }

  getSpeedIndex(speed) {
    switch (speed) {
      case 200: return 0;
      case 100: return 1;
      case 60: return 2;
      case 20: return 3;
      case 10: return 4;
      default: return 2;
    }
  }

  getSpeedFromIndex(index) {
    return this.speedMap[index] || 60;
  }

  toggleSerraOperation(player, serra) {
    try {
      if (!serra.chestLocation) {
        player.sendMessage("§c Conecte um baú primeiro!");
        return;
      }

      const chestBlock = player.dimension.getBlock(serra.chestLocation);
      if (!chestBlock || chestBlock.typeId !== "minecraft:chest") {
        player.sendMessage("§c Baú não encontrado! Reconecte o baú.");
        serra.chestLocation = null;
        this.saveData();
        return;
      }

      serra.active = !serra.active;
      if (serra.active) {
        player.sendMessage("§a Serra iniciada!");
        player.sendMessage("§8Cortando apenas madeiras automaticamente...");
      } else {
        player.sendMessage("§c⏹️ Serra parada!");
      }
      this.saveData();
    } catch (error) {
      world.sendMessage(`§c[Serra] Erro ao alternar operação: ${error}`);
    }
  }

  showRemoveConfirmation(player, serra) {
    try {
      const form = new MessageFormData()
        .title("§8 REMOVER SERRA")
        .body("§8 ATENÇÃO!\n\n§fDeseja remover esta serra?\n\n§8O bloco será devolvido ao seu inventário.")
        .button1("§8 SIM, REMOVER")
        .button2("§8 CANCELAR");

      form.show(player).then((response) => {
        if (response.canceled || response.selection === 1) return;

        const serraItem = new ItemStack("chainsaw:chainsaw_block", 1);
        const inventory = player.getComponent("minecraft:inventory");
        if (inventory?.container) inventory.container.addItem(serraItem);

        const block = player.dimension.getBlock(serra.location);
        if (block) block.setPermutation(BlockPermutation.resolve("minecraft:air"));

        this.quarries.delete(serra.id);
        player.sendMessage("§a Serra removida e devolvida ao inventário!");
        this.saveData();
      });
    } catch (error) {
      world.sendMessage(`§c[Serra] Erro na remoção: ${error}`);
    }
  }

  startSerraOperations() {
    system.runInterval(() => {
      if (!this.initialized) return;
      try {
        for (const [, serra] of this.quarries) {
          if (serra.active && serra.chestLocation) {
            this.processSerraMining(serra);
          }
        }
      } catch (e) { /* silencioso */ }
    }, 20);
  }

  processSerraMining(serra) {
    try {
      const now = Date.now();
      if (!serra.lastMining) serra.lastMining = 0;
      const timeSince = now - serra.lastMining;
      const required = serra.speed * 50; // ticks -> ms
      if (timeSince < required) return;
      serra.lastMining = now;

      const minY = serra.location.y - serra.maxDepth;
      if (serra.currentY < minY) {
        serra.active = false;
        const owner = world.getPlayers().find(p => p.name === serra.owner);
        if (owner) {
          owner.sendMessage(`§e Serra em (${serra.location.x}, ${serra.location.y}, ${serra.location.z}) terminou!`);
          owner.sendMessage(`§8 Total cortado: §f${serra.minedBlocks} blocos`);
        }
        this.saveData();
        return;
      }

      const centerX = Math.floor(serra.location.x);
      const centerZ = Math.floor(serra.location.z);
      const currentY = Math.floor(serra.currentY);
      const halfSize = Math.floor(serra.size / 2);

      let cutThisRound = false;

      for (let x = centerX - halfSize; x <= centerX + halfSize; x++) {
        for (let z = centerZ - halfSize; z <= centerZ + halfSize; z++) {
          const pos = { x, y: currentY, z };
          try {
            const block = world.getDimension("overworld").getBlock(pos);
            if (!block) continue;
            if (this.logBlocks.has(block.typeId)) {
              const drops = this.getBlockDrops(block.typeId);
              if (this.storeItemsInChest(serra.chestLocation, drops)) {
                block.setPermutation(BlockPermutation.resolve("minecraft:air"));
                serra.minedBlocks++;
                cutThisRound = true;
                world.getDimension("overworld").spawnParticle("minecraft:villager_happy", { x: pos.x + 0.5, y: pos.y + 0.5, z: pos.z + 0.5 });
              } else {
                // baú cheio -> pausar
                serra.active = false;
                const owner = world.getPlayers().find(p => p.name === serra.owner);
                if (owner) owner.sendMessage("§c Baú cheio! Serra pausada.");
                this.saveData();
                return;
              }
            }
          } catch (e) { continue; }
        }
      }

      if (!cutThisRound) {
        serra.currentY--;
      } else {
        // salvamos ocasionalmente para persistência
        this.saveData();
      }

    } catch (error) {
      /* silencioso */
    }
  }

  // Drops para madeiras/folhas
getBlockDrops(blockType) {
  const dropMap = {
    // Troncos normais
    "minecraft:oak_log": [{ item: "minecraft:oak_log", count: 1 }],
    "minecraft:spruce_log": [{ item: "minecraft:spruce_log", count: 1 }],
    "minecraft:birch_log": [{ item: "minecraft:birch_log", count: 1 }],
    "minecraft:jungle_log": [{ item: "minecraft:jungle_log", count: 1 }],
    "minecraft:acacia_log": [{ item: "minecraft:acacia_log", count: 1 }],
    "minecraft:dark_oak_log": [{ item: "minecraft:dark_oak_log", count: 1 }],
    "minecraft:mangrove_log": [{ item: "minecraft:mangrove_log", count: 1 }],
    "minecraft:cherry_log": [{ item: "minecraft:cherry_log", count: 1 }],
    "minecraft:bamboo_block": [{ item: "minecraft:bamboo_block", count: 1 }],

    // Stripped logs
    "minecraft:stripped_oak_log": [{ item: "minecraft:stripped_oak_log", count: 1 }],
    "minecraft:stripped_spruce_log": [{ item: "minecraft:stripped_spruce_log", count: 1 }],
    "minecraft:stripped_birch_log": [{ item: "minecraft:stripped_birch_log", count: 1 }],
    "minecraft:stripped_jungle_log": [{ item: "minecraft:stripped_jungle_log", count: 1 }],
    "minecraft:stripped_acacia_log": [{ item: "minecraft:stripped_acacia_log", count: 1 }],
    "minecraft:stripped_dark_oak_log": [{ item: "minecraft:stripped_dark_oak_log", count: 1 }],
    "minecraft:stripped_mangrove_log": [{ item: "minecraft:stripped_mangrove_log", count: 1 }],
    "minecraft:stripped_cherry_log": [{ item: "minecraft:stripped_cherry_log", count: 1 }]
  };

  // Drops especiais de folhas (com probabilidade)
  const leafDrops = {
    "minecraft:oak_leaves": "minecraft:oak_sapling",
    "minecraft:spruce_leaves": "minecraft:spruce_sapling",
    "minecraft:birch_leaves": "minecraft:birch_sapling",
    "minecraft:jungle_leaves": "minecraft:jungle_sapling",
    "minecraft:acacia_leaves": "minecraft:acacia_sapling",
    "minecraft:dark_oak_leaves": "minecraft:dark_oak_sapling",
    "minecraft:mangrove_leaves": "minecraft:mangrove_propagule",
    "minecraft:cherry_leaves": "minecraft:cherry_sapling"
  };

  // Se for folha → aplicar chances
  if (leafDrops[blockType]) {
    const drops = [];

    // Chance de muda (10%)
    if (Math.random() < 0.2) {
      drops.push({ item: leafDrops[blockType], count: 1 });
    }

    // Chance de graveto (5%)
    if (Math.random() < 0.05) {
      drops.push({ item: "minecraft:stick", count: 1 });
    }

    // Chance de maçã (apenas folhas de carvalho/dark oak, 1%)
    if ((blockType === "minecraft:oak_leaves" || blockType === "minecraft:dark_oak_leaves") && Math.random() < 0.5) {
      drops.push({ item: "minecraft:apple", count: 1 });
    }

    return drops;
  }

  // Caso não seja folha → drop fixo
  return dropMap[blockType] || [];
}

  storeItemsInChest(chestLocation, items) {
    try {
      if (!chestLocation) return false;
      const chestBlock = world.getDimension("overworld").getBlock(chestLocation);
      if (!chestBlock || chestBlock.typeId !== "minecraft:chest") return false;
      const inventory = chestBlock.getComponent("minecraft:inventory");
      if (!inventory?.container) return false;
      const container = inventory.container;

      for (const itemData of items) {
        const itemStack = new ItemStack(itemData.item, itemData.count);

        if (container.emptySlotsCount === 0) {
          let stored = false;
          for (let i = 0; i < container.size; i++) {
            const existing = container.getItem(i);
            if (existing && existing.typeId === itemStack.typeId && existing.amount < existing.maxAmount) {
              const canPut = existing.maxAmount - existing.amount;
              const toAdd = Math.min(canPut, itemStack.amount);
              existing.amount += toAdd;
              container.setItem(i, existing);
              itemStack.amount -= toAdd;
              if (itemStack.amount <= 0) { stored = true; break; }
            }
          }
          if (!stored) return false;
        } else {
          container.addItem(itemStack);
        }
      }
      return true;
    } catch (error) {
      return false;
    }
  }

  removeSerra(location) {
    try {
      const id = this.getLocationKey(location);
      this.quarries.delete(id);
      this.saveData();
    } catch (error) { /* silencioso */ }
  }

  validateCoordinates(...coords) {
    return coords.every((coord) => {
      const num = parseFloat(coord);
      return !isNaN(num) && isFinite(num) && coord !== "" && coord !== null && coord !== undefined;
    });
  }

  getLocationKey(location) {
    return `${Math.floor(location.x)},${Math.floor(location.y)},${Math.floor(location.z)}`;
  }

  startPeriodicSave() {
    system.runInterval(() => {
      if (this.initialized) this.saveData();
    }, 1200);
  }

  saveData() {
    try {
      const saveData = {
        version: "2.0.0",
        quarries: Array.from(this.quarries.entries()),
        timestamp: Date.now()
      };
      world.setDynamicProperty("serraSystemData", JSON.stringify(saveData));
    } catch (error) { /* silencioso */ }
  }

  loadData() {
    try {
      const savedData = world.getDynamicProperty("serraSystemData");
      if (!savedData) return;
      const data = JSON.parse(savedData);
      if (data.quarries) this.quarries = new Map(data.quarries);
      const loadTime = data.timestamp ? new Date(data.timestamp).toLocaleString() : "desconhecido";
      world.sendMessage(`§a[Serra] Carregado: ${this.quarries.size} Serras (salvos em: ${loadTime})`);
    } catch (error) {
      this.quarries = new Map();
    }
  }
}

// Inicializar
world.sendMessage("§e[Serra] Carregando sistema de Serra...");
const serraSystem = new SerraSystem();
globalThis.serraSystem = serraSystem;
