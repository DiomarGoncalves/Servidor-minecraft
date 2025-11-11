import { system, world } from '@minecraft/server'
const wingsId = [
    "extra_utilities:invisible_wing",
    "extra_utilities:golden_wing",
    "extra_utilities:feather_wing",
    "extra_utilities:dragon_wing",
    "extra_utilities:butterfly_wing"
]
system.runInterval(() => {
    for (const player of world.getPlayers()) {
        const inv = player.getComponent("minecraft:inventory")?.container;
        let hasItem = false;
        for (let i = 0; i < inv.size; i++) {
            const slot = inv.getItem(i);
            for (const wings of wingsId) {

                if (slot?.typeId === wings) {
                    hasItem = true;
                }
            }
            const mode = player.getGameMode()
            if (hasItem && !player?.hasTag("FlyOn")) {
                ///ability @s mayfly true
                player.runCommand("gamerule sendcommandfeedback false");
                player.runCommand("gamerule commandblockoutput false");
                player.runCommand("ability @s mayfly true");
                player.addTag("FlyOn");
            } else if (!hasItem && player?.hasTag("FlyOn") && mode !== "creative") {
                player.runCommand("ability @s mayfly false");
                player.runCommand("gamerule sendcommandfeedback true");
                player.runCommand("gamerule commandblockoutput true");
                player.removeTag("FlyOn");
            }
        }
    }
}, 10);
