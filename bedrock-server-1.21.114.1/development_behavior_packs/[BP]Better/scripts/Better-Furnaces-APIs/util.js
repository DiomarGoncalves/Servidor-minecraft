export const utilClass = new class utilClass {
  particleType = {
    "dustveyn:better_furnaces.diamond_furnace": "dustveyn:better_furnace.fire_particle",
    "dustveyn:better_furnaces.copper_furnace": "dustveyn:better_furnace.fire_particle",
    "dustveyn:better_furnaces.iron_furnace": "dustveyn:better_furnace.fire_particle",
    "dustveyn:better_furnaces.gold_furnace": "dustveyn:better_furnace.fire_particle",
    "dustveyn:better_furnaces.amethyst_furnace": "dustveyn:better_furnace.fire_particle",
    "dustveyn:better_furnaces.obsidian_furnace": "dustveyn:better_furnace.fire_particle",
    "dustveyn:better_furnaces.emerald_furnace": "dustveyn:better_furnace.fire_particle",
    "dustveyn:better_furnaces.netherite_furnace": "dustveyn:better_furnace.blue_fire_particle"
  }

  DIRECTION_TO_SIDE = {
    2: "north",
    3: "south",
    4: "west",
    5: "east"
  };

  recipeType = {
    "minecraft:raw_iron": {
      output: "minecraft:iron_ingot"
    },
    "minecraft:resin_clump": {
      output: "minecraft:resin_brick"
    },
    "minecraft:chainmail_helmet": {
      output: "minecraft:iron_nugget"
    },
    "minecraft:chainmail_chestplate": {
      output: "minecraft:iron_nugget"
    },
    "minecraft:chainmail_leggings": {
      output: "minecraft:iron_nugget"
    },
    "minecraft:chainmail_boots": {
      output: "minecraft:iron_nugget"
    },
    "minecraft:iron_horse_armor": {
      output: "minecraft:iron_nugget"
    },
    "minecraft:iron_helmet": {
      output: "minecraft:iron_nugget"
    },
    "minecraft:iron_chestplate": {
      output: "minecraft:iron_nugget"
    },
    "minecraft:iron_leggings": {
      output: "minecraft:iron_nugget"
    },
    "minecraft:iron_boots": {
      output: "minecraft:iron_nugget"
    },
    "minecraft:iron_sword": {
      output: "minecraft:iron_nugget"
    },
    "minecraft:iron_pickaxe": {
      output: "minecraft:iron_nugget"
    },
    "minecraft:iron_shovel": {
      output: "minecraft:iron_nugget"
    },
    "minecraft:iron_axe": {
      output: "minecraft:iron_nugget"
    },
    "minecraft:iron_hoe": {
      output: "minecraft:iron_nugget"
    },
    "minecraft:gold_horse_armor": {
      output: "minecraft:gold_nugget"
    },
    "minecraft:golden_helmet": {
      output: "minecraft:gold_nugget"
    },
    "minecraft:golden_chestplate": {
      output: "minecraft:gold_nugget"
    },
    "minecraft:golden_leggings": {
      output: "minecraft:gold_nugget"
    },
    "minecraft:golden_boots": {
      output: "minecraft:gold_nugget"
    },
    "minecraft:golden_sword": {
      output: "minecraft:gold_nugget"
    },
    "minecraft:golden_pickaxe": {
      output: "minecraft:gold_nugget"
    },
    "minecraft:golden_shovel": {
      output: "minecraft:gold_nugget"
    },
    "minecraft:golden_axe": {
      output: "minecraft:gold_nugget"
    },
    "minecraft:golden_hoe": {
      output: "minecraft:gold_nugget"
    },
    "minecraft:oak_log": {
      output: "minecraft:charcoal"
    },
    "minecraft:dark_oak_log": {
      output: "minecraft:charcoal"
    },
    "minecraft:birch_log": {
      output: "minecraft:charcoal"
    },
    "minecraft:acacia_log": {
      output: "minecraft:charcoal"
    },
    "minecraft:spruce_log": {
      output: "minecraft:charcoal"
    },
    "minecraft:cherry_log": {
      output: "minecraft:charcoal"
    },
    "minecraft:jungle_log": {
      output: "minecraft:charcoal"
    },
    "minecraft:warped_stem": {
      output: "minecraft:charcoal"
    },
    "minecraft:crimson_stem": {
      output: "minecraft:charcoal"
    },
    "minecraft:oak_wood": {
      output: "minecraft:charcoal"
    },
    "minecraft:dark_oak_wood": {
      output: "minecraft:charcoal"
    },
    "minecraft:birch_wood": {
      output: "minecraft:charcoal"
    },
    "minecraft:acacia_wood": {
      output: "minecraft:charcoal"
    },
    "minecraft:spruce_wood": {
      output: "minecraft:charcoal"
    },
    "minecraft:warped_hyphae": {
      output: "minecraft:charcoal"
    },
    "minecraft:crimson_hyphae": {
      output: "minecraft:charcoal"
    },
    "minecraft:cherry_wood": {
      output: "minecraft:charcoal"
    },
    "minecraft:jungle_wood": {
      output: "minecraft:charcoal"
    },
    "minecraft:pale_oak_wood": {
      output: "minecraft:charcoal"
    },
    "minecraft:mangrove_log": {
      output: "minecraft:charcoal"
    },
    "minecraft:pale_oak_log": {
      output: "minecraft:charcoal"
    },
    "minecraft:stripped_oak_log": {
      output: "minecraft:charcoal"
    },
    "minecraft:stripped_pale_oak_log": {
      output: "minecraft:charcoal"
    },
    "minecraft:stripped_dark_oak_log": {
      output: "minecraft:charcoal"
    },
    "minecraft:stripped_jungle_log": {
      output: "minecraft:charcoal"
    },
    "minecraft:stripped_cherry_log": {
      output: "minecraft:charcoal"
    },
    "minecraft:stripped_birch_log": {
      output: "minecraft:charcoal"
    },
    "minecraft:stripped_acacia_log": {
      output: "minecraft:charcoal"
    },
    "minecraft:stripped_spruce_log": {
      "output": "minecraft:charcoal"
    },
    "minecraft:stripped_mangrove_log": {
      output: "minecraft:charcoal"
    },
    "minecraft:stripped_mangrove_wood": {
      output: "minecraft:charcoal"
    },
    "minecraft:stripped_oak_wood": {
      output: "minecraft:charcoal"
    },
    "minecraft:stripped_dark_oak_wood": {
      output: "minecraft:charcoal"
    },
    "minecraft:stripped_jungle_wood": {
      output: "minecraft:charcoal"
    },
    "minecraft:stripped_cherry_wood": {
      output: "minecraft:charcoal"
    },
    "minecraft:stripped_birch_wood": {
      output: "minecraft:charcoal"
    },
    "minecraft:stripped_acacia_wood": {
      output: "minecraft:charcoal"
    },
    "minecraft:stripped_spruce_wood": {
      output: "minecraft:charcoal"
    },
    "minecraft:stripped_pale_oak_wood": {
      output: "minecraft:charcoal"
    },
    "minecraft:stripped_crimson_hyphae": {
      output: "minecraft:charcoal"
    },
    "minecraft:stripped_warped_hyphae": {
      output: "minecraft:charcoal"
    },
    "minecraft:mangrove_wood": {
      output: "minecraft:charcoal"
    },
    "minecraft:cobblestone": {
      output: "minecraft:stone"
    },
    "minecraft:deepslate_diamond_ore": {
      output: "minecraft:diamond"
    },
    "minecraft:diamond_ore": {
      output: "minecraft:diamond"
    },
    "minecraft:deepslate_emerald_ore": {
      output: "minecraft:emerald"
    },
    "minecraft:emerald_ore": {
      output: "minecraft:emerald"
    },
    "minecraft:deepslate_lapis_ore": {
      output: "minecraft:lapis_lazuli"
    },
    "minecraft:lapis_ore": {
      output: "minecraft:lapis_lazuli"
    },
    "minecraft:deepslate_redstone_ore": {
      output: "minecraft:redstone"
    },
    "minecraft:redstone_ore": {
      output: "minecraft:redstone"
    },
    "minecraft:nether_gold_ore": {
      output: "minecraft:gold_ingot"
    },
    "minecraft:deepslate_gold_ore": {
      output: "minecraft:gold_ingot"
    },
    "minecraft:gold_ore": {
      output: "minecraft:gold_ingot"
    },
    "minecraft:raw_gold": {
      output: "minecraft:gold_ingot"
    },
    "minecraft:deepslate_iron_ore": {
      output: "minecraft:iron_ingot"
    },
    "minecraft:iron_ore": {
      output: "minecraft:iron_ingot"
    },
    "minecraft:raw_iron": {
      output: "minecraft:iron_ingot"
    },
    "minecraft:deepslate_copper_ore": {
      output: "minecraft:copper_ingot"
    },
    "minecraft:copper_ore": {
      output: "minecraft:copper_ingot"
    },
    "minecraft:raw_copper": {
      output: "minecraft:copper_ingot"
    },
    "minecraft:deepslate_coal_ore": {
      output: "minecraft:coal"
    },
    "minecraft:coal_ore": {
      output: "minecraft:coal"
    },
    "minecraft:quartz_ore": {
      output: "minecraft:quartz"
    },
    "minecraft:ancient_debris": {
      output: "minecraft:netherite_scrap"
    },
    "minecraft:clay_ball": {
      output: "minecraft:brick"
    },
    "minecraft:sand": {
      output: "minecraft:glass"
    },
    "minecraft:red_sand": {
      output: "minecraft:glass"
    },
    "minecraft:sandstone": {
      output: "minecraft:sandstone"
    },
    "minecraft:red_sandstone": {
      output: "minecraft:red_sandstone"
    },
    "minecraft:stone": {
      output: "minecraft:smooth_stone"
    },
    "minecraft:netherrack": {
      output: "minecraft:netherbrick"
    },
    "minecraft:nether_brick": {
      output: "minecraft:cracked_nether_bricks"
    },
    "minecraft:stonebrick": {
      output: "minecraft:cracked_stone_brick"
    },
    "minecraft:polished_blackstone_bricks": {
      output: "minecraft:cracked_polished_blackstone_bricks"
    },
    "minecraft:quartz_block": {
      output: "minecraft:smooth_quartz"
    },
    "minecraft:basalt": {
      output: "minecraft:smooth_basalt"
    },
    "minecraft:cobbled_deepslate": {
      output: "minecraft:deepslate"
    },
    "minecraft:deepslate_bricks": {
      output: "minecraft:cracked_deepslate_bricks"
    },
    "minecraft:deepslate_tiles": {
      output: "minecraft:cracked_deepslate_tiles"
    },
    "minecraft:clay": {
      output: "minecraft:hardened_clay"
    },
    "minecraft:sponge": {
      output: "minecraft:sponge"
    },
    "minecraft:beef": {
      output: "minecraft:cooked_beef"
    },
    "minecraft:chicken": {
      output: "minecraft:cooked_chicken"
    },
    "minecraft:porkchop": {
      output: "minecraft:cooked_porkchop"
    },
    "minecraft:mutton": {
      output: "minecraft:cooked_mutton"
    },
    "minecraft:rabbit": {
      output: "minecraft:cooked_rabbit"
    },
    "minecraft:cod": {
      output: "minecraft:cooked_cod"
    },
    "minecraft:salmon": {
      output: "minecraft:cooked_salmon"
    },
    "minecraft:potato": {
      output: "minecraft:baked_potato"
    },
    "minecraft:kelp": {
      output: "minecraft:dried_kelp"
    },
    "minecraft:chorus_fruit": {
      output: "minecraft:popped_chorus_fruit"
    },
    "minecraft:cactus": {
      output: "minecraft:green_dye"
    },
    "minecraft:sea_pickle": {
      output: "minecraft:lime_dye"
    }
  }

  durationType = {
    "minecraft:lava_bucket": {
      duration: 20000,
      transform: {
        item: "minecraft:bucket"
      }
    },
    "minecraft:coal": {
      duration: 1600
    },
    "minecraft:charcoal": {
      duration: 1600
    },
    "minecraft:coal_block": {
      duration: 16000
    },
    "minecraft:dried_kelp_block": {
      duration: 4000
    },
    "minecraft:blaze_rod": {
      duration: 2400
    },
    "minecraft:oak_boat": {
      duration: 1200
    },
    "minecraft:spruce_boat": {
      duration: 1200
    },
    "minecraft:dark_oak_boat": {
      duration: 1200
    },
    "minecraft:birch_boat": {
      duration: 1200
    },
    "minecraft:acacia_boat": {
      duration: 1200
    },
    "minecraft:jungle_boat": {
      duration: 1200
    },
    "minecraft:mangrove_boat": {
      duration: 1200
    },
    "minecraft:cherry_boat": {
      duration: 1200
    },
    "minecraft:pale_oak_boat": {
      duration: 1200
    },
    "minecraft:bee_nest": {
      duration: 300
    },
    "minecraft:beehive": {
      duration: 300
    },
    "minecraft:chiseled_bookshelf": {
      duration: 300
    },
    "minecraft:oak_log": {
      duration: 300
    },
    "minecraft:acacia_log": {
      duration: 300
    },
    "minecraft:birch_log": {
      duration: 300
    },
    "minecraft:jungle_log": {
      duration: 300
    },
    "minecraft:dark_oak_log": {
      duration: 300
    },
    "minecraft:spruce_log": {
      duration: 300
    },
    "minecraft:mangrove_log": {
      duration: 300
    },
    "minecraft:cherry_log": {
      duration: 300
    },
    "minecraft:pale_oak_log": {
      duration: 300
    },
    "minecraft:oak_planks": {
      duration: 300
    },
    "minecraft:spruce_planks": {
      duration: 300
    },
    "minecraft:pale_oak_planks": {
      duration: 300
    },
    "minecraft:birch_planks": {
      duration: 300
    },
    "minecraft:acacia_planks": {
      duration: 300
    },
    "minecraft:dark_oak_planks": {
      duration: 300
    },
    "minecraft:jungle_planks": {
      duration: 300
    },
    "minecraft:mangrove_planks": {
      duration: 300
    },
    "minecraft:cherry_planks": {
      duration: 300
    },
    "minecraft:bamboo_raft": {
      duration: 1200
    },
    "minecraft:oak_chest_boat": {
      duration: 1200
    },
    "minecraft:spruce_chest_boat": {
      duration: 1200
    },
    "minecraft:birch_chest_boat": {
      duration: 1200
    },
    "minecraft:jungle_chest_boat": {
      duration: 1200
    },
    "minecraft:acacia_chest_boat": {
      duration: 1200
    },
    "minecraft:dark_oak_chest_boat": {
      duration: 1200
    },
    "minecraft:mangrove_chest_boat": {
      duration: 1200
    },
    "minecraft:pale_oak_chest_boat": {
      duration: 1200
    },
    "minecraft:cherry_chest_boat": {
      duration: 1200
    },
    "minecraft:bamboo_chest_raft": {
      duration: 1200
    },
    "minecraft:oak_slab": {
      duration: 300
    },
    "minecraft:birch_slab": {
      duration: 300
    },
    "minecraft:dark_oak_slab": {
      duration: 300
    },
    "minecraft:spruce_slab": {
      duration: 300
    },
    "minecraft:jungle_slab": {
      duration: 300
    },
    "minecraft:acacia_slab": {
      duration: 300
    },
    "minecraft:warped_slab": {
      duration: 300
    },
    "minecraft:crimson_slab": {
      duration: 300
    },
    "minecraft:mangrove_slab": {
      duration: 300
    },
    "minecraft:cherry_slab": {
      duration: 300
    },
    "minecraft:bamboo_slab": {
      duration: 300
    },
    "minecraft:pale_oak_slab": {
      duration: 300
    },
    "minecraft:bamboo_mosaic_slab": {
      duration: 300
    },
    "minecraft:crafting_table": {
      duration: 300
    },
    "minecraft:cartography_table": {
      duration: 300
    },
    "minecraft:fletching_table": {
      duration: 300
    },
    "minecraft:smithing_table": {
      duration: 300
    },
    "minecraft:ladder": {
      duration: 300
    },
    "minecraft:loom": {
      duration: 300
    },
    "minecraft:bookshelf": {
      duration: 300
    },
    "minecraft:lectern": {
      duration: 300
    },
    "minecraft:composter": {
      duration: 300
    },
    "minecraft:chest": {
      duration: 300
    },
    "minecraft:trapped_chest": {
      duration: 300
    },
    "minecraft:barrel": {
      duration: 300
    },
    "minecraft:daylight_detector": {
      duration: 300
    },
    "minecraft:jukebox": {
      duration: 300
    },
    "minecraft:noteblock": {
      duration: 300
    },
    "minecraft:banner": {
      duration: 300
    },
    "minecraft:crossbow": {
      duration: 300
    },
    "minecraft:bow": {
      duration: 300
    },
    "minecraft:fishing_rod": {
      duration: 300
    },
    "minecraft:bamboo": {
      duration: 50
    },
    "minecraft:scaffolding": {
      duration: 50
    },
    "minecraft:stick": {
      duration: 100
    },
    "minecraft:deadbush": {
      duration: 100
    },
    "minecraft:mangrove_roots": {
      duration: 300
    },
    "minecraft:bamboo_block": {
      duration: 300
    },
    "minecraft:stripped_bamboo_block": {
      duration: 300
    }
  }
}