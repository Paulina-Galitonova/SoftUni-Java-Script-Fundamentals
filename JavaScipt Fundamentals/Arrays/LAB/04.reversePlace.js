function reversePlace(arr) {

    //Write a program, which receives an array of strings.
    // Your task is to reverse the array without creating a new array. Print the resulting elements on a single line, space-separated. 
    // a b c d e
    // e  d c b a 

        let newArr=[];
        newArr=arr.reverse()
    
        console.log(newArr.join(" "));
    ;
    
    }




reversePlace(['a', 'b', 'c', 'd', 'e']);