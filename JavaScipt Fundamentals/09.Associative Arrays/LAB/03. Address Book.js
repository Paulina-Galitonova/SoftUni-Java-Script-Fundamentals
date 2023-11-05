function adressBook(input){

//Write a function that stores information about a person’s name and his address. The input comes as an array of strings. Each string contains the name and the address separated by a colon. If you receive the same name twice just replace the address. In the end, print the full list, sorted alphabetically by the person’s name.x

let adressBook={};

for (let info of input){
    let [name, adress]=info.split(":");

    adressBook[name]=adress;
}

let arr=Object.entries(adressBook).sort((a,b) => a[0].localeCompare(b[0]));

for (let [key, value] of arr){
    console.log(`${key} -> ${value}`);

}



}

adressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);