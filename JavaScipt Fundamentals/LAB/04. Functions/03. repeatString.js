function repeatString(string,n){

    //Write a function that receives a string and a repeat count n. 
    //The function should return a new string (the old one repeated n times).

    

    let counts = 0;
    let newString="";

    while (counts <n){
        newString += string;
        counts++;

    }

   return newString;
   
}

console.log (repeatString("abc", 3));