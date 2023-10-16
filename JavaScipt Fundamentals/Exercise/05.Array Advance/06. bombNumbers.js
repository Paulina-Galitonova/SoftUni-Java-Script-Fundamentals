function bombNumbers(sequence, bombParams) {

    // /Write a function that receives two parameters: sequence of numbers and special bomb number with a certain power. 

    //Вашата задача е да взривявате всяко появяване на специалния номер на бомбата и според силата му съседите отляво и отдясно. Детонациите се извършват отляво надясно и всички детонирани номера изчезват.
    //The output is the sum of the remaining elements in the sequence.
    let sum = 0;
    let specialNum = bombParams[0]
    let power = bombParams[1];
    //[1, 2, 2, 4, 2, 2, 2, 9]
    // 0, 1, 2, 3, 4, 5, 6, 7
    //[1, 2, 9]

    while (sequence.includes(specialNum)) {
        let index = sequence.indexOf(specialNum);
        let start = Math.max(0, index - power);
        let end = Math.min(index + power, sequence.length - 1);

        sequence.splice(start, end - start + 1)
    }

    for (num of sequence) {
        sum += num;
    }
    console.log(sum);

}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
    );