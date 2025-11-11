teleport @a [tag=!new_player] ~ 320 ~
give @a [tag=!new_player] true:parachute 1 0
give @a [tag=!new_player] true:starter_crate 1 0
tag @a [tag=!new_player] add new_player

function guns/reload/reload
function guns/reload/reloading
function guns/player_tags/gun_tags
function guns/sentry_gun/sentry_gun
function attachable_systems/zombie_chestplates
function attachable_systems/sharp_tool
function attachable_systems/breaking_tool
function attachable_systems/head_gear
function attachable_systems/parachute
function attachable_systems/flashlight
function systems/hydration
function systems/blood_toxicity
function systems/energy
function systems/hygiene
function systems/death
function systems/death_counter
function systems/nether
function systems/damage_blocks
function systems/recruitment

clear @a true:sentry_bullets
kill @e [type=minecraft:creaking,r=32]
kill @e [type=minecraft:happy_ghast,r=32]

