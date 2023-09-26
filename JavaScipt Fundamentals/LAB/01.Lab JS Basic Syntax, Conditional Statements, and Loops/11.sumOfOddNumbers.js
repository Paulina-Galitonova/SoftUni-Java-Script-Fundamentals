function sumOfOddNumbers (n){

    count=1;
    currentNum=1;
    isItOdd=false;
    sumNum=0;

    

    while (count<=n) {
       
        console.log(currentNum);
        sumNum=sumNum+currentNum;
        currentNum=currentNum+2;
        

       count++;
        

    }

console.log(`Sum: ${sumNum}`);
} sumOfOddNumbers(5);