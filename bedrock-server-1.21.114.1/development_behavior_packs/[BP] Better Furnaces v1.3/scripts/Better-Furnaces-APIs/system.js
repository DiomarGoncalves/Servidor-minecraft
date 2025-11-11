import * as MC from "@minecraft/server";
import {
  utilClass
} from "./util.js";

export const BetterFurnacesClass = new class BetterFurnacesClass {
  furnaceConfig = {
    onTick: (e, p) => {
      const {
        block
      } = e
      const {
        delay,
        icon
      } = p.params
      const entity = block.dimension.getEntitiesAtBlockLocation(block.bottomCenter())[0]
      let inv = entity?.getComponent(MC.EntityInventoryComponent.componentId).container
      let input = inv?.getItem(0)
      let fuel = inv?.getItem(1)
      let output = inv?.getItem(2)
      let slot_0 = inv?.getItem(5)
      let slot_1 = inv?.getItem(6)
      let slot_2 = inv?.getItem(7)
      let currentTick = entity.getDynamicProperty('better_furnaces:currentTick')
      let maxTick = entity.getDynamicProperty('better_furnaces:maxTick')
      let currentFlame = entity.getDynamicProperty('better_furnaces:currentFlame')
      let maxFlame = entity.getDynamicProperty('better_furnaces:maxFlame')
      let experience = entity.getDynamicProperty('better_furnaces:experience')
      if (maxTick == 0) entity.setDynamicProperty('better_furnaces:maxTick', delay);
      if ((slot_0?.typeId == "dustveyn:better_furnaces.fuel_upgrade" && slot_1?.typeId != "dustveyn:better_furnaces.fuel_upgrade" && slot_2?.typeId != "dustveyn:better_furnaces.fuel_upgrade") || (slot_0?.typeId != "dustveyn:better_furnaces.fuel_upgrade" && slot_1?.typeId == "dustveyn:better_furnaces.fuel_upgrade" && slot_2?.typeId != "dustveyn:better_furnaces.fuel_upgrade") || (slot_0?.typeId != "dustveyn:better_furnaces.fuel_upgrade" && slot_1?.typeId != "dustveyn:better_furnaces.fuel_upgrade" && slot_2?.typeId == "dustveyn:better_furnaces.fuel_upgrade")) {
        entity.addTag("better_furnaces:double_fuel")
      } else {
        entity.removeTag("better_furnaces:double_fuel")
      }

      if ((slot_0?.typeId == "dustveyn:better_furnaces.speed_upgrade" && slot_1?.typeId != "dustveyn:better_furnaces.speed_upgrade" && slot_2?.typeId != "dustveyn:better_furnaces.speed_upgrade") || (slot_0?.typeId != "dustveyn:better_furnaces.speed_upgrade" && slot_1?.typeId == "dustveyn:better_furnaces.speed_upgrade" && slot_2?.typeId != "dustveyn:better_furnaces.speed_upgrade") || (slot_0?.typeId != "dustveyn:better_furnaces.speed_upgrade" && slot_1?.typeId != "dustveyn:better_furnaces.speed_upgrade" && slot_2?.typeId == "dustveyn:better_furnaces.speed_upgrade")) {
        entity.addTag("better_furnaces:speed")
      } else {
        entity.removeTag("better_furnaces:speed")
      }
      if ((slot_0?.typeId == "dustveyn:better_furnaces.speed_upgrade" && slot_1?.typeId == "dustveyn:better_furnaces.speed_upgrade" && slot_2?.typeId != "dustveyn:better_furnaces.speed_upgrade") || (slot_0?.typeId == "dustveyn:better_furnaces.speed_upgrade" && slot_1?.typeId != "dustveyn:better_furnaces.speed_upgrade" && slot_2?.typeId == "dustveyn:better_furnaces.speed_upgrade") || (slot_0?.typeId != "dustveyn:better_furnaces.speed_upgrade" && slot_1?.typeId == "dustveyn:better_furnaces.speed_upgrade" && slot_2?.typeId == "dustveyn:better_furnaces.speed_upgrade")) {
        entity.addTag("better_furnaces:speed_2")
      } else {
        entity.removeTag("better_furnaces:speed_2")
      }
      if ((slot_0?.typeId == "dustveyn:better_furnaces.speed_upgrade" && slot_1?.typeId == "dustveyn:better_furnaces.speed_upgrade" && slot_2?.typeId == "dustveyn:better_furnaces.speed_upgrade")) {
        entity.addTag("better_furnaces:speed_3")
      } else {
        entity.removeTag("better_furnaces:speed_3")
      }
      if ((slot_0?.typeId == "dustveyn:better_furnaces.instant_upgrade" && slot_1?.typeId != "dustveyn:better_furnaces.instant_upgrade" && slot_2?.typeId != "dustveyn:better_furnaces.instant_upgrade") || (slot_0?.typeId != "dustveyn:better_furnaces.instant_upgrade" && slot_1?.typeId == "dustveyn:better_furnaces.instant_upgrade" && slot_2?.typeId != "dustveyn:better_furnaces.instant_upgrade") || (slot_0?.typeId != "dustveyn:better_furnaces.instant_upgrade" && slot_1?.typeId != "dustveyn:better_furnaces.instant_upgrade" && slot_2?.typeId == "dustveyn:better_furnaces.instant_upgrade")) {
        entity.addTag("better_furnaces:instant")
      } else {
        entity.removeTag("better_furnaces:instant")
      }
      if ((slot_0?.typeId == "dustveyn:better_furnaces.experience_upgrade" && slot_1?.typeId != "dustveyn:better_furnaces.experience_upgrade" && slot_2?.typeId != "dustveyn:better_furnaces.experience_upgrade") || (slot_0?.typeId != "dustveyn:better_furnaces.experience_upgrade" && slot_1?.typeId == "dustveyn:better_furnaces.experience_upgrade" && slot_2?.typeId != "dustveyn:better_furnaces.experience_upgrade") || (slot_0?.typeId != "dustveyn:better_furnaces.experience_upgrade" && slot_1?.typeId != "dustveyn:better_furnaces.experience_upgrade" && slot_2?.typeId == "dustveyn:better_furnaces.experience_upgrade")) {
        entity.addTag("better_furnaces:double_xp")
      } else {
        entity.removeTag("better_furnaces:double_xp")
      }
      if ((!input || input && output && output.typeId != utilClass.recipeType[input.typeId].output) && currentTick > 0) {
        entity.setDynamicProperty('better_furnaces:currentTick', 0)
      }
      if (currentFlame < 1) {
        block.setPermutation(
          MC.BlockPermutation.resolve(block.typeId, {
            "better_furnaces:actived": 'off',
            "minecraft:cardinal_direction": block.permutation.getState("minecraft:cardinal_direction")
          })
        )
      };
      if (currentFlame > 1) {
        block.setPermutation(
          MC.BlockPermutation.resolve(block.typeId, {
            "better_furnaces:actived": 'on',
            "minecraft:cardinal_direction": block.permutation.getState("minecraft:cardinal_direction")
          })
        )
      };
      if (input && (utilClass.recipeType[input.typeId])) {
        if (entity.hasTag("better_furnaces:instant")) {
          if (!output) {
            if (fuel && utilClass.durationType[fuel.typeId]) {
              if (currentFlame < 1) {
                if (entity.hasTag("better_furnaces:double_fuel")) {
                  entity.setDynamicProperty('better_furnaces:currentFlame', utilClass.durationType[fuel.typeId].duration * 2)
                  entity.setDynamicProperty('better_furnaces:maxFlame', utilClass.durationType[fuel.typeId].duration * 2)
                } else {
                  entity.setDynamicProperty('better_furnaces:currentFlame', utilClass.durationType[fuel.typeId].duration)
                  entity.setDynamicProperty('better_furnaces:maxFlame', utilClass.durationType[fuel.typeId].duration)
                }
                if (utilClass.durationType[fuel.typeId].transform) {
                  inv.setItem(1, new MC.ItemStack(utilClass.durationType[fuel.typeId].transform.item))
                } else {
                  if (fuel.amount > 1) {
                    fuel.amount--
                    inv.setItem(1, fuel)
                  } else if (fuel.amount == 1) {
                    inv.setItem(1, undefined)
                  }
                }
              }
            }
            if (currentFlame > 1) {
              if (!entity.hasTag("better_furnaces:speed") && !entity.hasTag("better_furnaces:speed_2") && !entity.hasTag("better_furnaces:speed_3")) {
                entity.setDynamicProperty('better_furnaces:currentTick', currentTick + 1)
              };
              if (entity.hasTag("better_furnaces:speed") && !entity.hasTag("better_furnaces:speed_2") && !entity.hasTag("better_furnaces:speed_3")) {
                entity.setDynamicProperty('better_furnaces:currentTick', currentTick + 2)
              };
              if (!entity.hasTag("better_furnaces:speed") && entity.hasTag("better_furnaces:speed_2") && !entity.hasTag("better_furnaces:speed_3")) {
                entity.setDynamicProperty('better_furnaces:currentTick', currentTick + 3)
              };
              if (Math.random() < 0.4) {
                block.dimension.spawnParticle(`${utilClass.particleType[block.typeId]}`, {
                  x: block.location.x + 0.5,
                  y: block.location.y + 0.1,
                  z: block.location.z + 0.5
                })
              }
            }
          }
        } else {
          if (!output || output && output.amount < 64 && output.typeId == utilClass.recipeType[input.typeId].output) {
            if (fuel && utilClass.durationType[fuel.typeId]) {
              if (currentFlame < 1) {
                if (entity.hasTag("better_furnaces:double_fuel")) {
                  entity.setDynamicProperty('better_furnaces:currentFlame', utilClass.durationType[fuel.typeId].duration * 2)
                  entity.setDynamicProperty('better_furnaces:maxFlame', utilClass.durationType[fuel.typeId].duration * 2)
                } else {
                  entity.setDynamicProperty('better_furnaces:currentFlame', utilClass.durationType[fuel.typeId].duration)
                  entity.setDynamicProperty('better_furnaces:maxFlame', utilClass.durationType[fuel.typeId].duration)
                }
                if (utilClass.durationType[fuel.typeId].transform) {
                  inv.setItem(1, new MC.ItemStack(utilClass.durationType[fuel.typeId].transform.item))
                } else {
                  if (fuel.amount > 1) {
                    fuel.amount--
                    inv.setItem(1, fuel)
                  } else if (fuel.amount == 1) {
                    inv.setItem(1, undefined)
                  }
                }
              }
            }
            if (currentFlame > 1) {
              if (!entity.hasTag("better_furnaces:speed") && !entity.hasTag("better_furnaces:speed_2") && !entity.hasTag("better_furnaces:speed_3")) {
                entity.setDynamicProperty('better_furnaces:currentTick', currentTick + 1)
              };
              if (entity.hasTag("better_furnaces:speed") && !entity.hasTag("better_furnaces:speed_2") && !entity.hasTag("better_furnaces:speed_3")) {
                entity.setDynamicProperty('better_furnaces:currentTick', currentTick + 2)
              };
              if (!entity.hasTag("better_furnaces:speed") && entity.hasTag("better_furnaces:speed_2") && !entity.hasTag("better_furnaces:speed_3")) {
                entity.setDynamicProperty('better_furnaces:currentTick', currentTick + 3)
              };
              if (!entity.hasTag("better_furnaces:speed") && !entity.hasTag("better_furnaces:speed_2") && entity.hasTag("better_furnaces:speed_3")) {
                entity.setDynamicProperty('better_furnaces:currentTick', currentTick + 4)
              };
              if (Math.random() < 0.8) {
                block.dimension.spawnParticle(`${utilClass.particleType[block.typeId]}`, {
                  x: block.location.x + 0.5,
                  y: block.location.y + 0.1,
                  z: block.location.z + 0.5
                })
              }
            }
          }
        }
      }
      if (!output && experience > 0) {
        block.dimension.spawnEntity('minecraft:xp_orb', entity.location)
        entity.setDynamicProperty('better_furnaces:experience', experience - 1)
      }
      if (currentTick <= maxTick * 0.1) {
        inv.setItem(3, new MC.ItemStack("dustveyn:better_furnaces.arrow_0"))
      } else if (currentTick <= maxTick * 0.2) {
        inv.setItem(3, new MC.ItemStack("dustveyn:better_furnaces.arrow_1"))
      } else if (currentTick <= maxTick * 0.3) {
        inv.setItem(3, new MC.ItemStack("dustveyn:better_furnaces.arrow_2"))
      } else if (currentTick <= maxTick * 0.4) {
        inv.setItem(3, new MC.ItemStack("dustveyn:better_furnaces.arrow_3"))
      } else if (currentTick <= maxTick * 0.5) {
        inv.setItem(3, new MC.ItemStack("dustveyn:better_furnaces.arrow_4"))
      } else if (currentTick <= maxTick * 0.6) {
        inv.setItem(3, new MC.ItemStack("dustveyn:better_furnaces.arrow_5"))
      } else if (currentTick <= maxTick * 0.7) {
        inv.setItem(3, new MC.ItemStack("dustveyn:better_furnaces.arrow_6"))
      } else if (currentTick <= maxTick * 0.8) {
        inv.setItem(3, new MC.ItemStack("dustveyn:better_furnaces.arrow_7"))
      } else if (currentTick <= maxTick * 0.9) {
        inv.setItem(3, new MC.ItemStack("dustveyn:better_furnaces.arrow_8"))
      } else if (currentTick >= maxTick) {
        inv.setItem(3, new MC.ItemStack("dustveyn:better_furnaces.arrow_9"))
        if (entity.hasTag("better_furnaces:instant")) {
          if (input) {
            inv.setItem(0, new MC.ItemStack("minecraft:air"))
          }
          if (!output) {
            inv.setItem(2, new MC.ItemStack(utilClass.recipeType[input.typeId].output, input.amount))
          }
          if (entity.hasTag("better_furnaces:double_xp")) {
            entity.setDynamicProperty('better_furnaces:experience', experience + input.amount * 2)
          } else {
            entity.setDynamicProperty('better_furnaces:experience', experience + input.amount)
          }
        } else {
          if (input.amount > 1) {
            input.amount--
            inv.setItem(0, input)
          } else {
            inv.setItem(0, new MC.ItemStack("minecraft:air"))
          }
          if (!output) {
            inv.setItem(2, new MC.ItemStack(utilClass.recipeType[input.typeId].output))
          } else {
            output.amount++
            inv.setItem(2, output)
          }
          if (entity.hasTag("better_furnaces:double_xp")) {
            entity.setDynamicProperty('better_furnaces:experience', experience + 2)
          } else {
            entity.setDynamicProperty('better_furnaces:experience', experience + 1)
          }
        }
        entity.setDynamicProperty('better_furnaces:currentTick', 0)
      }
      if (currentFlame <= maxFlame * 0.1) {
        inv.setItem(4, new MC.ItemStack(`dustveyn:better_furnaces.flame_0`))
      } else if (currentFlame <= maxFlame * 0.2) {
        inv.setItem(4, new MC.ItemStack(`dustveyn:better_furnaces.${icon}_1`))
      } else if (currentFlame <= maxFlame * 0.3) {
        inv.setItem(4, new MC.ItemStack(`dustveyn:better_furnaces.${icon}_2`))
      } else if (currentFlame <= maxFlame * 0.4) {
        inv.setItem(4, new MC.ItemStack(`dustveyn:better_furnaces.${icon}_3`))
      } else if (currentFlame <= maxFlame * 0.5) {
        inv.setItem(4, new MC.ItemStack(`dustveyn:better_furnaces.${icon}_4`))
      } else if (currentFlame <= maxFlame * 0.6) {
        inv.setItem(4, new MC.ItemStack(`dustveyn:better_furnaces.${icon}_5`))
      } else if (currentFlame <= maxFlame * 0.7) {
        inv.setItem(4, new MC.ItemStack(`dustveyn:better_furnaces.${icon}_6`))
      } else if (currentFlame <= maxFlame * 0.8) {
        inv.setItem(4, new MC.ItemStack(`dustveyn:better_furnaces.${icon}_7`))
      } else if (currentFlame <= maxFlame * 0.9) {
        inv.setItem(4, new MC.ItemStack(`dustveyn:better_furnaces.${icon}_8`))
      } else if (currentFlame == maxFlame) {
        inv.setItem(4, new MC.ItemStack(`dustveyn:better_furnaces.${icon}_9`))
      }
      if (currentFlame > 1) {
        entity.setDynamicProperty('better_furnaces:currentFlame', currentFlame - 1)
      } else if (currentFlame == 1) {
        entity.setDynamicProperty('better_furnaces:currentFlame', 0)
        entity.setDynamicProperty('better_furnaces:maxFlame', currentFlame - 1)
      }
    }
  }

  hopperConfig = {
    onTick: ({
      block
    }) => {
      const entity = block.dimension.getEntitiesAtBlockLocation(block.bottomCenter())[0];
      let inv = entity?.getComponent(MC.EntityInventoryComponent.componentId)?.container;
      if (!inv) return;

      let input = inv.getItem(0);
      let fuel = inv.getItem(1);

      const neighbors = {
        above: block.above(),
        below: block.below(),
        north: block.north(),
        south: block.south(),
        west: block.west(),
        east: block.east()
      };

      const pos = block.location;
      const above = neighbors.above;
      if (above?.typeId === "minecraft:hopper" && above.permutation.getState("facing_direction") === 0) {
        const aboveInv = above.getComponent(MC.BlockInventoryComponent.componentId)?.container;
        if (aboveInv && !input) {
          for (let i = 0; i < aboveInv.size; i++) {
            const item = aboveInv.getItem(i);
            if (item) {
              inv.setItem(0, item);
              aboveInv.setItem(i, undefined);
              break;
            }
          }
        }
      }
      for (const [sideName, neighborBlock] of Object.entries(neighbors)) {
        if (!["north", "south", "west", "east"].includes(sideName)) continue;
        if (neighborBlock?.typeId !== "minecraft:hopper") continue;

        const hopperDir = neighborBlock.permutation.getState("facing_direction"); // número
        const hopperFacing = utilClass.DIRECTION_TO_SIDE[hopperDir];

        const shouldInsertFuel =
          (sideName === "north" && hopperFacing === "south") ||
          (sideName === "south" && hopperFacing === "north") ||
          (sideName === "west" && hopperFacing === "east") ||
          (sideName === "east" && hopperFacing === "west");

        if (shouldInsertFuel && !fuel) {
          const sideInv = neighborBlock.getComponent(MC.BlockInventoryComponent.componentId)?.container;
          if (!sideInv) continue;

          for (let i = 0; i < sideInv.size; i++) {
            const item = sideInv.getItem(i);
            if (item && utilClass.durationType[item.typeId]) {
              inv.setItem(1, item);
              sideInv.setItem(i, undefined);
              break;
            }
          }
        }
      }

      const below = neighbors.below;
      if (below?.typeId === "minecraft:hopper") {
        const belowInv = below.getComponent(MC.BlockInventoryComponent.componentId)?.container;
        if (belowInv) {
          inv.transferItem(2, belowInv);
        }
      }
    }
  }
}