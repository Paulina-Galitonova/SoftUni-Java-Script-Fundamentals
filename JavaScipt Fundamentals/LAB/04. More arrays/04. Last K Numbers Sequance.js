function lastKNumbers(n,k){

    //You are given two integers n and k. Write a function that generates and prints the following sequence:

    //•	The first element is 1.
// •	Every following element equals the sum of the previous k elements.
// •	The length of the sequence is n elements.

//The input comes as two number arguments. The first element represents the number n, and the second – the number k.
//The output is printed on the console on a single line, separated by space.

let sequence=[1];


for (let i=1; i< n;i++){
    let sum = 0;
    for (let j = i - 1; j >= Math.max(0, i - k); j--) {
      sum += sequence[j];
    }
    sequence.push(sum);
  }


  console.log(sequence.join(' '));

}




lastKNumbers(6,3);