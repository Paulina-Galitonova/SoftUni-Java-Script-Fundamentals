function calculator(num1,operator,num2){

//Write a function that receives 3 parameters: a number, an operator (string), and another number.
//The operator can be:  '+', '-', '/', '*'. Print the result of the calculation on the console formatted to the second decimal point.

let result =0;

if (operator == "+") {
    result = num1 + num2;

} if (operator == "-") {
    result=num1-num2;
} if (operator == "/") {
    result=num1/num2;
}
if (operator == "*") {
    result=num1*num2;
}

console.log(result.toFixed(2));


}
calculator(25.5,
    '-',
    3
     );