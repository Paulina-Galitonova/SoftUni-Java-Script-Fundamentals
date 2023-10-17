function memoryGame(input) {

    let nums = input[0];
    index = 1
    let commands = input[index];
    index++;

    while(commands !=="end"){
        tokens=commands.split(" ");
        index1=tokens[0];
        index2=tokens[1];
        console.log(tokens);




    }

    //На първия ред ще получите последователност от елементи. Всеки елемент в последователността ще има близнак. Докато играчът получи "край" от конзолата, вие ще получавате низове с две цели числа, разделени с интервал, представляващи индексите на елементите в последователността.
    //Ако играчът се опита да мами и въведе два равни индекса или индекси, които са извън границите на последователността, трябва да добавите два съвпадащи елемента в средата на последователността в следния формат: "-{number of moves until now}a" 
    //Then print this message on the console: "Invalid input! Adding additional elements to the board"

    //•	Every time the player hit two matching elements, you should remove them from the sequence and print on the console the following message: "Congrats! You have found matching elements - {element}!"
    //•	If the player hit two different elements, you should print on the console the following message:"Try again!"
    //•	If the player hit all matching elements before he receives "end" from the console, you should print on the console the following message: "You have won in {number of moves until now} turns!"•	If the player receives "end" before he hits all matching elements, you should print on the console the following message: "Sorry you lose :({the current sequence's state}"



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