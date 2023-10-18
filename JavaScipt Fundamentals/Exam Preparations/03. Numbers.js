function numbers(input){

//Напишете програма за четене на поредица от цели числа и намиране и отпечатване на първите 5 числа, по-големи от средната стойност в поредицата, сортирани в низходящ ред.

let arr=input.split(" ").map(Number);
let sum=0;

for (let nums of arr){
    sum +=nums;
}

let average=(sum/arr.length).toFixed(2);
let newArr=[];
let isFound=false;

for(let num of arr){
    if(num > average){
        isFound=true;
        newArr.push(num);
    }
    
}
newArr.sort((a, b) => b - a);
newArr.splice(5,);

console.log(isFound ? newArr.join(" "): "No");



}
numbers('-1 -2 -3 -4 -5 -6');