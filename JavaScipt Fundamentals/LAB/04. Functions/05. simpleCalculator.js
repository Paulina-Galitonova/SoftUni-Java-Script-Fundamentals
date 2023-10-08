function simpleCalculator(num1,num2,operator){

//Write a function that receives three parameters – two numbers and an operator (string) 
//– and calculates the result depending on the operator. 
//Operator can be 'multiply', 'divide', 'add' or 'subtract'. 
//Try to solve this task using arrow functions.

//Solve this task without using any conditional statements (no if or switch statements or ternary operators).
let operations = {
    'multiply': (num1,num2) => num1 * num2,
    'divide': (num1,num2) => num1 / num2,
    'add': (num1,num2) => num1 + num2,
    'subtract': (num1,num2) => num1 - num2,
  };


  let operation = operations[operator];
  console.log ((operation(num1,num2)));



}

 (simpleCalculator(5,
    5,
    'multiply'
    ));