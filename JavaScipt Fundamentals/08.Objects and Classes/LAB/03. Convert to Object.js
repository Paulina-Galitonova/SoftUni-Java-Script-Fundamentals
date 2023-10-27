function convertToObject(JSONString){

    //Write a function that receives a string in JSON format and converts it to an object.
    //Loop through all the keys and print them with their values in format: "{key}: {value}"

  let obj=JSON.parse(JSONString);
  let entry=Object.entries(obj);

  for(let [key,value] of entry){
    console.log(`${key}: ${value}`);
  }
 


}



// convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');