import { world, system, EquipmentSlot, EntityEquippableComponent } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui"
const placedLightBlocks = new Map();

//THIRST
world.afterEvents.itemUse.subscribe((eventData) => {
const player = eventData.source
const item = player.getComponent('equippable').getEquipment('Mainhand')
     if (item?.typeId == 'true:king_kola') {
         player.runCommandAsync("scoreboard players remove @s hydration 30");
         player.runCommandAsync("playsound player_drinking @a [r=2] ~ ~ ~");
         player.runCommandAsync("clear @s true:king_kola 0 1");
         player.runCommandAsync("give @s true:empty_drink_tin 1");
        }
        if (item?.typeId == 'true:cherry_king_kola') {
          player.runCommandAsync("scoreboard players remove @s hydration 30");
          player.runCommandAsync("playsound player_drinking @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:cherry_king_kola 0 1");
          player.runCommandAsync("give @s true:empty_drink_tin 1");
         }
         if (item?.typeId == 'true:vanilla_king_kola') {
          player.runCommandAsync("scoreboard players remove @s hydration 30");
          player.runCommandAsync("playsound player_drinking @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:vanilla_king_kola 0 1");
          player.runCommandAsync("give @s true:empty_drink_tin 1");
         }
         if (item?.typeId == 'true:cherry_popso') {
          player.runCommandAsync("scoreboard players remove @s hydration 30");
          player.runCommandAsync("playsound player_drinking @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:cherry_popso 0 1");
          player.runCommandAsync("give @s true:empty_drink_tin 1");
         }
         if (item?.typeId == 'true:dr_poppers') {
          player.runCommandAsync("scoreboard players remove @s hydration 30");
          player.runCommandAsync("playsound player_drinking @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:dr_poppers 0 1");
          player.runCommandAsync("give @s true:empty_drink_tin 1");
         }
         if (item?.typeId == 'true:freshers_fruit_twist') {
          player.runCommandAsync("scoreboard players remove @s hydration 30");
          player.runCommandAsync("playsound player_drinking @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:freshers_fruit_twist 0 1");
          player.runCommandAsync("give @s true:empty_drink_tin 1");
         }
         if (item?.typeId == 'true:freshers_orange') {
          player.runCommandAsync("scoreboard players remove @s hydration 30");
          player.runCommandAsync("playsound player_drinking @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:freshers_orange 0 1");
          player.runCommandAsync("give @s true:empty_drink_tin 1");
         }
         if (item?.typeId == 'true:popso') {
          player.runCommandAsync("scoreboard players remove @s hydration 30");
          player.runCommandAsync("playsound player_drinking @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:popso 0 1");
          player.runCommandAsync("give @s true:empty_drink_tin 1");
         }
         if (item?.typeId == 'true:popso_max') {
          player.runCommandAsync("scoreboard players remove @s hydration 30");
          player.runCommandAsync("playsound player_drinking @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:popso_max 0 1");
          player.runCommandAsync("give @s true:empty_drink_tin 1");
         }
         if (item?.typeId == 'true:popso_max_lime') {
          player.runCommandAsync("scoreboard players remove @s hydration 30");
          player.runCommandAsync("playsound player_drinking @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:popso_max_lime 0 1");
          player.runCommandAsync("give @s true:empty_drink_tin 1");
         }
         if (item?.typeId == 'true:bottle_of_beer') {
          player.runCommandAsync("playsound player_drinking @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:bottle_of_beer 0 1");
          player.runCommandAsync("effect @s nausea 10 2 true");
          player.runCommandAsync("effect @s resistance 30 5 true");
         }
         if (item?.typeId == 'true:bottle_of_water_4' && player.isInWater == true) {
          player.runCommandAsync("playsound bottle_refill @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:bottle_of_water_4 0 1");
          player.runCommandAsync("give @s true:bottle_of_water_dirty_4 1");
         }
         if (item?.typeId == 'true:bottle_of_water_4' && player.isInWater == false) {
          player.runCommandAsync("scoreboard players remove @s hydration 100");
          player.runCommandAsync("scoreboard players remove @s blood 5");
          player.runCommandAsync("playsound player_drinking @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:bottle_of_water_4 0 1");
          player.runCommandAsync("give @s true:bottle_of_water_3 1");
         }
         if (item?.typeId == 'true:bottle_of_water_3' && player.isInWater == true) {
          player.runCommandAsync("playsound bottle_refill @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:bottle_of_water_3 0 1");
          player.runCommandAsync("give @s true:bottle_of_water_dirty_4 1");
         }
         if (item?.typeId == 'true:bottle_of_water_3' && player.isInWater == false) {
          player.runCommandAsync("scoreboard players remove @s hydration 100");
          player.runCommandAsync("scoreboard players remove @s blood 5");
          player.runCommandAsync("playsound player_drinking @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:bottle_of_water_3 0 1");
          player.runCommandAsync("give @s true:bottle_of_water_2 1");
         }
         if (item?.typeId == 'true:bottle_of_water_2' && player.isInWater == true) {
          player.runCommandAsync("playsound bottle_refill @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:bottle_of_water_2 0 1");
          player.runCommandAsync("give @s true:bottle_of_water_dirty_4 1");
         }
         if (item?.typeId == 'true:bottle_of_water_2' && player.isInWater == false) {
          player.runCommandAsync("scoreboard players remove @s hydration 100");
          player.runCommandAsync("scoreboard players remove @s blood 5");
          player.runCommandAsync("playsound player_drinking @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:bottle_of_water_2 0 1");
          player.runCommandAsync("give @s true:bottle_of_water_1 1");
         }
         if (item?.typeId == 'true:bottle_of_water_1' && player.isInWater == true) {
          player.runCommandAsync("playsound bottle_refill @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:bottle_of_water_1 0 1");
          player.runCommandAsync("give @s true:bottle_of_water_dirty_4 1");
         }
         if (item?.typeId == 'true:bottle_of_water_1' && player.isInWater == false) {
          player.runCommandAsync("scoreboard players remove @s hydration 100");
          player.runCommandAsync("scoreboard players remove @s blood 5");
          player.runCommandAsync("playsound player_drinking @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:bottle_of_water_1 0 1");
          player.runCommandAsync("give @s true:bottle_of_water_0 1");
         }
         if (item?.typeId == 'true:bottle_of_water_0' && player.isInWater == true) {
          player.runCommandAsync("playsound bottle_refill @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:bottle_of_water_0 0 1");
          player.runCommandAsync("give @s true:bottle_of_water_dirty_4 1");
         }
         if (item?.typeId == 'true:bottle_of_water_dirty_4' && player.isInWater == true) {
          player.runCommandAsync("playsound bottle_refill @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:bottle_of_water_dirty_4 0 1");
          player.runCommandAsync("give @s true:bottle_of_water_dirty_4 1");
         }
         if (item?.typeId == 'true:bottle_of_water_dirty_4' && player.isInWater == false) {
          player.runCommandAsync("scoreboard players remove @s hydration 10");
          player.runCommandAsync("playsound player_drinking @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:bottle_of_water_dirty_4 0 1");
          player.runCommandAsync("give @s true:bottle_of_water_dirty_3 1");
          player.runCommandAsync("effect @s hunger 20 2 true");
         }
         if (item?.typeId == 'true:bottle_of_water_dirty_3' && player.isInWater == true) {
          player.runCommandAsync("playsound bottle_refill @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:bottle_of_water_dirty_3 0 1");
          player.runCommandAsync("give @s true:bottle_of_water_dirty_4 1");
         }
         if (item?.typeId == 'true:bottle_of_water_dirty_3' && player.isInWater == false) {
          player.runCommandAsync("scoreboard players remove @s hydration 10");
          player.runCommandAsync("playsound player_drinking @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:bottle_of_water_dirty_3 0 1");
          player.runCommandAsync("give @s true:bottle_of_water_dirty_2 1");
          player.runCommandAsync("effect @s hunger 20 2 true");
         }
         if (item?.typeId == 'true:bottle_of_water_dirty_2' && player.isInWater == true) {
          player.runCommandAsync("playsound bottle_refill @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:bottle_of_water_dirty_2 0 1");
          player.runCommandAsync("give @s true:bottle_of_water_dirty_4 1");
         }
         if (item?.typeId == 'true:bottle_of_water_dirty_2' && player.isInWater == false) {
          player.runCommandAsync("scoreboard players remove @s hydration 10");
          player.runCommandAsync("playsound player_drinking @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:bottle_of_water_dirty_2 0 1");
          player.runCommandAsync("give @s true:bottle_of_water_dirty_1 1");
          player.runCommandAsync("effect @s hunger 20 2 true");
         }
         if (item?.typeId == 'true:bottle_of_water_dirty_1' && player.isInWater == true) {
          player.runCommandAsync("playsound bottle_refill @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:bottle_of_water_dirty_1 0 1");
          player.runCommandAsync("give @s true:bottle_of_water_dirty_4 1");
         }
         if (item?.typeId == 'true:bottle_of_water_dirty_1' && player.isInWater == false) {
          player.runCommandAsync("scoreboard players remove @s hydration 10");
          player.runCommandAsync("playsound player_drinking @a [r=2] ~ ~ ~");
          player.runCommandAsync("clear @s true:bottle_of_water_dirty_1 0 1");
          player.runCommandAsync("give @s true:bottle_of_water_0 1");
          player.runCommandAsync("effect @s hunger 20 2 true");
         }
     }
);
world.afterEvents.itemCompleteUse.subscribe((eventData) => {
  const player = eventData.source
  const item = player.getComponent('equippable').getEquipment('Mainhand')
          if (item?.typeId == 'minecraft:melon_slice') {
            player.runCommandAsync("scoreboard players remove @s hydration 20");
           }
           if (item?.typeId == 'minecraft:apple') {
            player.runCommandAsync("scoreboard players remove @s hydration 20");
           }
           if (item?.typeId == 'minecraft:carrot') {
            player.runCommandAsync("scoreboard players remove @s hydration 10");
           }
       }
  );
//MEDICAL
world.afterEvents.itemUse.subscribe((eventData) => {
  const player = eventData.source
  const item = player.getComponent('equippable').getEquipment('Mainhand') 
          if (item?.typeId == 'true:bandage') {
           player.runCommandAsync("playsound player_hurt @a [r=2] ~ ~ ~");
           player.runCommandAsync("clear @s true:bandage 0 1");
           player.runCommandAsync("effect @s regeneration 10 4 true");
          }
          if (item?.typeId == 'true:morphine') {
           player.runCommandAsync("playsound player_pills @a [r=2] ~ ~ ~");
           player.runCommandAsync("scoreboard players add @s hydration 20");
           player.runCommandAsync("clear @s true:morphine 0 1");
           player.runCommandAsync("effect @s regeneration 30 5 true");
           player.runCommandAsync("effect @s slowness 0 0 true");
          }
          if (item?.typeId == 'true:leg_splint') {
           player.runCommandAsync("playsound player_hurt @a [r=2] ~ ~ ~");
           player.runCommandAsync("clear @s true:leg_splint 0 1");
           player.runCommandAsync("effect @s slowness 0 0 true");
          }
          if (item?.typeId == 'true:cigarette') {
            player.runCommandAsync(`particle true:spray_can ^ ^1 ^`);
            player.runCommandAsync("scoreboard players add @s hydration 5");
            player.runCommandAsync("clear @s true:cigarette 0 1");
            player.runCommandAsync("effect @s resistance 30 2 true");
          }
       }
    )
  //ANTIBIOTICS
  world.afterEvents.itemUse.subscribe((eventData) => {
  const player = eventData.source
  const item = player.getComponent('equippable').getEquipment('Mainhand') 
          if (item?.typeId == 'true:penicillin') {
            player.runCommandAsync("playsound player_pills @a [r=2] ~ ~ ~");
            player.runCommandAsync("scoreboard players add @s hydration 30");
            player.runCommandAsync("scoreboard players remove @s blood 40");
            player.runCommandAsync("clear @s true:penicillin 0 1");
          }
          if (item?.typeId == 'true:cephalosporin') {
            player.runCommandAsync("playsound player_pills @a [r=2] ~ ~ ~");
            player.runCommandAsync("scoreboard players add @s hydration 30");
            player.runCommandAsync("scoreboard players remove @s blood 40");
            player.runCommandAsync("clear @s true:cephalosporin 0 1");
          }
          if (item?.typeId == 'true:doxycycline') {
            player.runCommandAsync("playsound player_pills @a [r=2] ~ ~ ~");
            player.runCommandAsync("scoreboard players add @s hydration 30");
            player.runCommandAsync("scoreboard players remove @s blood 40");
            player.runCommandAsync("clear @s true:doxycycline 0 1");
          }
          if (item?.typeId == 'true:tetracycline') {
            player.runCommandAsync("playsound player_pills @a [r=2] ~ ~ ~");
            player.runCommandAsync("scoreboard players add @s hydration 30");
            player.runCommandAsync("scoreboard players remove @s blood 40");
            player.runCommandAsync("clear @s true:tetracycline 0 1");
          }
       }
    )
  //ENERGY
  world.afterEvents.itemUse.subscribe((eventData) => {
    const player = eventData.source
    const item = player.getComponent('equippable').getEquipment('Mainhand') 
            if (item?.typeId == 'true:adrenaline') {
              player.runCommandAsync("playsound player_hurt @a [r=2] ~ ~ ~");
              player.runCommandAsync("scoreboard players remove @s energy 80");
              player.runCommandAsync("clear @s true:adrenaline 0 1");
            }
            if (item?.typeId == 'true:pro_extra') {
              player.runCommandAsync("playsound player_pills @a [r=2] ~ ~ ~");
              player.runCommandAsync("scoreboard players remove @s energy 60");
              player.runCommandAsync("clear @s true:pro_extra 0 1");
            }
            if (item?.typeId == 'true:steroids') {
              player.runCommandAsync("playsound player_pills @a [r=2] ~ ~ ~");
              player.runCommandAsync("scoreboard players add @s hydration 40");
              player.runCommandAsync("scoreboard players remove @s energy 60");
              player.runCommandAsync("clear @s true:steroids 0 1");
              player.runCommandAsync("effect @s speed 30 2 true");
              player.runCommandAsync("effect @s strength 30 2 true");
              player.runCommandAsync("effect @s jump_boost 30 2 true");
            }
            if (item?.typeId == 'true:crimson_buffalo') {
              player.runCommandAsync("playsound player_drinking @a [r=2] ~ ~ ~");
              player.runCommandAsync("scoreboard players remove @s energy 40");
              player.runCommandAsync("clear @s true:crimson_buffalo 0 1");
              player.runCommandAsync("give @s true:empty_drink_tin 1");
             }
             if (item?.typeId == 'true:midway_energy') {
              player.runCommandAsync("playsound player_drinking @a [r=2] ~ ~ ~");
              player.runCommandAsync("scoreboard players remove @s energy 40");
              player.runCommandAsync("clear @s true:midway_energy 0 1");
              player.runCommandAsync("give @s true:empty_drink_tin 1");
             }
         }
    );
    world.afterEvents.itemCompleteUse.subscribe((eventData) => {
      const player = eventData.source
      const item = player.getComponent('equippable').getEquipment('Mainhand')
               if (item?.typeId == 'minecraft:potato') {
                player.runCommandAsync("scoreboard players remove @s energy 10");
               }
               if (item?.typeId == 'true:dumb') {
                player.runCommandAsync("scoreboard players remove @s energy 10");
               }
               if (item?.typeId == 'true:earth') {
                player.runCommandAsync("scoreboard players remove @s energy 10");
               }
               if (item?.typeId == 'true:twonk') {
                player.runCommandAsync("scoreboard players remove @s energy 10");
               }
               if (item?.typeId == 'true:peanut') {
                player.runCommandAsync("scoreboard players remove @s energy 2");
               }
           }
      );
  //HYGIENE
  world.afterEvents.itemUse.subscribe((eventData) => {
    const player = eventData.source
    const item = player.getComponent('equippable').getEquipment('Mainhand') 
            if (item?.typeId == 'true:sphinx_asia') {
              player.runCommandAsync("playsound spray_can @a [r=2] ~ ~ ~");
              player.runCommandAsync("scoreboard players remove @s hygiene 10");
              player.runCommandAsync(`particle true:spray_can ^ ^1 ^`);
              player.runCommandAsync("clear @s true:sphinx_asia 0 1");
            }
            if (item?.typeId == 'true:sphinx_magnet') {
              player.runCommandAsync("playsound spray_can @a [r=2] ~ ~ ~");
              player.runCommandAsync("scoreboard players remove @s hygiene 10");
              player.runCommandAsync(`particle true:spray_can ^ ^1 ^`);
              player.runCommandAsync("clear @s true:sphinx_magnet 0 1");
            }
            if (item?.typeId == 'true:sphinx_dark_moon') {
              player.runCommandAsync("playsound spray_can @a [r=2] ~ ~ ~");
              player.runCommandAsync("scoreboard players remove @s hygiene 10");
              player.runCommandAsync(`particle true:spray_can ^ ^1 ^`);
              player.runCommandAsync("clear @s true:sphinx_magnet 0 1");
            }
            if (item?.typeId == 'true:aquaflow_apple' && player.isInWater == true) {
              player.runCommandAsync("playsound water_splash @a [r=2] ~ ~ ~");
              player.runCommandAsync("scoreboard players remove @s hygiene 100");
              player.runCommandAsync(`particle true:bubbles ^ ^1 ^`);
              player.runCommandAsync("clear @s true:aquaflow_apple 0 1");
             }
            if (item?.typeId == 'true:aquaflow_lemon' && player.isInWater == true) {
              player.runCommandAsync("playsound water_splash @a [r=2] ~ ~ ~");
              player.runCommandAsync("scoreboard players remove @s hygiene 100");
              player.runCommandAsync(`particle true:bubbles ^ ^1 ^`);
              player.runCommandAsync("clear @s true:aquaflow_lemon 0 1");
             }
            if (item?.typeId == 'true:aquaflow_strawberry' && player.isInWater == true) {
              player.runCommandAsync("playsound water_splash @a [r=2] ~ ~ ~");
              player.runCommandAsync("scoreboard players remove @s hygiene 100");
              player.runCommandAsync(`particle true:bubbles ^ ^1 ^`);
              player.runCommandAsync("clear @s true:aquaflow_strawberry 0 1");
             }
            if (item?.typeId == 'true:revive_shampoo' && player.isInWater == true) {
              player.runCommandAsync("playsound water_splash @a [r=2] ~ ~ ~");
              player.runCommandAsync("scoreboard players remove @s hygiene 50");
              player.runCommandAsync(`particle true:bubbles ^ ^1 ^`);
              player.runCommandAsync("clear @s true:revive_shampoo 0 1");
             }
            if (item?.typeId == 'true:revive_conditioner' && player.isInWater == true) {
              player.runCommandAsync("playsound water_splash @a [r=2] ~ ~ ~");
              player.runCommandAsync("scoreboard players remove @s hygiene 50");
              player.runCommandAsync(`particle true:bubbles ^ ^1 ^`);
              player.runCommandAsync("clear @s true:revive_conditioner 0 1");
             }
         }
    );
  //PLAYER STATS
  system.runInterval(() => {
      for (const player of world.getPlayers()) {
          if (player.hasTag("hydration_100")){
            player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hydration §9100§r"}]}`);
          }
          if (player.hasTag("hydration_95")){
            player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hydration §995§r"}]}`);
          }
          if (player.hasTag("hydration_90")){
            player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hydration §990§r"}]}`);
          }
          if (player.hasTag("hydration_85")){
            player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hydration §985§r"}]}`);
          }
          if (player.hasTag("hydration_80")){
            player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hydration §980§r"}]}`);
          }
          if (player.hasTag("hydration_75")){
            player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hydration §975§r"}]}`);
          }
          if (player.hasTag("hydration_70")){
            player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hydration §970§r"}]}`);
          }
          if (player.hasTag("hydration_65")){
            player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hydration §965§r"}]}`);
          }
          if (player.hasTag("hydration_60")){
            player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hydration §960§r"}]}`);
          }
          if (player.hasTag("hydration_55")){
            player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hydration §955§r"}]}`);
          }
          if (player.hasTag("hydration_50")){
            player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hydration §950§r"}]}`);
          }
          if (player.hasTag("hydration_45")){
            player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hydration §945§r"}]}`);
          }
          if (player.hasTag("hydration_40")){
            player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hydration §940§r"}]}`);
          }
          if (player.hasTag("hydration_35")){
            player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hydration §935§r"}]}`);
          }
          if (player.hasTag("hydration_30")){
            player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hydration §930§r"}]}`);
          }
          if (player.hasTag("hydration_25")){
            player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hydration §925§r"}]}`);
          }
          if (player.hasTag("hydration_20")){
            player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hydration §920§r"}]}`);
          }
          if (player.hasTag("hydration_15")){
            player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hydration §915§r"}]}`);
          }
          if (player.hasTag("hydration_10")){
            player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hydration §910§r"}]}`);
          }
          if (player.hasTag("hydration_5")){
            player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hydration §95§r"}]}`);
          }
          if (player.hasTag("hydration_0")){
            player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hydration §90§r"}]}`);
          }
      }
  }, 5* 10);
  system.runInterval(() => {
    for (const player of world.getPlayers()) {
        if (player.hasTag("blood_0")){
          player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Blood Toxicity §c0§r"}]}`);
        }
        if (player.hasTag("blood_5")){
          player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Blood Toxicity §c5§r"}]}`);
        }
        if (player.hasTag("blood_10")){
          player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Blood Toxicity §c10§r"}]}`);
        }
        if (player.hasTag("blood_15")){
          player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Blood Toxicity §c15§r"}]}`);
        }
        if (player.hasTag("blood_20")){
          player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Blood Toxicity §c20§r"}]}`);
        }
        if (player.hasTag("blood_25")){
          player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Blood Toxicity §c25§r"}]}`);
        }
        if (player.hasTag("blood_30")){
          player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Blood Toxicity §c30§r"}]}`);
        }
        if (player.hasTag("blood_35")){
          player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Blood Toxicity §c35§r"}]}`);
        }
        if (player.hasTag("blood_40")){
          player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Blood Toxicity §c40§r"}]}`);
        }
        if (player.hasTag("blood_45")){
          player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Blood Toxicity §c45§r"}]}`);
        }
        if (player.hasTag("blood_50")){
          player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Blood Toxicity §c50§r"}]}`);
        }
        if (player.hasTag("blood_55")){
          player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Blood Toxicity §c55§r"}]}`);
        }
        if (player.hasTag("blood_60")){
          player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Blood Toxicity §c60§r"}]}`);
        }
        if (player.hasTag("blood_65")){
          player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Blood Toxicity §c65§r"}]}`);
        }
        if (player.hasTag("blood_70")){
          player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Blood Toxicity §c70§r"}]}`);
        }
        if (player.hasTag("blood_75")){
          player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Blood Toxicity §c75§r"}]}`);
        }
        if (player.hasTag("blood_80")){
          player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Blood Toxicity §c80§r"}]}`);
        }
        if (player.hasTag("blood_85")){
          player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Blood Toxicity §c85§r"}]}`);
        }
        if (player.hasTag("blood_90")){
          player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Blood Toxicity §c90§r"}]}`);
        }
        if (player.hasTag("blood_95")){
          player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Blood Toxicity §c95§r"}]}`);
        }
        if (player.hasTag("blood_100")){
          player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Blood Toxicity §c100§r"}]}`);
        }
    }
}, 5* 20);
system.runInterval(() => {
  for (const player of world.getPlayers()) {
      if (player.hasTag("energy_100")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Energy §e100§r"}]}`);
      }
      if (player.hasTag("energy_95")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Energy §e95§r"}]}`);
      }
      if (player.hasTag("energy_90")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Energy §e90§r"}]}`);
      }
      if (player.hasTag("energy_85")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Energy §e85§r"}]}`);
      }
      if (player.hasTag("energy_80")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Energy §e80§r"}]}`);
      }
      if (player.hasTag("energy_75")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Energy §e75§r"}]}`);
      }
      if (player.hasTag("energy_70")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Energy §e70§r"}]}`);
      }
      if (player.hasTag("energy_65")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Energy §e65§r"}]}`);
      }
      if (player.hasTag("energy_60")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Energy §e60§r"}]}`);
      }
      if (player.hasTag("energy_55")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Energy §e55§r"}]}`);
      }
      if (player.hasTag("energy_50")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Energy §e50§r"}]}`);
      }
      if (player.hasTag("energy_45")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Energy §e45§r"}]}`);
      }
      if (player.hasTag("energy_40")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Energy §e40§r"}]}`);
      }
      if (player.hasTag("energy_35")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Energy §e35§r"}]}`);
      }
      if (player.hasTag("energy_30")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Energy §e30§r"}]}`);
      }
      if (player.hasTag("energy_25")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Energy §e25§r"}]}`);
      }
      if (player.hasTag("energy_20")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Energy §e20§r"}]}`);
      }
      if (player.hasTag("energy_15")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Energy §e15§r"}]}`);
      }
      if (player.hasTag("energy_10")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Energy §e10§r"}]}`);
      }
      if (player.hasTag("energy_5")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Energy §e5§r"}]}`);
      }
      if (player.hasTag("energy_0")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Energy §e0§r"}]}`);
      }
   }
}, 5* 30);
system.runInterval(() => {
  for (const player of world.getPlayers()) {
      if (player.hasTag("hygiene_100")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hygiene §b0§r"}]}`);
      }
      if (player.hasTag("hygiene_95")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hygiene §b5§r"}]}`);
      }
      if (player.hasTag("hygiene_90")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hygiene §b10§r"}]}`);
      }
      if (player.hasTag("hygiene_85")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hygiene §b15§r"}]}`);
      }
      if (player.hasTag("hygiene_80")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hygiene §b20§r"}]}`);
      }
      if (player.hasTag("hygiene_75")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hygiene §b25§r"}]}`);
      }
      if (player.hasTag("hygiene_70")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hygiene §b30§r"}]}`);
      }
      if (player.hasTag("hygiene_65")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hygiene §b35§r"}]}`);
      }
      if (player.hasTag("hygiene_60")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hygiene §b40§r"}]}`);
      }
      if (player.hasTag("hygiene_55")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hygiene §b45§r"}]}`);
      }
      if (player.hasTag("hygiene_50")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hygiene §b50§r"}]}`);
      }
      if (player.hasTag("hygiene_45")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hygiene §b55§r"}]}`);
      }
      if (player.hasTag("hygiene_40")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hygiene §b60§r"}]}`);
      }
      if (player.hasTag("hygiene_35")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hygiene §b65§r"}]}`);
      }
      if (player.hasTag("hygiene_30")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hygiene §b70§r"}]}`);
      }
      if (player.hasTag("hygiene_25")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hygiene §b75§r"}]}`);
      }
      if (player.hasTag("hygiene_20")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hygiene §b80§r"}]}`);
      }
      if (player.hasTag("hygiene_15")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hygiene §b85§r"}]}`);
      }
      if (player.hasTag("hygiene_10")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hygiene §b90§r"}]}`);
      }
      if (player.hasTag("hygiene_5")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hygiene §b95§r"}]}`);
      }
      if (player.hasTag("hygiene_0")){
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"Hygiene §b100§r"}]}`);
      }
  }
}, 5* 40);
 //WALKIE TALKIE
 world.afterEvents.itemUse.subscribe((eventData) => {
  const player = eventData.source
  const item = player.getComponent('equippable').getEquipment('Mainhand')
  if (item?.typeId == 'true:walkie_talkie') {
      player.runCommandAsync("playsound walkie_talkie_active @s ~ ~ ~");
      const gui = new ActionFormData();
      gui.button('Armory Supply Drop', 'textures/gui/menu/armory_icon')
      gui.button('Food Supply Drop', 'textures/gui/menu/food_icon')
      gui.button('Medical Supply Drop', 'textures/gui/menu/medical_icon')
      gui.button('Send Help!', 'textures/gui/menu/army_icon')
      gui.button('Exit!', 'textures/gui/menu/exit_icon')
      gui.show(player).then(result => {
          if (result.selection === 0) {
            armory_supply(player)
          }
          if (result.selection === 1) {
            food_supply(player)
          }
          if (result.selection === 2) {
            medical_supply(player)
          }
          if (result.selection === 3) {
            send_help(player)
          }
          if (result.selection === 4) {
              exit(player)
          }
       }
    )
 }
 function armory_supply(player) {
  player.runCommandAsync("summon true:supply_crate ~ ~100 ~");
  player.runCommandAsync("playsound walkie_talkie_supply @s ~ ~ ~");
  player.runCommandAsync("clear @s true:walkie_talkie 0 1");
  }
  function food_supply(player) {
  player.runCommandAsync("summon true:supply_crate_food ~ ~100 ~");
  player.runCommandAsync("playsound walkie_talkie_supply @s ~ ~ ~");
  player.runCommandAsync("clear @s true:walkie_talkie 0 1");
  }
  function medical_supply(player) {
    player.runCommandAsync("summon true:supply_crate_medical ~ ~100 ~");
    player.runCommandAsync("playsound walkie_talkie_supply @s ~ ~ ~");
    player.runCommandAsync("clear @s true:walkie_talkie 0 1");
  }
  function send_help(player) {
    player.runCommandAsync("summon true:soldier ~ ~ ~4");
    player.runCommandAsync("summon true:soldier ~ ~ ~-4");
    player.runCommandAsync("summon true:soldier ~4 ~ ~");
    player.runCommandAsync("summon true:soldier ~-4 ~ ~");
    player.runCommandAsync("playsound walkie_talkie_army @s ~ ~ ~");
    player.runCommandAsync("clear @s true:walkie_talkie 0 1");
  }
 function exit(player) {
  player.runCommandAsync;
   }
 }
)
//BACKPACKS
world.afterEvents.itemUse.subscribe((eventData) => {
  const player = eventData.source
  const item = player.getComponent('equippable').getEquipment('Mainhand')
  if (item?.typeId == 'true:backpack_black_item') {
        player.runCommand(`summon true:backpack_black ~ ~ ~ ~ ~ minecraft:entity_spawned "${player.name}"`);
        player.runCommand('replaceitem entity @p slot.weapon.mainhand 0 air');
     }
  if (item?.typeId == 'true:backpack_blue_item') {
        player.runCommand(`summon true:backpack_blue ~ ~ ~ ~ ~ minecraft:entity_spawned "${player.name}"`);
        player.runCommand('replaceitem entity @p slot.weapon.mainhand 0 air');
     }
  if (item?.typeId == 'true:backpack_brown_item') {
        player.runCommand(`summon true:backpack_brown ~ ~ ~ ~ ~ minecraft:entity_spawned "${player.name}"`);
        player.runCommand('replaceitem entity @p slot.weapon.mainhand 0 air');
     }
  if (item?.typeId == 'true:backpack_cyan_item') {
        player.runCommand(`summon true:backpack_cyan ~ ~ ~ ~ ~ minecraft:entity_spawned "${player.name}"`);
        player.runCommand('replaceitem entity @p slot.weapon.mainhand 0 air');
    }
  if (item?.typeId == 'true:backpack_gray_item') {
       player.runCommand(`summon true:backpack_gray ~ ~ ~ ~ ~ minecraft:entity_spawned "${player.name}"`);
       player.runCommand('replaceitem entity @p slot.weapon.mainhand 0 air');
  }
  if (item?.typeId == 'true:backpack_green_item') {
       player.runCommand(`summon true:backpack_green ~ ~ ~ ~ ~ minecraft:entity_spawned "${player.name}"`);
       player.runCommand('replaceitem entity @p slot.weapon.mainhand 0 air');
  }
  if (item?.typeId == 'true:backpack_light_blue_item') {
      player.runCommand(`summon true:backpack_light_blue ~ ~ ~ ~ ~ minecraft:entity_spawned "${player.name}"`);
      player.runCommand('replaceitem entity @p slot.weapon.mainhand 0 air');
  }
  if (item?.typeId == 'true:backpack_lime_item') {
      player.runCommand(`summon true:backpack_lime ~ ~ ~ ~ ~ minecraft:entity_spawned "${player.name}"`);
      player.runCommand('replaceitem entity @p slot.weapon.mainhand 0 air');
  }
  if (item?.typeId == 'true:backpack_magenta_item') {
      player.runCommand(`summon true:backpack_magenta ~ ~ ~ ~ ~ minecraft:entity_spawned "${player.name}"`);
      player.runCommand('replaceitem entity @p slot.weapon.mainhand 0 air');
  }
  if (item?.typeId == 'true:backpack_red_item') {
      player.runCommand(`summon true:backpack_red ~ ~ ~ ~ ~ minecraft:entity_spawned "${player.name}"`);
      player.runCommand('replaceitem entity @p slot.weapon.mainhand 0 air');
    }
  if (item?.typeId == 'true:backpack_orange_item') {
      player.runCommand(`summon true:backpack_orange ~ ~ ~ ~ ~ minecraft:entity_spawned "${player.name}"`);
      player.runCommand('replaceitem entity @p slot.weapon.mainhand 0 air');
   }
  if (item?.typeId == 'true:backpack_pink_item') {
     player.runCommand(`summon true:backpack_pink ~ ~ ~ ~ ~ minecraft:entity_spawned "${player.name}"`);
     player.runCommand('replaceitem entity @p slot.weapon.mainhand 0 air');
  }
  if (item?.typeId == 'true:backpack_purple_item') {
     player.runCommand(`summon true:backpack_purple ~ ~ ~ ~ ~ minecraft:entity_spawned "${player.name}"`);
     player.runCommand('replaceitem entity @p slot.weapon.mainhand 0 air');
  }
  if (item?.typeId == 'true:backpack_silver_item') {
     player.runCommand(`summon true:backpack_silver ~ ~ ~ ~ ~ minecraft:entity_spawned "${player.name}"`);
     player.runCommand('replaceitem entity @p slot.weapon.mainhand 0 air');
  }
  if (item?.typeId == 'true:backpack_white_item') {
     player.runCommand(`summon true:backpack_white ~ ~ ~ ~ ~ minecraft:entity_spawned "${player.name}"`);
     player.runCommand('replaceitem entity @p slot.weapon.mainhand 0 air');
  }
  if (item?.typeId == 'true:backpack_yellow_item') {
    player.runCommand(`summon true:backpack_yellow ~ ~ ~ ~ ~ minecraft:entity_spawned "${player.name}"`);
    player.runCommand('replaceitem entity @p slot.weapon.mainhand 0 air');
  }
  if (item?.typeId == 'true:backpack_chicken_item') {
    player.runCommand(`summon true:backpack_chicken ~ ~ ~ ~ ~ minecraft:entity_spawned "${player.name}"`);
    player.runCommand('replaceitem entity @p slot.weapon.mainhand 0 air');
  }
  if (item?.typeId == 'true:backpack_cow_item') {
    player.runCommand(`summon true:backpack_cow ~ ~ ~ ~ ~ minecraft:entity_spawned "${player.name}"`);
    player.runCommand('replaceitem entity @p slot.weapon.mainhand 0 air');
  }
  if (item?.typeId == 'true:backpack_bee_item') {
     player.runCommand(`summon true:backpack_bee ~ ~ ~ ~ ~ minecraft:entity_spawned "${player.name}"`);
     player.runCommand('replaceitem entity @p slot.weapon.mainhand 0 air');
  }
  if (item?.typeId == 'true:backpack_fox_item') {
     player.runCommand(`summon true:backpack_fox ~ ~ ~ ~ ~ minecraft:entity_spawned "${player.name}"`);
     player.runCommand('replaceitem entity @p slot.weapon.mainhand 0 air');
  }
  if (item?.typeId == 'true:backpack_mooshroom_item') {
     player.runCommand(`summon true:backpack_mooshroom ~ ~ ~ ~ ~ minecraft:entity_spawned "${player.name}"`);
     player.runCommand('replaceitem entity @p slot.weapon.mainhand 0 air');
  }
   }
  )
//LIGHTING
system.runInterval(() => {
    for (const [key, blockInfo] of placedLightBlocks.entries()) {
        const { dimension, x, y, z } = blockInfo;
        dimension.runCommandAsync(
            `fill ${x} ${y} ${z} ${x} ${y} ${z} air replace light_block_10`
        );
        placedLightBlocks.delete(key);
    }
});
system.runInterval(() => {
    for (const player of world.getPlayers()) {
        const equipment = player.getComponent("minecraft:equippable");
        const mainHandItem = equipment.getEquipment(EquipmentSlot.Mainhand);
        const offHandItem = equipment.getEquipment(EquipmentSlot.Offhand);  
        const Head = equipment.getEquipment(EquipmentSlot.Head);  
        const equippableComponent = player.getComponent(
              EntityEquippableComponent.componentId
            ); 
         if (
            (mainHandItem && mainHandItem.typeId === "true:flashlight_mainhand") || (offHandItem && offHandItem.typeId === "true:flashlight_offhand") || (Head && Head.typeId === "true:construction_helmet_light")
            )
            { 
            const position = player.location;
            const x = Math.floor(position.x);
            const y = Math.floor(position.y);
            const z = Math.floor(position.z);
            const positionKey = `${x},${y},${z}`;
            if (!placedLightBlocks.has(positionKey)) {
                player.dimension.runCommandAsync(
                    `setblock ${x} ${y} ${z} light_block_10 keep`
                );
                placedLightBlocks.set(positionKey, { dimension: player.dimension, x, y, z });
            }
        }
    }
});