function phoneBook(date){


//Write a function that stores information about a person’s name and phone number. The input is an array of strings with space-separated name and number. Replace duplicate names. Print the result as shown.


let phoneBook={};

for (let info of date){
    let [name,phone] =info.split(" ");

    phoneBook[name]=phone;
}

for (let [key,value] of Object.entries(phoneBook)){
    console.log(`${key} -> ${value}`);
}

}

// phoneBook(['Tim 0834212554',
// 'Peter 0877547887',
// 'Bill 0896543112',
// 'Tim 0876566344']
// );

phoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']
)