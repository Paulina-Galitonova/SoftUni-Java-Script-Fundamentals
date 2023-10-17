function arrayManipulator(arr, arrStrings) {

   
    //• print – спира получаването на повече команди и отпечатва последното състояние на масива в следния формат:          `[ {element1}, {element2}, …elementN} ]`  Note: The elements in the array must be joined by comma and space (, ).

    //[1, 2, 4, 5, 6, 7]
    //[1, 2, 3, 4, 5]
    //[1, 2, 3, 4, 5]


    for (command of arrStrings) {
        currentCommand = command.split(" ");
        //add <index> <element> – добавя елемент по посочения индекс (елементите вдясно от тази позиция включително се изместват надясно).
        if (currentCommand[0] == "add") {
            index = Number(currentCommand[1]);
            element = Number(currentCommand[2]);
            arr.splice(index,0,element)

            ////• addMany <индекс><елемент 1> <елемент 2> … <елемент n> – добавя набор от елементи по посочения индекс.
        } else if (currentCommand[0] == "addMany") {
            index = Number(currentCommand[1]);
            let elementsToAdd = currentCommand.slice(2).map(Number);
            for (let i = 0; i < elementsToAdd.length; i++) {
                arr.splice(index + i, 0, elementsToAdd[i]);
            }

            

            //съдържа <елемент> – извежда индекса на първото появяване на посочения елемент (ако съществува) в масива или -1, ако елементът не е намерен.

        } else if (currentCommand[0] == "contains") {
            element = Number(currentCommand[1])
            if (arr.includes(element)) {
                index = arr.indexOf(element);
                 console.log(index)
            } else {
                console.log(-1);
            }
            //• remove <index> – премахва елемента с посочения индекс.

        } else if (currentCommand[0] == "remove") {
            index = Number(currentCommand[1]);
            arr.splice(index, 1)
            //• shift <positions> – измества всеки елемент от масива с брой позиции наляво (със завъртане).For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]

        } else if (currentCommand[0] == "shift") {
            rotations = Number(currentCommand[1]);

            for (let rotation=1; rotation<= rotations; rotation++){
                let firstNum=arr.shift();
                arr.push(firstNum);
            }
            

           //•	sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).

        } else if(currentCommand[0]=="sumPairs"){
            let newArr=[];

            for (let i=0;i<arr.length;i+=2){
                nextIndex=i+1
                currentIndex=i;
                
                if (nextIndex>arr.length-1){
                sum=arr[currentIndex];
                newArr.push(sum);

                } else{
                    sum=arr[currentIndex]+ arr[nextIndex];
                    newArr.push(sum);
                }

            
                
            }
            arr=newArr;
        } else {
            console.log(`[ ${arr.join(", ")} ]`)
            break;
        }

    }
}

// arrayManipulator([1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']
//     );

arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
);

// arrayManipulator([1, 2, 4, 5, 6, 7, 8],
//     ['sumPairs', 'contains 15', 'remove 3', 'shift 1', 'print']
// );