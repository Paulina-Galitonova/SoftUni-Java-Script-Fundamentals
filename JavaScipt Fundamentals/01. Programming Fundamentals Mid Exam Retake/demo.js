function touristLift(peopleInQueue,liftState) {
    // Parse the input
 liftState = input[1].split(' ').map(Number);
  
    // Loop through the lift wagons
    let hasEmptySpots = false;
    for (let wagonIndex = 0; wagonIndex < liftState.length; wagonIndex++) {
      // Fill the wagon until it's full (with a maximum of 4 people) or there are no more people in the queue
      while (liftState[wagonIndex] < 4 && peopleInQueue > 0) {
        liftState[wagonIndex]++;
        peopleInQueue--;
      }
      // Check if there are empty spots in the lift
      if (liftState[wagonIndex] < 4) {
        hasEmptySpots = true;
      }
    }
  
    // Check conditions for output messages
    let outputMessage = "";
    if (peopleInQueue === 0 && hasEmptySpots) {
      outputMessage = "The lift has empty spots!";
    } else if (peopleInQueue > 0) {
      outputMessage = `There isn't enough space! ${peopleInQueue} people in the queue!`;
    }
  
    // Output the messages and the final state of the lift's wagons
    console.log(outputMessage);
    console.log(liftState.join(' '));
  }
  
  touristLift([
    "15",
    "0 0 0 0 0"
  ]);