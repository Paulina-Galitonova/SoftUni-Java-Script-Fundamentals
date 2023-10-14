function demo(arr) {
    const result = arr
      .filter((_, index) => index % 2 !== 0)
      .map(number => number * 2)
      .reverse()
      .join(' ');
  
    console.log(result);
  }
demo([3, 0, 10, 4, 7, 3]);