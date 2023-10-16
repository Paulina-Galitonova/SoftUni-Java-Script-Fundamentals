function removeRepeatingElements(arr) {
    let uniqueElements = []; // Create an empty array to store unique elements.
  
    for (let i = 0; i < arr.length; i++) {
      let currentElement = arr[i]; // Get the current element from the input array.
  
      // Check if the current element is not already in the uniqueElements array.
      if (uniqueElements.indexOf(currentElement) === -1) {
        uniqueElements.push(currentElement); // Add the current element to the uniqueElements array.
      }
    }
  
    console.log(uniqueElements.join(' ')); // Print the unique elements separated by a space.
  }
  




  removeRepeatingElements([1, 2, 2, 3, 4, 4, 5, 6]);
  