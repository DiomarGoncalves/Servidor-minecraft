tag @a remove night_vision
tag @a [hasitem={item=true:night_vision_goggles,location=slot.armor.head}] add night_vision
effect @a [tag=night_vision] night_vision 9999 5 true
effect @a [tag=!night_vision] night_vision 0 1 true

tag @a remove scuba
tag @a [hasitem={item=true:scuba_goggles,location=slot.armor.head}] add scuba
effect @a [tag=scuba] water_breathing 9999 5 true
effect @a [tag=!scuba] water_breathing 0 1 true

tag @a [hasitem={item=true:gas_mask,location=slot.armor.head}] remove in_nether