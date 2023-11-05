function meeting (input){
//Write a function that manages meeting appointments. The input comes as an array of strings. Each string contains a weekday and person’s name. For each successful meeting, print a message. If you receive the same weekday twice, the meeting cannot be scheduled so print a conflicting message. In the end, print a list of all successful meetings. 

let calendar={};

for (let info of input){
    let [day,name]=info.split(" ");

    if (!calendar.hasOwnProperty(day)){
        console.log(`Scheduled for ${day}`);
        calendar[day]=name;
    } else{
        console.log(`Conflict on ${day}!`)
    }
}

for (let [key,value] of Object.entries(calendar)){
    console.log(`${key} -> ${value}`);
}

}


meeting(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
);

// meeting(['Friday Bob',
// 'Saturday Ted',
// 'Monday Bill',
// 'Monday John',
// 'Wednesday George']
// );