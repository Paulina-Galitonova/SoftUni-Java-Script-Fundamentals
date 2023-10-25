function login(input) {


    let username = input[0];
    let pass = "";

    let countWrong=0;
    let isLocked=false;


    for (let i=username.length - 1; i>=0; i--) {
        pass += username[i];
    }

    let guess = input[1];
    let index=2;


    while(guess != pass) {
        countWrong++;
        if(countWrong ==4) {
            isLocked=true;
            break;
        }
        console.log("Incorrect password. Try again.");

       

        guess=input[index];
        index++;
        


    }



 
    if(isLocked) {
        console.log (`User ${username} blocked!`)
    } else {
        console.log (`User ${username} logged in.`)
    }
   



}

login (['sunny','rainy','cloudy','sunny','not sunny']);