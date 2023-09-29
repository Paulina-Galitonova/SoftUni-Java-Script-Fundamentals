function addSubtract(arr){


    //Write a function, which changes the value of odd and even numbers in an array of numbers. 

    //•	If the number is even - add to its value its index position
//•	If the number is odd - subtract to its value its index position

//On the first line print the newly modified array, on the second line print the sum of numbers from the original array, 
//on the third line print the sum of numbers from the modified array.
let sumNew =0;
let sumOld=0;
let newArr=[];


 for (let i =0; i< arr.length; i++) {
    if (arr[i] % 2 ==0){
        newArr[i] = arr[i]+ i;
    } else {
        newArr[i] = arr[i]- i;
    }
    sumOld += arr[i];
    sumNew += newArr[i];


 }

 console.log (newArr);
 console.log (sumOld);
 console.log (sumNew);







}

addSubtract([-5, 11, 3, 0, 2]);