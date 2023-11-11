function substracting(word, start,count){

//Write a function that receives a string and two numbers. The numbers will be a starting index and count of elements to substring. Print the result.

 let result=word.substring(start,start+count);
 console.log(result);

}

substracting('SkipWord', 4, 7);