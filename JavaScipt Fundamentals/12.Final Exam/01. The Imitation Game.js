function imitationGame(input){


    let msg=input.shift();
    let command=input.shift();

    while(command !== "Decode"){
        let tokens=command.split('|');
        let action=tokens.shift();

        if (action == "Move"){
            let numLetters=Number(tokens[0]);
            let left=msg.slice(0,numLetters);
            let righ=msg.slice(numLetters);
             msg=righ+left;

        } else if (action == "Insert"){
            let indx=Number(tokens.shift());
            let value =tokens[0];
            msg=msg.slice(0,indx)+value+msg.slice(indx);


        } else if (action == "ChangeAll"){
            let substracting=tokens[0];
            let replacement =tokens[1];

            while(msg.includes(substracting)){
                msg=msg.replace(substracting,replacement);

            }

        }

        command=input.shift();
    }

    console.log(`The decrypted message is: ${msg}`)



}
// imitationGame([
//     'zzHe',
//     'ChangeAll|z|l',
//     'Insert|2|o',
//     'Move|3',
//     'Decode'
//   ]
//   );

imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]
  )