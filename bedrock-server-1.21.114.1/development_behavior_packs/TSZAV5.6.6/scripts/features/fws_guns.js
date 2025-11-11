import { world } from "@minecraft/server";

world.afterEvents.itemUse.subscribe((eventData) => {
const player = eventData.source
const item = player.getComponent('equippable').getEquipment('Mainhand')
     if (item?.typeId == 'true:m9_empty') {
          player.runCommandAsync("playsound gun_empty @a [r=4] ~ ~ ~");
          player.runCommandAsync("replaceitem entity @s [hasitem={item=true:m9_empty,location=slot.weapon.mainhand},tag=ammo_9mm] slot.weapon.mainhand 0 true:m9 1 0");
          player.runCommandAsync("clear @s [hasitem={item=true:ammo_9mm}] true:ammo_9mm 0 1");
          player.runCommandAsync("scoreboard players add @s m9_reloading 15");
        }
        if (item?.typeId == 'true:glock17_empty') {
          player.runCommandAsync("playsound gun_empty @a [r=4] ~ ~ ~");
          player.runCommandAsync("replaceitem entity @s [hasitem={item=true:glock17_empty,location=slot.weapon.mainhand},tag=ammo_9mm] slot.weapon.mainhand 0 true:glock17 1 0");
          player.runCommandAsync("clear @s [hasitem={item=true:ammo_9mm}] true:ammo_9mm 0 1");
          player.runCommandAsync("scoreboard players add @s glock17_reloading 17");
        }
        if (item?.typeId == 'true:m1911_empty') {
          player.runCommandAsync("playsound gun_empty @a [r=4] ~ ~ ~");
          player.runCommandAsync("replaceitem entity @s [hasitem={item=true:m1911_empty,location=slot.weapon.mainhand},tag=ammo_45acp] slot.weapon.mainhand 0 true:m1911 1 0");
          player.runCommandAsync("clear @s [hasitem={item=true:ammo_45acp}] true:ammo_45acp 0 1");
          player.runCommandAsync("scoreboard players add @s m1911_reloading 7");
        }
        if (item?.typeId == 'true:desert_eagle_empty') {
          player.runCommandAsync("playsound gun_empty @a [r=4] ~ ~ ~");
          player.runCommandAsync("replaceitem entity @s [hasitem={item=true:desert_eagle_empty,location=slot.weapon.mainhand},tag=ammo_45acp] slot.weapon.mainhand 0 true:desert_eagle 1 0");
          player.runCommandAsync("clear @s [hasitem={item=true:ammo_45acp}] true:ammo_45acp 0 1");
          player.runCommandAsync("scoreboard players add @s desert_eagle_reloading 7");
        }
        if (item?.typeId == 'true:micro_uzi_empty') {
          player.runCommandAsync("playsound gun_empty @a [r=4] ~ ~ ~");
          player.runCommandAsync("replaceitem entity @s [hasitem={item=true:micro_uzi_empty,location=slot.weapon.mainhand},tag=ammo_9mm] slot.weapon.mainhand 0 true:micro_uzi 1 0");
          player.runCommandAsync("clear @s [hasitem={item=true:ammo_9mm}] true:ammo_9mm 0 1");
          player.runCommandAsync("scoreboard players add @s micro_uzi_reloading 20");
        }
        if (item?.typeId == 'true:thompson_empty') {
          player.runCommandAsync("playsound gun_empty @a [r=4] ~ ~ ~");
          player.runCommandAsync("replaceitem entity @s [hasitem={item=true:thompson_empty,location=slot.weapon.mainhand},tag=ammo_45acp] slot.weapon.mainhand 0 true:thompson 1 0");
          player.runCommandAsync("clear @s [hasitem={item=true:ammo_45acp}] true:ammo_45acp 0 1");
          player.runCommandAsync("scoreboard players add @s thompson_reloading 30");
        }
        if (item?.typeId == 'true:mp40_empty') {
          player.runCommandAsync("playsound gun_empty @a [r=4] ~ ~ ~");
          player.runCommandAsync("replaceitem entity @s [hasitem={item=true:mp40_empty,location=slot.weapon.mainhand},tag=ammo_9mm] slot.weapon.mainhand 0 true:mp40 1 0");
          player.runCommandAsync("clear @s [hasitem={item=true:ammo_9mm}] true:ammo_9mm 0 1");
          player.runCommandAsync("scoreboard players add @s mp40_reloading 32");
        }
        if (item?.typeId == 'true:scar_l_empty') {
          player.runCommandAsync("playsound gun_empty @a [r=4] ~ ~ ~");
          player.runCommandAsync("replaceitem entity @s [hasitem={item=true:scar_l_empty,location=slot.weapon.mainhand},tag=ammo_556mm] slot.weapon.mainhand 0 true:scar_l 1 0");
          player.runCommandAsync("clear @s [hasitem={item=true:ammo_556mm}] true:ammo_556mm 0 1");
          player.runCommandAsync("scoreboard players add @s scar_l_reloading 30");
        }
        if (item?.typeId == 'true:scar_l_scope_2x_empty') {
          player.runCommandAsync("playsound gun_empty @a [r=4] ~ ~ ~");
          player.runCommandAsync("replaceitem entity @s [hasitem={item=true:scar_l_scope_2x_empty,location=slot.weapon.mainhand},tag=ammo_556mm] slot.weapon.mainhand 0 true:scar_l_scope_2x 1 0");
          player.runCommandAsync("clear @s [hasitem={item=true:ammo_556mm}] true:ammo_556mm 0 1");
          player.runCommandAsync("scoreboard players add @s scar_l_scope_2x_reloading 30");
        }
        if (item?.typeId == 'true:scar_l_scope_4x_empty') {
          player.runCommandAsync("playsound gun_empty @a [r=4] ~ ~ ~");
          player.runCommandAsync("replaceitem entity @s [hasitem={item=true:scar_l_scope_4x_empty,location=slot.weapon.mainhand},tag=ammo_556mm] slot.weapon.mainhand 0 true:scar_l_scope_4x 1 0");
          player.runCommandAsync("clear @s [hasitem={item=true:ammo_556mm}] true:ammo_556mm 0 1");
          player.runCommandAsync("scoreboard players add @s scar_l_scope_4x_reloading 30");
        }
        if (item?.typeId == 'true:scar_l_scope_6x_empty') {
          player.runCommandAsync("playsound gun_empty @a [r=4] ~ ~ ~");
          player.runCommandAsync("replaceitem entity @s [hasitem={item=true:scar_l_scope_6x_empty,location=slot.weapon.mainhand},tag=ammo_556mm] slot.weapon.mainhand 0 true:scar_l_scope_6x 1 0");
          player.runCommandAsync("clear @s [hasitem={item=true:ammo_556mm}] true:ammo_556mm 0 1");
          player.runCommandAsync("scoreboard players add @s scar_l_scope_6x_reloading 30");
        }
        if (item?.typeId == 'true:scar_h_empty') {
          player.runCommandAsync("playsound gun_empty @a [r=4] ~ ~ ~");
          player.runCommandAsync("replaceitem entity @s [hasitem={item=true:scar_h_empty,location=slot.weapon.mainhand},tag=ammo_762mm] slot.weapon.mainhand 0 true:scar_h 1 0");
          player.runCommandAsync("clear @s [hasitem={item=true:ammo_762mm}] true:ammo_762mm 0 1");
          player.runCommandAsync("scoreboard players add @s scar_h_reloading 30");
        }
        if (item?.typeId == 'true:scar_h_scope_2x_empty') {
          player.runCommandAsync("playsound gun_empty @a [r=4] ~ ~ ~");
          player.runCommandAsync("replaceitem entity @s [hasitem={item=true:scar_h_scope_2x_empty,location=slot.weapon.mainhand},tag=ammo_762mm] slot.weapon.mainhand 0 true:scar_h_scope_2x 1 0");
          player.runCommandAsync("clear @s [hasitem={item=true:ammo_762mm}] true:ammo_762mm 0 1");
          player.runCommandAsync("scoreboard players add @s scar_h_scope_2x_reloading 30");
        }
        if (item?.typeId == 'true:scar_h_scope_4x_empty') {
          player.runCommandAsync("playsound gun_empty @a [r=4] ~ ~ ~");
          player.runCommandAsync("replaceitem entity @s [hasitem={item=true:scar_h_scope_4x_empty,location=slot.weapon.mainhand},tag=ammo_762mm] slot.weapon.mainhand 0 true:scar_h_scope_4x 1 0");
          player.runCommandAsync("clear @s [hasitem={item=true:ammo_762mm}] true:ammo_762mm 0 1");
          player.runCommandAsync("scoreboard players add @s scar_h_scope_4x_reloading 30");
        }
        if (item?.typeId == 'true:scar_h_scope_6x_empty') {
          player.runCommandAsync("playsound gun_empty @a [r=4] ~ ~ ~");
          player.runCommandAsync("replaceitem entity @s [hasitem={item=true:scar_h_scope_6x_empty,location=slot.weapon.mainhand},tag=ammo_762mm] slot.weapon.mainhand 0 true:scar_h_scope_6x 1 0");
          player.runCommandAsync("clear @s [hasitem={item=true:ammo_762mm}] true:ammo_762mm 0 1");
          player.runCommandAsync("scoreboard players add @s scar_h_scope_6x_reloading 30");
        }
        if (item?.typeId == 'true:ak47_empty') {
          player.runCommandAsync("playsound gun_empty @a [r=4] ~ ~ ~");
          player.runCommandAsync("replaceitem entity @s [hasitem={item=true:ak47_empty,location=slot.weapon.mainhand},tag=ammo_762mm] slot.weapon.mainhand 0 true:ak47 1 0");
          player.runCommandAsync("clear @s [hasitem={item=true:ammo_762mm}] true:ammo_762mm 0 1");
          player.runCommandAsync("scoreboard players add @s ak47_reloading 30");
        }
        if (item?.typeId == 'true:ak47_scope_2x_empty') {
          player.runCommandAsync("playsound gun_empty @a [r=4] ~ ~ ~");
          player.runCommandAsync("replaceitem entity @s [hasitem={item=true:ak47_scope_2x_empty,location=slot.weapon.mainhand},tag=ammo_762mm] slot.weapon.mainhand 0 true:ak47_scope_2x 1 0");
          player.runCommandAsync("clear @s [hasitem={item=true:ammo_762mm}] true:ammo_762mm 0 1");
          player.runCommandAsync("scoreboard players add @s ak47_scope_2x_reloading 30");
        }
        if (item?.typeId == 'true:ak47_scope_4x_empty') {
          player.runCommandAsync("playsound gun_empty @a [r=4] ~ ~ ~");
          player.runCommandAsync("replaceitem entity @s [hasitem={item=true:ak47_scope_4x_empty,location=slot.weapon.mainhand},tag=ammo_762mm] slot.weapon.mainhand 0 true:ak47_scope_4x 1 0");
          player.runCommandAsync("clear @s [hasitem={item=true:ammo_762mm}] true:ammo_762mm 0 1");
          player.runCommandAsync("scoreboard players add @s ak47_scope_4x_reloading 30");
        }
        if (item?.typeId == 'true:ak47_scope_6x_empty') {
          player.runCommandAsync("playsound gun_empty @a [r=4] ~ ~ ~");
          player.runCommandAsync("replaceitem entity @s [hasitem={item=true:ak47_scope_6x_empty,location=slot.weapon.mainhand},tag=ammo_762mm] slot.weapon.mainhand 0 true:ak47_scope_6x 1 0");
          player.runCommandAsync("clear @s [hasitem={item=true:ammo_762mm}] true:ammo_762mm 0 1");
          player.runCommandAsync("scoreboard players add @s ak47_scope_6x_reloading 30");
        }
        if (item?.typeId == 'true:hk416_empty') {
          player.runCommandAsync("playsound gun_empty @a [r=4] ~ ~ ~");
          player.runCommandAsync("replaceitem entity @s [hasitem={item=true:hk416_empty,location=slot.weapon.mainhand},tag=ammo_556mm] slot.weapon.mainhand 0 true:hk416 1 0");
          player.runCommandAsync("clear @s [hasitem={item=true:ammo_556mm}] true:ammo_556mm 0 1");
          player.runCommandAsync("scoreboard players add @s hk416_reloading 30");
        }
        if (item?.typeId == 'true:hk416_scope_2x_empty') {
          player.runCommandAsync("playsound gun_empty @a [r=4] ~ ~ ~");
          player.runCommandAsync("replaceitem entity @s [hasitem={item=true:hk416_scope_2x_empty,location=slot.weapon.mainhand},tag=ammo_556mm] slot.weapon.mainhand 0 true:hk416_scope_2x 1 0");
          player.runCommandAsync("clear @s [hasitem={item=true:ammo_556mm}] true:ammo_556mm 0 1");
          player.runCommandAsync("scoreboard players add @s hk416_scope_2x_reloading 30");
        }
        if (item?.typeId == 'true:hk416_scope_4x_empty') {
          player.runCommandAsync("playsound gun_empty @a [r=4] ~ ~ ~");
          player.runCommandAsync("replaceitem entity @s [hasitem={item=true:hk416_scope_4x_empty,location=slot.weapon.mainhand},tag=ammo_556mm] slot.weapon.mainhand 0 true:hk416_scope_4x 1 0");
          player.runCommandAsync("clear @s [hasitem={item=true:ammo_556mm}] true:ammo_556mm 0 1");
          player.runCommandAsync("scoreboard players add @s hk416_scope_4x_reloading 30");
        }
        if (item?.typeId == 'true:hk416_scope_6x_empty') {
          player.runCommandAsync("playsound gun_empty @a [r=4] ~ ~ ~");
          player.runCommandAsync("replaceitem entity @s [hasitem={item=true:hk416_scope_6x_empty,location=slot.weapon.mainhand},tag=ammo_556mm] slot.weapon.mainhand 0 true:hk416_scope_6x 1 0");
          player.runCommandAsync("clear @s [hasitem={item=true:ammo_556mm}] true:ammo_556mm 0 1");
          player.runCommandAsync("scoreboard players add @s hk416_scope_6x_reloading 30");
        }
        if (item?.typeId == 'true:awm_empty') {
          player.runCommandAsync("playsound gun_empty @a [r=4] ~ ~ ~");
          player.runCommandAsync("replaceitem entity @s [hasitem={item=true:awm_empty,location=slot.weapon.mainhand},tag=ammo_300] slot.weapon.mainhand 0 true:awm 1 0");
          player.runCommandAsync("clear @s [hasitem={item=true:ammo_300}] true:ammo_300 0 1");
          player.runCommandAsync("scoreboard players add @s awm_reloading 5");
        }
    }
);

