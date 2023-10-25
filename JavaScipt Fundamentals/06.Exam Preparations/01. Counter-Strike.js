function counterStrike(arr){

    let energy=Number(arr.shift());
    let command=arr.shift();
    let wins=0;
    let isLoose=false;

    while(command != "End of battle"){
        let distance=Number(command);

        if (energy >= distance){
            wins++;
            energy-=distance;
        } else{
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
            isLoose=true;
            break;
        }

        if(wins%3==0){
            energy+=wins;
        }


        command=arr.shift();
    }


    if(!isLoose){
        console.log(`Won battles: ${wins}. Energy left: ${energy}`)
    }


}

// counterStrike((["100",
// "10",
// "10",
// "10",
// "1",
// "2",
// "3",
// "73",
// "10"])
// );
counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"]);