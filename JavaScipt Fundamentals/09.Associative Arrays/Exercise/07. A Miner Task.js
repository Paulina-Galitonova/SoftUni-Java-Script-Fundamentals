function minerTask(input){

    //You are given an array of strings. Every odd string is representing a resource (e.g. Gold, Silver, Copper, and so on), and every even – quantity. Your task is to collect the resources and print them each on a new line. 

    //Print the resources and their quantities in the format:
// {resource} –> {quantity}

let resources={};


for (let i=0; i<input.length; i+=2){
    let resource=input[i];
    let quantity=Number(input[i+1]);


    if(resource in resources){
        currentQuantity=resources[resource];
        resources[resource]=quantity+currentQuantity;

    } else{
        resources[resource]=quantity;
    }

    
}


for (let [key,value] of Object.entries(resources)){
    console.log(`${key} -> ${value}`);
}


}

// minerTask([
//     'Gold',
//     '155',
//     'Silver',
//     '10',
//     'Copper',
//     '17'
//     ]
//     );

minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )