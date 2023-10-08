function palindromeIntegers(array){

//A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. Write a function, which receives an array of positive integers and checks if each integer is a palindrome or not.


let newArray=newArrayBackward(array);

    for (let i=0;i<array.length;i++){
        currentNum=array[i];

        if (currentNum == newArray[i]){
            console.log(`true`);
        } else {
            console.log (`false`);
        }
    }




function newArrayBackward(array) {
    
    let reversedArray=[];
    for (let i=0;i<array.length; i++){
        let numberStr=String((array[i]));
        let reversedDigitsArray = numberStr.split('').reverse();
        let revisedNumberStr = reversedDigitsArray.join('');
        let reversedNumber=Number(revisedNumberStr);
         reversedArray.push(reversedNumber)
    }
    return reversedArray;



}




   




}


palindromeIntegers([32,2,232,1010]);