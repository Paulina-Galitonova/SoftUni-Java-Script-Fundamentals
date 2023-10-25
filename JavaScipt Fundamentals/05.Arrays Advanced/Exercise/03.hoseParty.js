function houseParty(arr) {

    //Write a function that keeps track of guests that are going to a house party.
    //You will be given an array of strings. Each string will be one of the following:
    //-	"{name} is going!"
    // -	"{name} is not going!"

    //If you receive the first type of input, you have to add the person if he/she is not in the list (If he/she is in the list print: "{name} is already in the list!").
    //If you receive the second type of input, you have to remove the person if he/she is in the list (if not print: "{name} is not in the list!"). 
    //At the end print all the guests each on a separate line.

    let guestList = [];

    for (let guests of arr) {
        let current = guests.split(' ');
        let name = current[0];
        let isGoing = !current.includes("not"); 

        
        if(isGoing){
            if(guestList.includes(name)){
                console.log(`${name} is already in the list!`);
            } else{
                guestList.push(name);
            }
        } else if (!isGoing){
            if(guestList.includes(name)){
                let index = guestList.indexOf(name);
        guestList.splice(index, 1);
            } else{
                console.log(`${name} is not in the list!`);
            }
        }


    }
    // for (let i = 0; i < guestList.length; i++) {
    //     console.log(guestList[i]);
    //   }
        console.log(guestList.join(" \n"));
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']

);