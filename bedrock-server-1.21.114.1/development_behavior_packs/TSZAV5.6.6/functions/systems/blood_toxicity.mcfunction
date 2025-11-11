scoreboard objectives add blood dummy
scoreboard players add @a blood 0
scoreboard players set @a[scores={blood=-10000..0}] blood 0
scoreboard players set @a[scores={blood=101..10000}] blood 100

tag @a remove blood_0
tag @a remove blood_5
tag @a remove blood_10
tag @a remove blood_15
tag @a remove blood_20
tag @a remove blood_25
tag @a remove blood_30
tag @a remove blood_35
tag @a remove blood_40
tag @a remove blood_45
tag @a remove blood_50
tag @a remove blood_55
tag @a remove blood_60
tag @a remove blood_65
tag @a remove blood_70
tag @a remove blood_75
tag @a remove blood_80
tag @a remove blood_85
tag @a remove blood_90
tag @a remove blood_95
tag @a remove blood_100

tag @a[scores={blood=0}] add blood_0
tag @a[scores={blood=1..5}] add blood_5
tag @a[scores={blood=6..10}] add blood_10
tag @a[scores={blood=11..15}] add blood_15
tag @a[scores={blood=16..20}] add blood_20
tag @a[scores={blood=21..25}] add blood_25
tag @a[scores={blood=26..30}] add blood_30
tag @a[scores={blood=31..35}] add blood_35
tag @a[scores={blood=36..40}] add blood_40
tag @a[scores={blood=41..45}] add blood_45
tag @a[scores={blood=46..50}] add blood_50
tag @a[scores={blood=51..55}] add blood_55
tag @a[scores={blood=56..60}] add blood_60
tag @a[scores={blood=61..65}] add blood_65
tag @a[scores={blood=66..70}] add blood_70
tag @a[scores={blood=71..75}] add blood_75
tag @a[scores={blood=76..80}] add blood_80
tag @a[scores={blood=81..85}] add blood_85
tag @a[scores={blood=86..90}] add blood_90
tag @a[scores={blood=91..95}] add blood_95
tag @a[scores={blood=96..100}] add blood_100
effect @a[scores={blood=91..100}] poison 5 5 true
kill @a[scores={blood=100}]
