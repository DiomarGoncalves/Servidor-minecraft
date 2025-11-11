tag @e [family=sentry_gun] remove loaded
tag @e [family=sentry_gun] remove slot_0
tag @e [family=sentry_gun] remove slot_1
tag @e [family=sentry_gun] remove slot_2
tag @e [family=sentry_gun] remove slot_3
tag @e [family=sentry_gun] remove slot_4
tag @e [family=sentry_gun] remove slot_5
tag @e [family=sentry_gun,hasitem={item=true:sentry_gun_bullet_case}] add loaded
tag @e [family=sentry_gun,hasitem={item=true:sentry_bullets}] add loaded
tag @e [type=true:sentry_gun,scores={bullet_count=0}] add slot_0
tag @e [type=true:sentry_gun,hasitem={item=true:sentry_gun_bullet_case,location=slot.inventory,slot=1}] add slot_1
tag @e [type=true:sentry_gun,hasitem={item=true:sentry_gun_bullet_case,location=slot.inventory,slot=2}] add slot_2
tag @e [type=true:sentry_gun,hasitem={item=true:sentry_gun_bullet_case,location=slot.inventory,slot=3}] add slot_3
tag @e [type=true:sentry_gun,hasitem={item=true:sentry_gun_bullet_case,location=slot.inventory,slot=4}] add slot_4
tag @e [type=true:sentry_gun,hasitem={item=true:sentry_gun_bullet_case,location=slot.inventory,slot=5}] add slot_5

scoreboard objectives add bullet_count dummy
scoreboard players add @e [type=true:sentry_gun] bullet_count 0
scoreboard players set @e [type=true:sentry_gun,scores={bullet_count=-10000..0}] bullet_count 0

scoreboard players set @e [type=true:sentry_gun,hasitem={item=true:sentry_gun_bullet_case,quantity=1,location=slot.inventory,slot=0}] bullet_count 64

scoreboard players add @e [type=true:sentry_gun,scores={bullet_count=0},hasitem={item=true:sentry_gun_bullet_case,location=slot.inventory,slot=1}] bullet_count 64
replaceitem entity @e[type=true:sentry_gun,hasitem={item=true:sentry_gun_bullet_case,location=slot.inventory,slot=1},tag=slot_0] slot.inventory 1 air

replaceitem entity @e[type=true:sentry_gun,tag=!slot_1,tag=slot_2] slot.inventory 1 true:sentry_gun_bullet_case 1
replaceitem entity @e[type=true:sentry_gun,tag=!slot_1,tag=slot_2] slot.inventory 2 air

replaceitem entity @e[type=true:sentry_gun,tag=!slot_2,tag=slot_3] slot.inventory 2 true:sentry_gun_bullet_case 1
replaceitem entity @e[type=true:sentry_gun,tag=!slot_2,tag=slot_3] slot.inventory 3 air

replaceitem entity @e[type=true:sentry_gun,tag=!slot_3,tag=slot_4] slot.inventory 3 true:sentry_gun_bullet_case 1
replaceitem entity @e[type=true:sentry_gun,tag=!slot_3,tag=slot_4] slot.inventory 4 air

replaceitem entity @e[type=true:sentry_gun,tag=!slot_4,tag=slot_5] slot.inventory 4 true:sentry_gun_bullet_case 1
replaceitem entity @e[type=true:sentry_gun,tag=!slot_4,tag=slot_5] slot.inventory 5 air


replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=64}] slot.inventory 0 true:sentry_bullets 63
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=63}] slot.inventory 0 true:sentry_bullets 63
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=62}] slot.inventory 0 true:sentry_bullets 62
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=61}] slot.inventory 0 true:sentry_bullets 61
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=60}] slot.inventory 0 true:sentry_bullets 60
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=59}] slot.inventory 0 true:sentry_bullets 59
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=58}] slot.inventory 0 true:sentry_bullets 58
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=57}] slot.inventory 0 true:sentry_bullets 57
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=56}] slot.inventory 0 true:sentry_bullets 56
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=55}] slot.inventory 0 true:sentry_bullets 55
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=54}] slot.inventory 0 true:sentry_bullets 54
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=53}] slot.inventory 0 true:sentry_bullets 53
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=52}] slot.inventory 0 true:sentry_bullets 52
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=51}] slot.inventory 0 true:sentry_bullets 51
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=50}] slot.inventory 0 true:sentry_bullets 50
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=49}] slot.inventory 0 true:sentry_bullets 49
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=48}] slot.inventory 0 true:sentry_bullets 48
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=47}] slot.inventory 0 true:sentry_bullets 47
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=46}] slot.inventory 0 true:sentry_bullets 46
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=45}] slot.inventory 0 true:sentry_bullets 45
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=44}] slot.inventory 0 true:sentry_bullets 44
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=43}] slot.inventory 0 true:sentry_bullets 43
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=42}] slot.inventory 0 true:sentry_bullets 42
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=41}] slot.inventory 0 true:sentry_bullets 41
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=40}] slot.inventory 0 true:sentry_bullets 40
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=39}] slot.inventory 0 true:sentry_bullets 39
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=38}] slot.inventory 0 true:sentry_bullets 38
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=37}] slot.inventory 0 true:sentry_bullets 37
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=36}] slot.inventory 0 true:sentry_bullets 36
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=35}] slot.inventory 0 true:sentry_bullets 35
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=34}] slot.inventory 0 true:sentry_bullets 34
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=33}] slot.inventory 0 true:sentry_bullets 33
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=32}] slot.inventory 0 true:sentry_bullets 32
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=31}] slot.inventory 0 true:sentry_bullets 31
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=30}] slot.inventory 0 true:sentry_bullets 30
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=29}] slot.inventory 0 true:sentry_bullets 29
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=28}] slot.inventory 0 true:sentry_bullets 28
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=27}] slot.inventory 0 true:sentry_bullets 27
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=26}] slot.inventory 0 true:sentry_bullets 26
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=25}] slot.inventory 0 true:sentry_bullets 25
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=24}] slot.inventory 0 true:sentry_bullets 24
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=23}] slot.inventory 0 true:sentry_bullets 23
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=22}] slot.inventory 0 true:sentry_bullets 22
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=21}] slot.inventory 0 true:sentry_bullets 21
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=20}] slot.inventory 0 true:sentry_bullets 20
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=19}] slot.inventory 0 true:sentry_bullets 19
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=18}] slot.inventory 0 true:sentry_bullets 18
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=17}] slot.inventory 0 true:sentry_bullets 17
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=16}] slot.inventory 0 true:sentry_bullets 16
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=15}] slot.inventory 0 true:sentry_bullets 15
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=14}] slot.inventory 0 true:sentry_bullets 14
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=13}] slot.inventory 0 true:sentry_bullets 13
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=12}] slot.inventory 0 true:sentry_bullets 12
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=11}] slot.inventory 0 true:sentry_bullets 11
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=10}] slot.inventory 0 true:sentry_bullets 10
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=9}] slot.inventory 0 true:sentry_bullets 9
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=8}] slot.inventory 0 true:sentry_bullets 8
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=7}] slot.inventory 0 true:sentry_bullets 7
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=6}] slot.inventory 0 true:sentry_bullets 6
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=5}] slot.inventory 0 true:sentry_bullets 5
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=4}] slot.inventory 0 true:sentry_bullets 4
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=3}] slot.inventory 0 true:sentry_bullets 3
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=2}] slot.inventory 0 true:sentry_bullets 2
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=1}] slot.inventory 0 true:sentry_bullets 1
replaceitem entity @e[type=true:sentry_gun,scores={bullet_count=0}] slot.inventory 0 air