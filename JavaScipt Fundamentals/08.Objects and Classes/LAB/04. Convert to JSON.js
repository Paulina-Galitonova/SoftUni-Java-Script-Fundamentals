function convertToJson(name, lastName, hairColor) {

    //Write a function that receives a first name, last name, hair color and sets them to an object.
    //Convert the object to JSON string and print it.
    //Input is provided as 3 single strings in the order stated above.

    let person = {
        name,
        lastName,
        hairColor,

    }

    let text=JSON.stringify(person);
    console.log(text);

}


convertToJson('George', 'Jones', 'Brown');