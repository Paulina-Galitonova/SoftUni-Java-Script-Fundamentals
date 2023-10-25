function addAndSubtract(num1,num2,num3){


    //Write a function sum() to calculate the sum of the first two integers and a function subtract(), which subtracts the result of the function sum() and the third integer.

    // function sum (num1,num2) {
    //    return num1 + num2;
    // }

    // function subtract (sum, num3){
    //     return sum-num3;
    // }

   let sum= (a,b) => a + b;
   let subtract = (a,b) => a-b;

   let result1=sum(num1,num2);
   let result2=subtract(result1,num3);

   console.log(result2);


}
addAndSubtract(1,
    17,
    30
    );