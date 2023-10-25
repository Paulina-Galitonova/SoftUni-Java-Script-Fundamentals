function factorialDivision(n1,n2){

//Write a function that receives two integer numbers. Calculate the factorial of each number. Divide the first result by the second and print the division formatted to the second decimal point.
let factorial1=factorialCalc(n1);
let factorial2=factorialCalc(n2);
let result=factorial1/factorial2;
console.log(result.toFixed(2));

function factorialCalc(num){
    let factorial=1;
    while (num >1){
        factorial *=num;
        num--;
    }
return factorial;
}


}
 factorialDivision(5,2);