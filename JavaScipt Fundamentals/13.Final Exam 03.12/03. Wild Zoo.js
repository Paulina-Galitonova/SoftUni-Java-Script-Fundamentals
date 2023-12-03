function wildZoo(input){

    let command=input.shift();

    let zoo={};


    while(command != "EndDay"){
        let tokens=command.split(": ");
        let action=tokens[0];
        let info=tokens[1];        
        if(action == "Add"){
            let newInfo=info.split("-");
            let name=newInfo[0];
            let foodQuantity=Number(newInfo[1]);
            let area=newInfo[2];

            if(name in zoo){
                currentQuantity=zoo[name].foodQuantity;
                currentQuantity +=foodQuantity;
                zoo[name].foodQuantity=currentQuantity;

            } else{
                zoo[name]={foodQuantity,area};
            }

            

        } 
        
        else if(action == "Feed"){
            let newInfo=info.split("-");
            let name=newInfo[0];
            let food=Number(newInfo[1]);

            if(name in zoo){
                currentQuantity=zoo[name].foodQuantity;
                currentQuantity -=food;
                if(currentQuantity<=0){
                    delete zoo[name];   
                    console.log(`${name} was successfully fed`)
                } else{
                    zoo[name].foodQuantity=currentQuantity;
                }
            } 
            
           
           
            
        }


        
        command=input.shift(); 
    }

    let areas={};

    console.log("Animals:");
    
    for (let animal in zoo) {
        let { foodQuantity, area } = zoo[animal];
        if(area in areas){
            let currentCount=areas[area].count;
            currentCount++;
            areas[area].count=currentCount;
        } else{
            let count=1
            areas[area]={count};
        }
        console.log(` ${animal} -> ${foodQuantity}g`);

}
console.log("Areas with hungry animals:");
 
    for (let area in areas){
        let {count}=areas[area];
        console.log(` ${area}: ${count}`);
    }

}

// wildZoo((["Add: Adam-4500-ByTheCreek",
// "Add: Maya-7600-WaterfallArea",
// "Add: Maya-1230-WaterfallArea",
// "Feed: Jamie-2000",
// "EndDay"])
// );

// wildZoo((["Add: Jamie-600-WaterfallArea",
// "Add: Maya-6570-WaterfallArea",
// "Add: Adam-4500-ByTheCreek",
// "Add: Bobbie-6570-WaterfallArea",
// "Feed: Jamie-2000",
// "Feed: Adam-2000",
// "Feed: Adam-2500",
// "EndDay"])
// )

wildZoo((["Add: Bonie-3490-RiverArea",
"Add: Sam-5430-DeepWoodsArea",
"Add: Bonie-200-RiverArea",
"Add: Maya-4560-ByTheCreek",
"Feed: Maya-2390",
"Feed: Bonie-3500",
"Feed: Johny-3400",
"Feed: Sam-5500",
"EndDay"])
)