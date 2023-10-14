function touristLift(input) {
    let peopleInQueue = Number(input[0]);
    let liftState = input[1].split(' ').map(Number);
  
    for (let i = 0; i < liftState.length; i++) {
      while (liftState[i] < 4 && peopleInQueue > 0) {
        liftState[i]++;
        peopleInQueue--;
      }
    }
  
    for (let i = 0; i < liftState.length; i++) {
        if (liftState[i] < 4) {
          hasEmptySpots = true;
          break; // Exit the loop early because we found an empty spot
        }
      }  
    if (peopleInQueue === 0 && hasEmptySpots) {
      console.log("The lift has empty spots!");
      console.log(liftState.join(' '));
    } else if (peopleInQueue > 0) {
      console.log(`There isn't enough space! ${peopleInQueue} people in a queue!`);
      console.log(liftState.join(' '));
    } else {
      console.log(liftState.join(' '));
    }
  }

  touristLift([
    "15",
    "0 2 0"
   ]
   );