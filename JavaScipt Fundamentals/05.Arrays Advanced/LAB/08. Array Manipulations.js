function manipulateArray(input) {
    let numbers = input.shift().split(' ').map(Number);
  
    for (let command of input) {
      let tokens = command.split(' ');
      let action = tokens[0];
  
      if (action === 'Add') {
        let numberToAdd = Number(tokens[1]);
        numbers.push(numberToAdd);
      } else if (action === 'Remove') {
        let numberToRemove = Number(tokens[1]);
        numbers = numbers.filter(num => num !== numberToRemove);
      } else if (action === 'RemoveAt') {
        let indexToRemove = Number(tokens[1]);
        numbers.splice(indexToRemove, 1);
      } else if (action === 'Insert') {
        let numberToInsert = Number(tokens[1]);
        let indexToInsert = Number(tokens[2]);
        numbers.splice(indexToInsert, 0, numberToInsert);
      }
    }
  
    console.log(numbers.join(' '));
  
  }
  manipulateArray(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);