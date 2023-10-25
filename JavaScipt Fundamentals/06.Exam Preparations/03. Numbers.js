function numbers(input) {

    let nums = input.split(" ").map(Number);
    let avg = nums.reduce((acc, val) => acc + val) / nums.length;
    let topNums = nums
        .filter(num => num > avg)
        .sort((a, b) => b - a)
        .slice(0, 5);


        if (topNums.length ==0){
              console.log("No")
        } else{
            console.log(topNums.join(" "));
        }
    // let arr=input.split(" ").map(Number);
    // let sum=0;

    // for (let nums of arr){
    //     sum +=nums;
    // }

    // let average=(sum/arr.length).toFixed(2);
    // let newArr=[];
    // let isFound=false;

    // for(let num of arr){
    //     if(num > average){
    //         isFound=true;
    //         newArr.push(num);
    //     }

    // }
    // newArr.sort((a, b) => b - a);
    // newArr.splice(5,);

    // console.log(isFound ? newArr.join(" "): "No");



}
numbers('-1 -2 -3 -4 -5 -6');