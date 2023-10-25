function dayOfWeek(num){

//receives a number and prints the corresponding name of the day of the week (in English).  
//If the number is NOT a valid day, print: "Invalid day!".

if ((num <1 ) || (num > 7 )|| !Number.isInteger(num)){
    console.log("Invalid day!") ;

    } else {
        let array =[];
 array[0] = "Monday";
 array[1] = "Tuesday";
 array[2] = "Wednesday";
 array[3] = "Thursday";
 array[4] = "Friday";
 array[5] = "Saturday";
 array[6] = "Sunday";

 console.log (array[num-1]);

    }
}









dayOfWeek(2.5);