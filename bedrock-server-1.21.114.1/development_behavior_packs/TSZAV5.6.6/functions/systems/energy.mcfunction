scoreboard objectives add energy dummy
scoreboard players add @a energy 0
scoreboard players set @a[scores={energy=101..10000}] energy 100
scoreboard players set @a[scores={energy=-10000..0}] energy 0
scoreboard players set @a[scores={energy=..-1}] timer_2 0

tag @a remove energy_100
tag @a remove energy_95
tag @a remove energy_90
tag @a remove energy_85
tag @a remove energy_80
tag @a remove energy_75
tag @a remove energy_70
tag @a remove energy_65
tag @a remove energy_60
tag @a remove energy_55
tag @a remove energy_50
tag @a remove energy_45
tag @a remove energy_40
tag @a remove energy_35
tag @a remove energy_30
tag @a remove energy_25
tag @a remove energy_20
tag @a remove energy_15
tag @a remove energy_10
tag @a remove energy_5
tag @a remove energy_0

scoreboard objectives add timer_2 dummy
scoreboard players add @a timer_2 1
execute as @a[scores={timer_2=200..210, energy=!100}] positioned ~ ~ ~ run scoreboard players add @a energy 1
execute as @a[scores={timer_2=200..210}] positioned ~ ~ ~ run scoreboard players set @a timer_2 0   
tag @a[scores={energy=0}] add energy_100
tag @a[scores={energy=1..5}] add energy_95
tag @a[scores={energy=6..10}] add energy_90
tag @a[scores={energy=11..15}] add energy_85
tag @a[scores={energy=16..20}] add energy_80
tag @a[scores={energy=21..25}] add energy_75
tag @a[scores={energy=26..30}] add energy_70
tag @a[scores={energy=31..35}] add energy_65
tag @a[scores={energy=36..40}] add energy_60
tag @a[scores={energy=41..45}] add energy_55
tag @a[scores={energy=46..50}] add energy_50
tag @a[scores={energy=51..55}] add energy_45
tag @a[scores={energy=56..60}] add energy_40
tag @a[scores={energy=61..65}] add energy_35
tag @a[scores={energy=66..70}] add energy_30
tag @a[scores={energy=71..75}] add energy_25
tag @a[scores={energy=76..80}] add energy_20
tag @a[scores={energy=81..85}] add energy_15
tag @a[scores={energy=86..90}] add energy_10
tag @a[scores={energy=91..95}] add energy_5
tag @a[scores={energy=96..100}] add energy_0
effect @a[scores={energy=91..100}] weakness 5 2 true
effect @a[scores={energy=91..100}] mining_fatigue 5 2 true