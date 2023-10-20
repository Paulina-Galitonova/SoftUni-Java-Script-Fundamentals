function blackFlags(input){

    let days=Number(input.shift());
    let plundersPerDay=Number(input.shift());
    let expectedPlunder=Number(input.shift());
    let gatheredPlunder=0;
    


    for(let i=1;i<=days;i++){
        gatheredPlunder+=plundersPerDay;
        
        if(i %3==0){
            additionalPlunder=plundersPerDay*0.50;
            gatheredPlunder+=additionalPlunder;
        }

        if (i% 5==0){
            losedPlunder=gatheredPlunder*0.30;
            gatheredPlunder-=losedPlunder;
        }
    }

    if(gatheredPlunder<expectedPlunder){
        let percentage =(gatheredPlunder*100)/expectedPlunder;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    } else{
        console.log(`Ahoy! ${gatheredPlunder.toFixed(2)} plunder gained.`);
    }

}

// blackFlags(["5",
// "40",
// "100"]);

blackFlags(["10",
"20",
"380"]);