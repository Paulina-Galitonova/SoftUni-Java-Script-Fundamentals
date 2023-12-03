function stringManipulator(input) {

    let stringText = input.shift();

    let command = input.shift();

    while (command !== "End") {
        let tokens=command.split(" ");
        let action=tokens[0];

        if (action == "Translate"){
            let char=tokens[1];
            let replacement=tokens[2];

            while(stringText.includes(char)){
                stringText=stringText.replace(char,replacement);
            }
            console.log(stringText);
        } else if (action == "Includes"){
            let substring=tokens[1];

            if(stringText.includes(substring)){
                console.log("True");
            } else{
                console.log("False");
            }

        } else if (action == "Start"){
            let substring=tokens[1];

            if(stringText.startsWith(substring)){
                console.log("True");
            } else{
                console.log("False");   
            }
        } else if(action == "Lowercase"){
            stringText=stringText.toLowerCase();
            console.log(stringText);
        } else if (action == "FindIndex"){
            let char= tokens[1];
            let lastIndx=stringText.lastIndexOf(char);
            console.log(lastIndx);
        } else if(action == "Remove"){
            let start=Number(tokens[1]);
            let count=Number(tokens[2]);
            let end=start +count-1;
            stringText = stringText.slice(0, start) + stringText.slice(end + 1);
            console.log(stringText);
            
            
        }



        command = input.shift();
    }




}

// stringManipulator((["//Thi5 I5 MY 5trING!//",
//     "Translate 5 s",
//     "Includes string",
//     "Start //This",
//     "Lowercase",
//     "FindIndex i",
//     "Remove 0 10",
//     "End"])
// );

stringManipulator((["*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex p",
"Remove 2 7",
"End"])
)