import { world, ItemStack } from "@minecraft/server"

const monstros = [
    "minecraft:zombie",
    "minecraft:spider",
    "minecraft:skeleton",
    "minecraft:enderman"
];


world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent("extra_utilities:tick", {
        onTick(event) {
            const block = event.block;
            const dimension = event.dimension
            const monster = monstros[Math.floor(Math.random() * monstros.length)];

            const pos = {
                x: block.location.x + 0.5,
                y: block.location.y + 1,
                z: block.location.z + 0.5
            };
            const setPos = [//grass position
                "~1~~",
                "~-1~~",
                "~~~1",
                "~~~-1"
            ];
            const { x, y, z } = block.location;
            const bLoc = block.location;

            const neighbor = [//neighbor detect
                dimension.getBlock({ x: x + 1, y, z }),//east
                dimension.getBlock({ x: x - 1, y, z }),//west
                dimension.getBlock({ x, y, z: z + 1 }),//south
                dimension.getBlock({ x, y, z: z - 1 })//north
            ];
            const hasGrass = neighbor.some(nb => nb?.typeId === "minecraft:grass_block");//check if the neighbor is grass

            const setPosRandom = setPos[Math.floor(Math.random() * setPos.length)];//set random position for grass

            if (block.typeId === "extra_utilities:cursed_earth") {//spawn monster
                block.dimension.spawnEntity(monster, pos);
            };
            if (block.typeId === "extra_utilities:cursed_earth" && hasGrass) {//put cursed grass
                block.dimension.runCommand(`execute positioned ${bLoc.x} ${bLoc.y} ${bLoc.z} run fill ${setPosRandom} ${setPosRandom} extra_utilities:cursed_earth replace grass_block`);
            }

            const dayTime = world.getTimeOfDay();

            if (dayTime >= 0 && dayTime <= 12000) {
                let hasAir = true
                for (let i = 1; i <= 250; i++) {
                    const blockInTop = dimension.getBlock({ x, y: y + i, z })
                    if (blockInTop?.typeId !== 'minecraft:air')
                        hasAir = false
                    break;
                }
                if (hasAir) {
                    console.warn("chegou aqui");
                    block.dimension.runCommand(`execute positioned ${bLoc.x} ${bLoc.y} ${bLoc.z} run setblock ~~1~ fire`);
                    block.setType('minecraft:dirt');
                }
            }
        }
    });
});
world.afterEvents.entityDie.subscribe((event) => {
    const entity = event.deadEntity;
    const dimension = entity.dimension;
    const player = event.damageSource?.damagingEntity;


    const { x, y, z } = entity.location;
    const dayTime = world.getTimeOfDay();

    for (let dy = -2; dy <= 2; dy++) {
        const blockPositions = [
            dimension.getBlock({ x: x + 1, y: y + dy, z }),
            dimension.getBlock({ x: x + 1, y: y + dy, z: z - 1 }),
            dimension.getBlock({ x: x + 1, y: y + dy, z: z + 1 }),
            dimension.getBlock({ x: x - 1, y: y + dy, z }),
            dimension.getBlock({ x: x - 1, y: y + dy, z: z - 1 }),
            dimension.getBlock({ x: x - 1, y: y + dy, z: z + 1 }),
            dimension.getBlock({ x, y: y + dy, z: z + 1 }),
            dimension.getBlock({ x, y: y + dy, z: z - 1 }),
            dimension.getBlock({ x, y: y + dy, z })
        ];

        const redstone = blockPositions.slice(0, 8).every(item => item?.typeId === 'minecraft:redstone_wire');//pra n esquecer slice cria copia do array
        const bLoc = blockPositions[8].location;
        const inv = player.getComponent("minecraft:inventory");
        const container = inv?.container;


        if (redstone && blockPositions[8].typeId === "minecraft:enchanting_table" && dayTime >= 17500 && dayTime <= 19000) {
            for (let i = 0; i < container.size; i++) {
                const item = container.getItem(i);
                if (item?.typeId === "extra_utilities:division_sigil") {
                    container.setItem(i, new ItemStack("extra_utilities:division_sigil_activated", 1));

                    for (let i = 0; i < 6; i++) {
                        const pos = {
                            x: x + Math.floor(Math.random() * 4),
                            y: y + 1,
                            z: z + Math.floor(Math.random() * 4)
                        };
                        entity.dimension.spawnEntity(monstros[Math.floor(Math.random() * monstros.length)], pos);
                    }
                    entity.dimension.runCommand(`execute positioned ${bLoc.x} ${bLoc.y} ${bLoc.z} run function cursed_earth`);
                    break;
                }
            }
        }
    }
});
