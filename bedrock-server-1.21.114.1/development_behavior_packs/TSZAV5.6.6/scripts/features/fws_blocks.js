import { world, system, BlockPermutation } from '@minecraft/server'


//TOBACCO
world.beforeEvents.worldInitialize.subscribe(initEvent => {
        initEvent.blockComponentRegistry.registerCustomComponent('true:tobacco_bonemeal', {
        onPlayerInteract: e => {
            const block = e.block
            const player = e.player
            const blockLocation = block.location;
            const blockPos = block.location;
            const item = e.player.getComponent('equippable').getEquipment('Mainhand')
            if (item?.typeId == "minecraft:bone_meal" && block.permutation.getState('true:stage') < 4) {
                block.setPermutation(block.permutation.withState('true:stage', block.permutation.getState('true:stage') + 2))
                player.runCommandAsync(`particle minecraft:crop_growth_emitter ${blockPos.x} ${blockPos.y + 0.5} ${blockPos.z}`);
                player.runCommandAsync(`clear @s bone_meal 0 1`);
            }
          }
        }
      )
    }
  );
 world.beforeEvents.worldInitialize.subscribe(eventData => {
    eventData.blockComponentRegistry.registerCustomComponent('true:tobacco_growth', {
        onTick(e) {
            const { block } = e
            const age = block.permutation.getState('true:stage')
            if (age < 4) {
                block.setPermutation(block.permutation.withState('true:stage', age + 1))
            }
          }
        }
      )
    }  
  )
  //PEANUT
  world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('true:peanut_bonemeal', {
    onPlayerInteract: e => {
        const block = e.block
        const player = e.player
        const blockLocation = block.location;
        const blockPos = block.location;
        const item = e.player.getComponent('equippable').getEquipment('Mainhand')
        if (item?.typeId == "minecraft:bone_meal" && block.permutation.getState('true:stage') < 2) {
            block.setPermutation(block.permutation.withState('true:stage', block.permutation.getState('true:stage') + 1))
            player.runCommandAsync(`particle minecraft:crop_growth_emitter ${blockPos.x} ${blockPos.y + 0.5} ${blockPos.z}`);
            player.runCommandAsync(`clear @s bone_meal 0 1`);
        }
      }
    }
  )
}
);
world.beforeEvents.worldInitialize.subscribe(eventData => {
eventData.blockComponentRegistry.registerCustomComponent('true:peanut_growth', {
    onTick(e) {
        const { block } = e
        const age = block.permutation.getState('true:stage')
        if (age < 2) {
            block.setPermutation(block.permutation.withState('true:stage', age + 1))
        }
      }
    }
  )
}  
)
world.beforeEvents.worldInitialize.subscribe(eventData => {
  eventData.blockComponentRegistry.registerCustomComponent('true:apple_growth', {
      onTick(e) {
          const { block } = e
          const age = block.permutation.getState('true:stage')
          if (age < 4) {
              block.setPermutation(block.permutation.withState('true:stage', age + 1))
          }
        }
      }
    )
  }  
  )
  //LOOT BLOCKS
  world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('true:opening', {
    onPlayerInteract: eventData => {
        const block = eventData.block
        const player = eventData.player
        const blockLocation = block.location;
         if (block.permutation.getState('true:stage') == 0 && block.typeId == "true:chest_of_drawers") {
        block.setPermutation(block.permutation.withState('true:stage', block.permutation.getState('true:stage') + 1))
        system.run(() => {
             block.dimension.playSound("block.drawer.open", blockLocation, { pitch: 1.0, volume: 1.0 });
             block.dimension.runCommandAsync(`loot spawn ${blockLocation.x + 0.5} ${blockLocation.y + 1.0} ${blockLocation.z + 0.5} loot "blocks/loot_blocks/general_loot"`);
             block.dimension.runCommandAsync(`summon xp_orb ${blockLocation.x + 0.5} ${blockLocation.y + 1.0} ${blockLocation.z + 0.5}`);
             }
           )
         }
        if (block.permutation.getState('true:stage') == 0 && block.typeId == "true:wooden_crate") {
        block.setPermutation(block.permutation.withState('true:stage', block.permutation.getState('true:stage') + 1))
        system.run(() => {
             block.dimension.playSound("block.crate.open", blockLocation, { pitch: 1.0, volume: 1.0 });
             block.dimension.runCommandAsync(`loot spawn ${blockLocation.x + 0.5} ${blockLocation.y + 1.0} ${blockLocation.z + 0.5} loot "blocks/loot_blocks/wooden_crate"`);
             block.dimension.runCommandAsync(`summon xp_orb ${blockLocation.x + 0.5} ${blockLocation.y + 1.0} ${blockLocation.z + 0.5}`);
             }
           )
         }
        if (block.permutation.getState('true:stage') == 0 && block.typeId == "true:kitchen_cupboard") {
        block.setPermutation(block.permutation.withState('true:stage', block.permutation.getState('true:stage') + 1))
        system.run(() => {
            block.dimension.playSound("block.drawer.open", blockLocation, { pitch: 1.0, volume: 1.0 });
            block.dimension.runCommandAsync(`loot spawn ${blockLocation.x + 0.5} ${blockLocation.y + 1.0} ${blockLocation.z + 0.5} loot "blocks/loot_blocks/food"`);
            block.dimension.runCommandAsync(`summon xp_orb ${blockLocation.x + 0.5} ${blockLocation.y + 1.0} ${blockLocation.z + 0.5}`);
            }
          ) 
        }
        if (block.permutation.getState('true:stage') == 0 && block.typeId == "true:trash_can") {
        block.setPermutation(block.permutation.withState('true:stage', block.permutation.getState('true:stage') + 1))
        system.run(() => {
             block.dimension.playSound("block.trash.open", blockLocation, { pitch: 1.0, volume: 1.0 });
             block.dimension.runCommandAsync(`loot spawn ${blockLocation.x + 0.5} ${blockLocation.y + 1.0} ${blockLocation.z + 0.5} loot "blocks/loot_blocks/trash_can"`);
             block.dimension.runCommandAsync(`summon xp_orb ${blockLocation.x + 0.5} ${blockLocation.y + 1.0} ${blockLocation.z + 0.5}`);
             }
           )
         }
         if (block.permutation.getState('true:stage') == 0 && block.typeId == "true:toolbox") {
         block.setPermutation(block.permutation.withState('true:stage', block.permutation.getState('true:stage') + 1))
         system.run(() => {
              block.dimension.playSound("block.tool_box.open", blockLocation, { pitch: 1.0, volume: 1.0 });
              block.dimension.runCommandAsync(`loot spawn ${blockLocation.x + 0.5} ${blockLocation.y + 1.0} ${blockLocation.z + 0.5} loot "blocks/loot_blocks/toolbox"`);
              block.dimension.runCommandAsync(`summon xp_orb ${blockLocation.x + 0.5} ${blockLocation.y + 1.0} ${blockLocation.z + 0.5}`);
              }
            ) 
          }
        if (block.permutation.getState('true:stage') == 0 && block.typeId == "true:backpack") {
        block.setPermutation(block.permutation.withState('true:stage', block.permutation.getState('true:stage') + 1))
        system.run(() => {
             block.dimension.playSound("block.backpack.open", blockLocation, { pitch: 1.0, volume: 1.0 });
             block.dimension.runCommandAsync(`loot spawn ${blockLocation.x + 0.5} ${blockLocation.y + 1.0} ${blockLocation.z + 0.5} loot "blocks/loot_blocks/general_loot"`);
             block.dimension.runCommandAsync(`summon xp_orb ${blockLocation.x + 0.5} ${blockLocation.y + 1.0} ${blockLocation.z + 0.5}`);
            }
          )
        }
        if (block.permutation.getState('true:stage') == 0 && block.typeId == "true:military_crate") {
        block.setPermutation(block.permutation.withState('true:stage', block.permutation.getState('true:stage') + 1))
        system.run(() => {
             block.dimension.playSound("block.crate.open", blockLocation, { pitch: 1.0, volume: 1.0 });
             block.dimension.runCommandAsync(`loot spawn ${blockLocation.x + 0.5} ${blockLocation.y + 1.0} ${blockLocation.z + 0.5} loot "blocks/loot_blocks/military_crate"`);
             block.dimension.runCommandAsync(`summon xp_orb ${blockLocation.x + 0.5} ${blockLocation.y + 1.0} ${blockLocation.z + 0.5}`);
             }
           )
         }
        if (block.permutation.getState('true:stage') == 0 && block.typeId == "true:starter_crate") {
        block.setPermutation(block.permutation.withState('true:stage', block.permutation.getState('true:stage') + 1))
        system.run(() => {
             block.dimension.playSound("block.crate.open", blockLocation, { pitch: 1.0, volume: 1.0 });
             block.dimension.runCommandAsync(`loot spawn ${blockLocation.x + 0.5} ${blockLocation.y + 1.0} ${blockLocation.z + 0.5} loot "blocks/loot_blocks/starter_crate"`);
             block.dimension.runCommandAsync(`summon xp_orb ${blockLocation.x + 0.5} ${blockLocation.y + 1.0} ${blockLocation.z + 0.5}`);
             }
           ) 
         }
       }
     }
   )
 }
)
//GRAVESTONE
world.beforeEvents.worldInitialize.subscribe(initEvent => {
  initEvent.blockComponentRegistry.registerCustomComponent('true:open_grave', {
  onPlayerInteract: eventData => {
      const block = eventData.block
      const player = eventData.player
      const blockLocation = block.location;
  if (block.typeId === 'true:gravestone') {
      let entities = player.dimension.getEntities({
          location: block.location,
          type: 'true:gravestone_storage',
          maxDistance: 1
      });
      system.run(() => {
          block.dimension.runCommandAsync(`setblock ${blockLocation.x} ${blockLocation.y} ${blockLocation.z} air replace`);
        }
      )
      entities.forEach(entity => {
          entity.kill();
            }
          )
        }
      }
    }
  )
 }
);
world.afterEvents.entityDie.subscribe(initEvent => {
  let entity = initEvent.deadEntity
  if (entity.typeId == "minecraft:player") {
      let playerName = entity.nameTag
      let location = entity.location
      let locationX = Math.floor(location.x)
      let locationY = Math.floor(location.y)
      let locationZ = Math.floor(location.z)
      let playerInventory = entity.getComponent('inventory').container
      let gravestoneE = entity.dimension.spawnEntity('true:gravestone_storage', { x: (locationX) + 0.5, y: (locationY), z: (locationZ) + 0.5 })
      let gravestoneB = BlockPermutation.resolve('true:gravestone')
      let gravestoneI = gravestoneE.getComponent('inventory').container
      let getBlock = entity.dimension.getBlock(location)
      let getItems = entity.dimension.getEntities({ location: location, type: 'minecraft:item', maxDistance: 4 })
      entity.sendMessage(`§2Your Gravestone can be found at ${(locationX)} ${(locationY)} ${(locationZ)}§r`)
      getBlock.setPermutation(gravestoneB)
      gravestoneE.nameTag = `${playerName}`
      for (let item of getItems) {
          let itemStack = item.getComponent('item').itemStack
          gravestoneI.addItem(itemStack)
          item.remove()
        }
     }
  }
)
//RADIO
  world.beforeEvents.worldInitialize.subscribe(initEvent => {
    initEvent.blockComponentRegistry.registerCustomComponent('true:radio', {
    onPlayerInteract: eventData => {
        const block = eventData.block
        const player = eventData.player
        const blockLocation = block.location;
         if (block.typeId == "true:radio") {
             system.run(() => {
             block.dimension.playSound("block.radio.play", blockLocation, { pitch: 1.0, volume: 1.0 });
               }
             )
           }
         }
       }
     )
   }
 )
