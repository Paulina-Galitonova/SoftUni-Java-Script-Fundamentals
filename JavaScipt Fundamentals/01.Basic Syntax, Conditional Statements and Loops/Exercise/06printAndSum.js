function printAndSum(firstNum, secondNum){

    let sum=0;
    let result="";


    for (let i=firstNum; i <=secondNum; i++) {
        result+= i+ " ";

        sum=sum+i;


    }

console.log(result);
console.log(`Sum: ${sum}`);
}
printAndSum(50,60);