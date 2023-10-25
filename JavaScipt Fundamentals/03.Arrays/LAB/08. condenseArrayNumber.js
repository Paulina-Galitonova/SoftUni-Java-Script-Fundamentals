function condenseArrayNumber(arr){

    //Write a program, which receives an array of numbers,
    // and condenses them by summing adjacent couples of elements until a single number is obtained.
//For example, if we have 3 elements [2, 10, 3], we sum the first two and the second two elements and obtain {2+10, 10+3} = {12, 13}, 
//then we sum again all adjacent elements and obtain {12+13} = {25}.


let currentSum=0;


while (arr.length >1) {
    let arrNew=[arr.length-1];
    for (let i=0; i<arr.length-1; i++){
        
        arrNew[i]=arr[i] + arr[i+1];

    }
    
    arr=arrNew;
    }
   

    console.log(arr.join());
    
    
}
  
  



condenseArrayNumber([5,0,4,1,2]);