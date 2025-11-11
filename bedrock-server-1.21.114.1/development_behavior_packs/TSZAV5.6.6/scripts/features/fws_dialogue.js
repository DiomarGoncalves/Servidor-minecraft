import { system, world} from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";


//HUMAN SURVIVOR
system.runInterval(() =>{
	for(let player of world.getPlayers()){
		if(player.hasTag("no_recruit")){
            no_recruit(player)
			player.removeTag("no_recruit")
		}
  }
  function no_recruit (player) {
    const gui = new ActionFormData();
    gui.body('§6Hi! Can I help you with something?§r');
    gui.button('Offer Recruitment!', 'textures/gui/menu/recruitment_icon')
    gui.button('No! Sorry for bothering you!', 'textures/gui/menu/tick_icon')
    gui.show(player).then(result => {
        if (result.selection === 0) {
            offer_no_respect(player)
        }
        if (result.selection === 1) {
            exit(player)
        }
    }
)
}
function offer_no_respect (player) {
    const gui = new ActionFormData();
    gui.body('§6No thank you! I think I am better on my own!');
    gui.button('Ok! Never mind!', 'textures/gui/menu/tick_icon')
    gui.show(player).then(result => {
        if (result.selection === 0) {
            exit(player)
        }
    }
)
}
function exit(player) {
    player.runCommandAsync;
  }
})
system.runInterval(() =>{
	for(let player of world.getPlayers()){
		if(player.hasTag("rejection")){
            rejection(player)
			player.removeTag("rejection")
		}
  }
  function rejection (player) {
    const gui = new ActionFormData();
    gui.body('§6Hi! Can I help you with something?§r');
    gui.button('Offer Recruitment!', 'textures/gui/menu/recruitment_icon')
    gui.button('No! Sorry for bothering you!', 'textures/gui/menu/tick_icon')
    gui.show(player).then(result => {
        if (result.selection === 0) {
            offer_rejection(player)
        }
        if (result.selection === 1) {
            exit(player)
        }
    }
)
}
function offer_rejection (player) {
    const gui = new ActionFormData();
    gui.body('§6No thank you! I think I am better on my own!');
    gui.button('Ok! Never mind!', 'textures/gui/menu/tick_icon')
    gui.show(player).then(result => {
        if (result.selection === 0) {
            exit_despawn(player)
        }
    }
)
}
function exit(player) {
    player.runCommandAsync;
  }
  function exit_despawn(player) {
    player.runCommandAsync("event entity @e [family=wild_human,c=1,r=4] true:to_peaceful");
  }
})
system.runInterval(() =>{
	for(let player of world.getPlayers()){
		if(player.hasTag("accept")){
            accept(player)
			player.removeTag("accept")
		}
  }
  function accept (player) {
    const gui = new ActionFormData();
    gui.body('§6Hi! Can I help you with something?§r');
    gui.button('Offer Recruitment!', 'textures/gui/menu/recruitment_icon')
    gui.button('No! Sorry for bothering you!', 'textures/gui/menu/tick_icon')
    gui.show(player).then(result => {
        if (result.selection === 0) {
            offer_accept(player)
        }
        if (result.selection === 1) {
            exit(player)
        }
    }
)
}
function offer_accept (player) {
    const gui = new ActionFormData();
    gui.body('§6Ummm! Yes! That would be great! I have been by myself for so long it will be good to have some company. Do you have anything to help keep me safe from the Walkers?');
    gui.button('I have just the thing!', 'textures/gui/menu/tick_icon')
    gui.show(player).then(result => {
        if (result.selection === 0) {
            exit_activate_vaccine(player)
        }
    }
)
}
function exit_activate_vaccine(player) {
    player.runCommandAsync("event entity @e [family=wild_human,c=1,r=4] true:to_tameable");
  }
})
system.runInterval(() =>{
	for(let player of world.getPlayers()){
		if(player.hasTag("main_menu")){
            main_menu(player)
			player.removeTag("main_menu")
		}
    }
    function main_menu (player) {
        const gui = new ActionFormData();
        gui.body('§9Hey there! Anything you need me to do?');
        gui.button('Relax!', 'textures/gui/menu/free_icon')
        gui.button('Defend me!', 'textures/gui/menu/defender_icon')
        gui.button('Welcome Home!', 'textures/gui/menu/home_icon')
        gui.button('Nothing, Carry on!', 'textures/gui/menu/tick_icon')
        gui.show(player).then(result => {
            if (result.selection === 0) {
                free(player)
            }
            if (result.selection === 1) {
                defender(player)
            }
            if (result.selection === 2) {
                home(player)
            }
            if (result.selection === 3) {
                exit(player)
            }
         }
       )
    }
    function free(player) {
      player.runCommandAsync("event entity @e [family=vaccinated,c=1,r=10] true:to_default");
    }
    function defender(player) {
      player.runCommandAsync("event entity @e [family=vaccinated,c=1,r=10] true:to_defender");
    }
    function home(player) {
      player.runCommandAsync("event entity @e [family=vaccinated,c=1,r=10] true:to_home");
    }
    function exit(player) {
      player.runCommandAsync;
    }
 }
)
