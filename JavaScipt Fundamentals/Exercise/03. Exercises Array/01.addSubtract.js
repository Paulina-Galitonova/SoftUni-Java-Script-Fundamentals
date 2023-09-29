function addSubtract(arr){


    //Write a function, which changes the value of odd and even numbers in an array of numbers. 

    //•	If the number is even - add to its value its index position
//•	If the number is odd - subtract to its value its index position

//On the first line print the newly modified array, on the second line print the sum of numbers from the original array, 
//on the third line print the sum of numbers from the modified array.
let sum =0;

 for (let i =0; i< arr.length; i++) {
    if (arr[i] %2 ==0){
        arr[i] += i;
    } else {
        arr[i] -= i;
    }
    sum += arr[i];


 }

 console.log ([arr]);
 console.log (sum);





}

addSubtract([5, 15, 23, 56, 35]);