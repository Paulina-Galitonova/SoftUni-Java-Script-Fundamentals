function memoryGame(input) {
    let sequence = input.shift().split(' ');
    let moves = 0;

    for (let line of input) {
        if (line === 'end') {
            break;
        }

        let [index1, index2] = line.split(' ').map(Number);

        if (index1 === index2 || index1 < 0 || index1 >= sequence.length || index2 < 0 || index2 >= sequence.length) {
            let middleIndex = Math.floor(sequence.length / 2);
            moves++;
            sequence.splice(middleIndex, 0, `-${moves}a`, `-${moves}a`);
            console.log('Invalid input! Adding additional elements to the board');
        } else {
            if (sequence[index1] === sequence[index2]) {
                let element = sequence[index1];
                moves++;
                sequence = sequence.filter((el, index) => index !== index1 && index !== index2);
                console.log(`Congrats! You have found matching elements - ${element}!`);
            } else {
                console.log('Try again!');
            }
        }

        if (sequence.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            return;
        }
    }

    console.log(`Sorry you lose :(\n${sequence.join(' ')}`);
}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]);