function numbers(input) {

    let sequence = input.shift().split(" ").map(Number);
    let commands = input.shift();


    while (commands != "Finish") {
        let tokens = commands.split(" ");
        let action = tokens[0];


        if (action == "Finish") {
            break;
        }

        else if (action == "Add") {
            let value=Number(tokens[1]);
            sequence.push(value);


        }
        else if (action == "Remove") {
            let value=Number(tokens[1]);
            if(sequence.includes(value)){
            let index=sequence.indexOf(value);
            sequence.splice(index,1);

            }
            else{
                continue;

            }


        }

        else if (action == "Replace") {
            let value=Number(tokens[1]);
            let replacement=Number(tokens[2]);

            if(sequence.includes(value)){
                let index=sequence.indexOf(value);
                sequence[index]=replacement;

            } else{
                continue;
            }




        }

        else if (action == "Collapse") {
            let value=Number(tokens[1]);
            let newSequence=[];

            for(let i=0; i<sequence.length; i++){
                if(sequence[i] >=value){
                    newSequence.push(sequence[i]);
                }

        

            }
            sequence=newSequence;


        }





        commands = input.shift();
    }

    console.log(sequence.join(" "));


}

// numbers((["1 4 5 19",
//     "Add 1",
//     "Remove 4",
//     "Finish"]));

// numbers(["1 20 -1 10",
// "Collapse 8",
// "Finish"]);

numbers(["5 9 70 -56 9 9",
"Replace 9 10",
"Remove 9",
"Finish"]);