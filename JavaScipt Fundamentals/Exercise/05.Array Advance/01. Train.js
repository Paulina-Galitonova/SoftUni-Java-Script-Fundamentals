function train(input){

//You will be given an array of strings.


//At the end, print the final state of the train (all the wagons separated by a space).

let wagons = input.shift().split(' ').map(Number);//The first element will be a string containing wagons (numbers). 



let maxCapacity=input.splice(0,1).map(Number);

for (let command of input) {
    let currentCommand = command.split(' ');

    if (currentCommand.includes("Add")){             //•	Add {passengers} – add a wagon to the end with the given number of passengers.
        pessengerToAdd=Number(currentCommand[1]);
        wagons.push(pessengerToAdd);

    } else{
        passengerToAdd =Number(command);
        for (let i=0; i<wagons.length; i++){ //Each number inside the string represents the number of passengers that are currently in a wagon. 
            currentPassengers = Number(wagons[i]);
            leftCapacity = maxCapacity-currentPassengers;
           if (leftCapacity >= passengerToAdd){   // •	{passengers} - find an existing wagon to fit all the passengers (starting from the first wagon)
            wagons[i] += passengerToAdd;
            break;
           }
        }

        

    }
}
console.log(wagons.join(" "));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)