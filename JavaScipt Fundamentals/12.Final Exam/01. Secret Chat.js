function secretChat(input) {

    //we extract our conceled messege
    //we take our next commands

    let concealedMsg = input.shift();
    let command = input.shift();

    //while we recieve "Reveal", we have different operations

    while (command != "Reveal") {
        let tokens = command.split(":|:");
        let action = tokens.shift();

        if (action == "ChangeAll") {
            let substring = tokens.shift();
            let replacement = tokens.shift();

            while (concealedMsg.includes(substring)) {
                concealedMsg = concealedMsg.replace(substring, replacement);
            }
            console.log(concealedMsg);

        } else if (action == "Reverse") {
            let substring = tokens.shift();
            if (concealedMsg.includes(substring)) {
                let indx = concealedMsg.indexOf(substring);
                let left = concealedMsg.slice(0, indx);
                let right = concealedMsg.slice(indx);
                let reversed = right.split("").reverse().join("");
                concealedMsg = left + reversed;
                console.log(concealedMsg);
            } else {
                console.log("error")
            }
            
        } else if (action == "InsertSpace") {
            let indx = Number(tokens.shift());
            let left = concealedMsg.slice(0, indx);
            let right = concealedMsg.slice(indx);
            concealedMsg = left + " " + right;
            console.log(concealedMsg);
        }



        command = input.shift();
    }


    console.log(`You have a new text message: ${concealedMsg}`);


}
// secretChat([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
// ]
// );


secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  )