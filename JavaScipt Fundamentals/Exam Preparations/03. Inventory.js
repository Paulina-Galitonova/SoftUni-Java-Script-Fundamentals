function inventory(input){

    let journal=input.shift().split(", ");
    let command=input.shift();

    


    while(command !="Craft"){
        let tokens=command.split(" - ");
        let action=tokens[0];

        if (action == "Collect"){
            let item=tokens[1];
            if (!journal.includes(item)){
                journal.push(item);

            } else{
                command=input.shift();
                continue;
            }

        }

        else if(action =="Drop"){
            let item=tokens[1];
            if(journal.includes(item)){
                 index=journal.indexOf(item);
                journal.splice(index,1);
            } else{
                command=input.shift();
                continue;
            }

        }
        else if(action =="Combine Items"){
            let items=tokens[1];
            let itemsSplit=items.split(":");
            let oldItem=itemsSplit[0];
            let newItem=itemsSplit[1];

            

            if(journal.includes(oldItem)){
                let index=journal.indexOf(oldItem);
                journal.splice(index+1,0,newItem)

            } else{
                command=input.shift();
                continue;
            }
          

        }
        else if(action =="Renew"){
            let item=tokens[1];
            if(journal.includes(item)){
                index=journal.indexOf(item);
                journal.splice(index,1);
                journal.push(item);

            } else{
                command=input.shift();
                continue;
            }

        }
        else if(action =="Craft!"){
            break;
        }


        command=input.shift();
    }

console.log(journal.join(", "));

}
// inventory([
//     'Iron, Wood, Sword', 
//     'Collect - Gold', 
//     'Drop - Wood', 
//     'Craft!'
//   ]
//   )

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  );