scoreboard objectives add hydration dummy
scoreboard players add @a hydration 0
scoreboard players set @a[scores={hydration=101..10000}] hydration 100
scoreboard players set @a[scores={hydration=-10000..0}] hydration 0
scoreboard players set @a[scores={hydration=..-1}] timer 0

tag @a remove hydration_100
tag @a remove hydration_95
tag @a remove hydration_90
tag @a remove hydration_85
tag @a remove hydration_80
tag @a remove hydration_75
tag @a remove hydration_70
tag @a remove hydration_65
tag @a remove hydration_60
tag @a remove hydration_55
tag @a remove hydration_50
tag @a remove hydration_45
tag @a remove hydration_40
tag @a remove hydration_35
tag @a remove hydration_30
tag @a remove hydration_25
tag @a remove hydration_20
tag @a remove hydration_15
tag @a remove hydration_10
tag @a remove hydration_5
tag @a remove hydration_0

scoreboard objectives add timer dummy
scoreboard players add @a timer 1
execute as @a[scores={timer=800..840, hydration=!100}] positioned ~ ~ ~ run scoreboard players add @a hydration 1
execute as @a[scores={timer=800..840}] positioned ~ ~ ~ run scoreboard players set @a timer 0   
tag @a[scores={hydration=0}] add hydration_100
tag @a[scores={hydration=1..5}] add hydration_95
tag @a[scores={hydration=6..10}] add hydration_90
tag @a[scores={hydration=11..15}] add hydration_85
tag @a[scores={hydration=16..20}] add hydration_80
tag @a[scores={hydration=21..25}] add hydration_75
tag @a[scores={hydration=26..30}] add hydration_70
tag @a[scores={hydration=31..35}] add hydration_65
tag @a[scores={hydration=36..40}] add hydration_60
tag @a[scores={hydration=41..45}] add hydration_55
tag @a[scores={hydration=46..50}] add hydration_50
tag @a[scores={hydration=51..55}] add hydration_45
tag @a[scores={hydration=56..60}] add hydration_40
tag @a[scores={hydration=61..65}] add hydration_35
tag @a[scores={hydration=66..70}] add hydration_30
tag @a[scores={hydration=71..75}] add hydration_25
tag @a[scores={hydration=76..80}] add hydration_20
tag @a[scores={hydration=81..85}] add hydration_15
tag @a[scores={hydration=86..90}] add hydration_10
tag @a[scores={hydration=91..95}] add hydration_5
tag @a[scores={hydration=96..100}] add hydration_0
effect @a[scores={hydration=91..100}] nausea 5 5 true
kill @a[scores={hydration=100}]