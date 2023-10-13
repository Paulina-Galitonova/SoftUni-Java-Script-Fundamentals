function theLift(array) {
    //Write a program that finds a place for the tourist on a lift. 
    //Every wagon should have a maximum of 4 people on it. If a wagon is full, you should direct the people to the next one with space available.

    // //•	On the first line, you will receive how many people are waiting to get on the lift
    // •	On the second line, you will receive the current state of the lift separated by a single space: " ".

    //When there is no more available space left on the lift, or there are no more people in the queue, you should print on the console the final state of the lift's wagons separated by " " and one of the following messages:

   

    let maxSpace=4


    let people = Number(array[0]);
    let listState = array[1];
    let splitLift = listState.split(' ');



    for (let i = 0; i < splitLift.length; i++) {
        let wagon = Number(splitLift[i]);
        let currentWagonSpace=maxSpace-wagon;
        if (currentWagonSpace >=people){
            splitLift[i] = people;
            people=0;
            break;

        } else{
            splitLift[i]=maxSpace;
            people -= currentWagonSpace;
        }

       
    }

  


 // •	If there are no more people and the lift has empty spots, you should print:
    // "The lift has empty spots!
    // {wagons separated by ' '}"
    // •	If there are still people in the queue and no more available space, you should print:
    // "There isn't enough space! {people} people in a queue!
    // {wagons separated by ' '}"
    // •	If the lift is full and there are no more people in the queue, you should print only the wagons separated by " ".




}


theLift([
    "15",
    "0 0 0 0 0"
]
);