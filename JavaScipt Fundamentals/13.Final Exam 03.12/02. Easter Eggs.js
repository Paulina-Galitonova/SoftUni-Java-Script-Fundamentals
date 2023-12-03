function easterEggs(input) {

    let text=input[0];
    let pattern=/(@|#)(?<color>[a-z]{3,})(@|#)+[^a-zA-Z\d]*(\/)+(?<amount>(\d)+)(\/)+/gm;


    while ((items = pattern.exec(input)) !== null) {
        let color=items.groups["color"];
        let amount = Number(items.groups["amount"]);
        
        console.log(`You found ${amount} ${color} eggs!`);


    }
    



}

// easterEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/'])

easterEggs(['#@##@red@#/8/@rEd@/2/#@purple@////10/'])