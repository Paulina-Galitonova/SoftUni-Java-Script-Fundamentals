function train(input) {
    let wagons = input.shift().split(' ').map(Number);
    let maxCapacity = Number(input.shift());
  
    for (let command of input) {
      if (command.includes("Add")) {
        let passengersToAdd = Number(command.split(' ')[1]);
        wagons.push(passengersToAdd);
      } else {
        let passengersToAdd = Number(command);
        for (let i = 0; i < wagons.length; i++) {
          let leftCapacity = maxCapacity - wagons[i];
          if (leftCapacity >= passengersToAdd) {
            wagons[i] += passengersToAdd;
            break;
          }
        }
      }
    }
  
    console.log(wagons.join(" "));
  }
  
  train([
    '32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
  ]);