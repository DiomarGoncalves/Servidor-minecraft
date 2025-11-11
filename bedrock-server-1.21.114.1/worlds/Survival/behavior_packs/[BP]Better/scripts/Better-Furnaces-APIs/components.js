import * as MC from "@minecraft/server";
import {
  BetterFurnacesClass
} from "./system.js";

MC.system.beforeEvents.startup.subscribe(({
  blockComponentRegistry
}) => {
  blockComponentRegistry.registerCustomComponent('better_furnaces:furnace_config', BetterFurnacesClass.furnaceConfig)
  blockComponentRegistry.registerCustomComponent('better_furnaces:hopper_config', BetterFurnacesClass.hopperConfig)
})