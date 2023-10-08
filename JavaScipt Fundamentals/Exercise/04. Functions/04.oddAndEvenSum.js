function oddAndEvenSum(num){
    //You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number. 

let sumEven=0;
let sumOdd=0;

let inputString = String(num);





    for (let i = 0;  i<=inputString.length-1;i++){
        let currentNum=Number(inputString[i]);
        

        if (currentNum %2 ==0){
            sumEven += currentNum;

        } else {
            sumOdd +=currentNum;
        }

    }
console.log(` Odd sum = ${sumOdd}, Even sum = ${sumEven}`);




}
oddAndEvenSum(1000435);