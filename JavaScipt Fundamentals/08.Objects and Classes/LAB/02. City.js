function city(object){

    //Write a function that receives a single parameter – an object, containing five properties:
// /Loop through all the keys and print them with their values in format: "{key} -> {value}"

for (let [key,value] of Object.entries(object)){
console.log(`${key} -> ${value}`);
}

}


city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)

console.log("................");
city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
)