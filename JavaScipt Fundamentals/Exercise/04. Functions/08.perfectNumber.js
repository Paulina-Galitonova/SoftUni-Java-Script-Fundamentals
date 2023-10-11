function perfectNumber(n){
//Write a function that receives a number and checks if that number is perfect or NOT.
//A perfect number is a positive integer that is equal to the sum of its proper positive divisors. That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
//Съвършеното число е положително цяло число, което е равно на сумата от своите правилни положителни делители. Това е сумата от положителните му делители, с изключение на самото число (известно още като негова аликвотна сума)



let isPerfect=sumNum(n);
console.log(isPerfect ? "We have a perfect number!" : "It's not so perfect.");




function sumNum(n){
    let sum=0;
    for (let i=1;i<=n;i++){
        currentNum=i;
        sum+=i;
    
        if (sum ==n){
            return true;
        }
    
    }
}





}

perfectNumber(1236498);