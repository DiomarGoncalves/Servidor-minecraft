import * as MC from "@minecraft/server";

MC.world.afterEvents.playerPlaceBlock.subscribe(({
  block,
  player,
  dimension
}) => {
  if (block.getItemStack().typeId.startsWith("dustveyn:better_furnaces")) {
    let entity = dimension.spawnEntity("dustveyn:better_furnaces.inventory", block.bottomCenter())
    entity.nameTag = "better_furnaces:gui"
    entity.setDynamicProperty('better_furnaces:currentTick', 0)
    entity.setDynamicProperty('better_furnaces:maxTick', 0)
    entity.setDynamicProperty('better_furnaces:currentFlame', 0)
    entity.setDynamicProperty('better_furnaces:maxFlame', 0)
    entity.setDynamicProperty('better_furnaces:experience', 0)
  }
})

MC.system.afterEvents.scriptEventReceive.subscribe(({
  id,
  sourceEntity
}) => {
  if (id === "better_furnaces:fire_immune") {
    sourceEntity.triggerEvent("minecraft:components");
    var item = sourceEntity.getComponent(MC.EntityItemComponent.componentId).itemStack;
    if (item.typeId == "dustveyn:better_furnaces.netherite_furnace" || item.typeId == "dustveyn:better_furnaces.instant_upgrade") {
      sourceEntity.addTag("fire_immunity");
    }
  }
})