scoreboard objectives add hygiene dummy
scoreboard players add @a hygiene 0
scoreboard players set @a[scores={hygiene=101..10000}] hygiene 100
scoreboard players set @a[scores={hygiene=-10000..0}] hygiene 0
scoreboard players set @a[scores={hygiene=..-1}] timer_3 0

tag @a remove hygiene_100
tag @a remove hygiene_95
tag @a remove hygiene_90
tag @a remove hygiene_85
tag @a remove hygiene_80
tag @a remove hygiene_75
tag @a remove hygiene_70
tag @a remove hygiene_65
tag @a remove hygiene_60
tag @a remove hygiene_55
tag @a remove hygiene_50
tag @a remove hygiene_45
tag @a remove hygiene_40
tag @a remove hygiene_35
tag @a remove hygiene_30
tag @a remove hygiene_25
tag @a remove hygiene_20
tag @a remove hygiene_15
tag @a remove hygiene_10
tag @a remove hygiene_5
tag @a remove hygiene_0

scoreboard objectives add timer_3 dummy
scoreboard players add @a timer_3 1
execute as @a[scores={timer_3=800..840, hygiene=!100}] positioned ~ ~ ~ run scoreboard players add @a hygiene 1
execute as @a[scores={timer_3=800..840}] positioned ~ ~ ~ run scoreboard players set @a timer_3 0   
tag @a[scores={hygiene=0}] add hygiene_100
tag @a[scores={hygiene=1..5}] add hygiene_95
tag @a[scores={hygiene=6..10}] add hygiene_90
tag @a[scores={hygiene=11..15}] add hygiene_85
tag @a[scores={hygiene=16..20}] add hygiene_80
tag @a[scores={hygiene=21..25}] add hygiene_75
tag @a[scores={hygiene=26..30}] add hygiene_70
tag @a[scores={hygiene=31..35}] add hygiene_65
tag @a[scores={hygiene=36..40}] add hygiene_60
tag @a[scores={hygiene=41..45}] add hygiene_55
tag @a[scores={hygiene=46..50}] add hygiene_50
tag @a[scores={hygiene=51..55}] add hygiene_45
tag @a[scores={hygiene=56..60}] add hygiene_40
tag @a[scores={hygiene=61..65}] add hygiene_35
tag @a[scores={hygiene=66..70}] add hygiene_30
tag @a[scores={hygiene=71..75}] add hygiene_25
tag @a[scores={hygiene=76..80}] add hygiene_20
tag @a[scores={hygiene=81..85}] add hygiene_15
tag @a[scores={hygiene=86..90}] add hygiene_10
tag @a[scores={hygiene=91..95}] add hygiene_5
tag @a[scores={hygiene=96..100}] add hygiene_0
