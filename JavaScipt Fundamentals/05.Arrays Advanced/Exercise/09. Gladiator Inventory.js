function gladiatorInventory(inventory){

//As a gladiator, Peter has a cool Inventory. He loves to buy new equipment. You are given Peter’s inventory with all of his equipment -> strings, separated by whitespace. 

//You may receive the following commands:
// •	Buy {equipment}
// •	Trash {equipment}
// •	Repair {equipment}
// •	Upgrade {equipment}-{upgrade}

    let items=inventory.shift().split(" ");

for (let command of inventory){
    let [operation,item] = command.split(" ");

    if (operation == "Buy"){
        if (!items.includes(item)){
            items.push(item);
        }
    } else if (operation == "Trash"){
        if (items.includes(item)){
            let index =items.indexOf(item)
            items.splice(index,1);

        }

    } else if (operation == "Repair"){
        if(items.includes(item)){
            let index = items.indexOf(item);
            items.splice(index,1);
            items.push(item);
        }


    } else if (operation == "Upgrade"){
        let [upgradedItem,material]=item.split("-");
    
        if(items.includes(upgradedItem)){
            let element=`${upgradedItem}:${material}`
            let index = items.indexOf(upgradedItem);
            items.splice(index +1,0, element);

    
            
        }

    }
  
}


console.log(items.join(" "));


}


gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']

);