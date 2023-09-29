function sumEvenNumbers (arr){
    

//Write a program, which receives an array of strings, parse them into numbers, and sum only the even numbers.

//parse strings into number

//separate the even num

//make a sum

let sum=0;

for ( let i=0; i <arr.length; i++) {
    arr [i]=Number(arr[i]);
    if (arr[i] % 2 == 0) {
        sum += arr[i];
    }

}


console.log (sum);


}
sumEvenNumbers(['2','4','6','8','10']);