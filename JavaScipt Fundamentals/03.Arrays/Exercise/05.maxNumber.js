function maxNumber(arr) {

    //Write a function to find all the top integers in an array. A top integer is an integer,
    // which is bigger than all the elements to its right. 
    //Print all top integers on the console, separated by a single space.
    ////Напишете функция за намиране на всички горни цели числа в масив. 
    //Горното цяло число е цяло число, // което е по-голямо от всички елементи отдясно.

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        curentNum = arr[i];
        let isTop = true;

        for (let j = i + 1; j < arr.length; j++) {
            rightNum = arr[j];

            if (rightNum >= curentNum) {
                isTop = false;
                break;
                

            }
          

            

        }
        if (isTop) {
            result.push(curentNum);
        }


    }
    console.log(result.join(" "));
}

maxNumber([41, 41, 34, 20]);