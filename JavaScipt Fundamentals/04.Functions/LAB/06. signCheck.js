function signCheck(numOne, numTwo, numThree){
//Write a function, that checks whether the result of the multiplication numOne * numTwo * numThree is positive or negative. Try to do this WITHOUT multiplying the 3 numbers.

let countNegatives=0;
let countPositive=0;
let numbers=[numOne,numTwo,numThree];
let isNegative=false; 

for (let i=0; i<numbers.length; i++){
    currentNum=numbers[i];

    if (currentNum <0) {
        countNegatives++;
    } else{
        countPositive++;
    }
}

if ( countNegatives == 1 || countNegatives ==3){
    isNegative;

} else{
    isNegative=true;
}


let result = isNegative ? "Positive": "Negative";
console.log(result);
}

signCheck(-5,
    1,
    1
   );