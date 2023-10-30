function makeDictionary(input){
    //You will receive an array with strings in the form of JSON's. 
    //You have to parse these strings and combine them into one object. Every string from the array will hold terms and a description. If you receive the same term twice, replace it with the new definition.
    //`Term: ${term} => Definition: ${definition}`
    //Don't forget to sort the dictionary alphabetically by the terms as in real dictionaries.

    let dictionary=[];
    

    for (let items of input){
        let itemsObj={};
        let itemParse=JSON.parse(items);
        let term=Object.keys(itemParse);
        let definition=Object.values(itemParse);
        
        let item=dictionary.find(item=>item.Term==term[0]);
        if (item){
            itemsObj.Definition=definition[0];
            item.Definition=definition[0];
            
        } else{
            itemsObj={Term:term[0],Definition:definition[0]};
            dictionary.push(itemsObj);
        }

        // let itemsObj={Term:term[0],Definition:definition[0]};

       
    }
    let sortedDictionary=dictionary.sort((a,b)=>a.Term.localeCompare(b.Term)); 
   
    for (let item of sortedDictionary){
      console.log(`Term: ${item.Term} => Definition: ${item.Definition}`)  
    }


}

// makeDictionary([
//     '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
//     '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
//     '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//     '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
//     '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
//     ]
//     );

makeDictionary([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cup":"A item used to drink from it"} ',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
    ]
    )