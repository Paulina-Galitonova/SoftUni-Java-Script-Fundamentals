function shootForWin(arr) {

    let targets = arr.shift().split(" ").map(Number);
    let command = arr.shift();
    let countShots = 0;


    while (command != "End") {
        let index = Number(command);

        if (index >= 0 && index < targets.length) {
            let currentTarget = targets[index];
            if (currentTarget != -1) {
                countShots++;
                targets[index] = -1;

                for (let i = 0; i < targets.length; i++) {
                    if (targets[i] > currentTarget && targets[i] != -1) {
                        targets[i] = targets[i] - currentTarget;
                    } else if (targets[i] <= currentTarget && targets[i] != -1) {
                        targets[i] = targets[i] + currentTarget;

                    }
                }

            }

        } else {
            command = arr.shift();
            continue;
            
        }




       command = arr.shift();
    }


    console.log(`Shot targets: ${countShots} -> ${targets.join(" ")}`);


}

// shootForWin((["24 50 36 70",
//     "0",
//     "4",
//     "3",
//     "1",
//     "End"])
// );

shootForWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"]);