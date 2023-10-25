function sortNumbers (num1, num2, num3){

     

    let biggestNum=Math.max(num1,num2,num3);
    let smallestNum=Math.min (num1,num2,num3);

    let middle = num1+num2+num3 - smallestNum - biggestNum;

    console. log(biggestNum);
    console.log (middle);
    console.log (smallestNum);


    


    




}
sortNumbers (0,0,2);