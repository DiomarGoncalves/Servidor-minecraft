import {system, world, ItemCooldownComponent, Block} from '@minecraft/server';
import blockExclusionList from './blockExclusionList';

world.beforeEvents.worldInitialize.subscribe((initEvent) => {
	initEvent.itemComponentRegistry.registerCustomComponent("sorter:sort", {
		onUseOn: event => {
			const {source : player, block} = event;
			if(!validContainer(block)){
				player.onScreenDisplay.setActionBar(`§4Can only be used on storage blocks.`);
				return
			}
			sort(player,block);
		}
	})
})

system.runTimeout(()=>{
	console.warn(`§e§l[Chest Sorting Wand] Addon Active.`)
	world.sendMessage(`§e§l[Chest Sorting Wand] Addon Active.`)
},60)

async function processInventoryAsync(inv) {	
	const itemsObj = [];

	for (let c = 0; c < inv.size; c++) {
	const item = inv.getItem(c);
	if (item) {
		itemsObj.push(item);
		await setItemAsync(inv, c, null); 
	}
	}

	return itemsObj
}
  
async function setItemAsync(inv, slot, value) {
	return new Promise((resolve, reject) => {
	  try {
		inv.setItem(slot, value);
		resolve(); // Resolve the promise once the item is set
	  } catch (error) {
		reject(error); // Reject the promise if an error occurs
	  }
	});
  }

async function sort(entityData,block){		
	if(!block) return;
	
	let inv;
	try{
		inv = block.getComponent("inventory").container;
	}catch(error){
		entityData.onScreenDisplay.setActionBar(`§4Failed to get block inventory!`);	
		return;
	}

	await processInventoryAsync(inv)
	.then((itemsObj)=>{
		itemsObj.sort((a, b) => {
			const first = a.nameTag || a.typeId.split(':')[1];
			const second = b.nameTag || b.typeId.split(':')[1];
			return first.localeCompare(second);
		});
		for(let item of itemsObj){
			inv.addItem(item);
		}
	})
	.catch((error)=>{
		console.warn(`[Sorting Wand] Error processing inventory: ${error}`)
	})
	entityData.onScreenDisplay.setActionBar(`§6Chest Sorted!`);
}	

/**
 * 
 * @param {Block} block 
 * @returns {boolean}
 */
function validContainer(block){
	const blockInteractedID = block.typeId;
	const inventory = block.getComponent("inventory")
	if(inventory == undefined) return false
	if(blockExclusionList.getList().includes(blockInteractedID)) return false
	return true
}

function isContainer(blockName){
//Having problem getting container of barrel and shulker box
		if(blockName.matches("minecraft:chest")){
			return true;
		}
		if(blockName.matches("minecraft:barrel")){
			return true;
		}
		if(blockName.matches("minecraft:dropper")){
			return true;
		}
		if(blockName.matches("minecraft:dispenser")){
			return true;
		}
		if(blockName.matches("minecraft:undyed_shulker_box")){
			return true;
		}
		if(blockName.matches("minecraft:white_shulker_box")){
			return true;
		}
		if(blockName.matches("minecraft:orange_shulker_box")){
			return true;
		}
		if(blockName.matches("minecraft:black_shulker_box")){
			return true;
		}
		if(blockName.matches("minecraft:cyan_shulker_box")){
			return true;
		}		
		if(blockName.matches("minecraft:gray_shulker_box")){
			return true;
		}
		if(blockName.matches("minecraft:green_shulker_box")){
			return true;
		}
		if(blockName.matches("minecraft:light_blue_shulker_box")){
			return true;
		}
		if(blockName.matches("minecraft:light_gray_shulker_box")){
			return true;
		}
		if(blockName.matches("minecraft:lime_shulker_box")){
			return true;
		}
		if(blockName.matches("minecraft:lime_shulker_box")){
			return true;
		}
		if(blockName.matches("minecraft:pink_shulker_box")){
			return true;
		}
		if(blockName.matches("minecraft:purple_shulker_box")){
			return true;
		}
		if(blockName.matches("minecraft:red_shulker_box")){
			return true;
		}
	return false;
}

function upCase(itemName){
	let strArr = itemName.split('_');
	for(var c in strArr){
		if(c != 0){
		strArr[c] = strArr[c].charAt(0).toUpperCase() + strArr[c].slice(1);
		//Commands.run(`say ${strArr.join('')}`, world.getDimension("overworld"));		
		}
	}
	let strItem = (strArr.join('')).split(':');
	return strItem[1];
}
