import { world, ItemStack, EquipmentSlot } from "@minecraft/server";

let mobData = [];

world.beforeEvents.worldInitialize.subscribe((eventData) => {
    eventData.itemComponentRegistry.registerCustomComponent("extra_utilities:hit", {
        onHitEntity(event) {
            const player = event.attackingEntity;
            const target = event.hitEntity;
            const equippable = player.getComponent("minecraft:equippable");
            const item = equippable?.getEquipment(EquipmentSlot.Mainhand);

            if (!target.hasComponent('minecraft:is_baby') && item?.typeId === "extra_utilities:golden_lasso") {
                mobData[0] = "adult";
            } else {
                mobData[0] = "baby";
            }

            if (item?.typeId === "extra_utilities:golden_lasso") {
                const targetName = target.typeId;
                target.remove();
                const newItem = new ItemStack("extra_utilities:golden_lasso_on", 1);
                newItem.setLore([`§7${targetName}`]);
                equippable.setEquipment(EquipmentSlot.Mainhand, newItem);
            }

        }
    });
});
world.afterEvents.entityHitBlock.subscribe((event) => {
    const damagingEntity = event.damagingEntity;
    const hitBlock = event.hitBlock;

    const equippable = damagingEntity.getComponent("minecraft:equippable");
    const item = equippable?.getEquipment(EquipmentSlot.Mainhand);

    const spawnPosition = {
        x: hitBlock.location.x + 0.5,
        y: hitBlock.location.y + 1,
        z: hitBlock.location.z + 0.5
    };
    const mobId = item.getLore();

    const bLoc = hitBlock.location;

    console.warn(mobData)
    if (item?.typeId === "extra_utilities:golden_lasso_on") {
        if (mobData[0] === 'adult') {
            mobData[0] = "";
            damagingEntity.dimension.runCommand(`execute positioned ${bLoc.x} ${bLoc.y} ${bLoc.z} run summon ${mobId[0].replace("§7", "")} ~~1~ facing @s minecraft:ageable_grow_up`);
        }
        if (mobData[0] === 'baby') {
            damagingEntity.dimension.runCommand(`execute positioned ${bLoc.x} ${bLoc.y} ${bLoc.z} run summon ${mobId[0].replace("§7", "")} ~~1~ facing @s minecraft:entity_born`);
            mobData[0] = "";
        }
        //hitBlock.dimension.spawnEntity(`${mobId[0].replace("§7", "")}`, spawnPosition);
        const newItem = new ItemStack("extra_utilities:golden_lasso", 1);
        equippable.setEquipment(EquipmentSlot.Mainhand, newItem);
    }
});