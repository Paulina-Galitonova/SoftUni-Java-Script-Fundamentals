function distanceBetweenPoints (x1,y1,x2,y2){
//Write a JS function that calculates the distance between two points by given x and y coordinates. 
//The input comes as four number elements in the format x1, y1, x2, y2.
// Each pair of elements are the coordinates of a point in 2D space.

let y =x2-x1;
let x = y2-y1;
let result= x * x + y * y
 
console.log ( Math.sqrt(result)); 





} distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);