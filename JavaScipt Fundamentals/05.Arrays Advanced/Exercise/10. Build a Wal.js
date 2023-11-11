function buildWall(input){
//Write a program that keeps track of the construction of a 30-foot wall. 


let countSections=input.length;


for (let number of input){

}

let sectionOne=input[0];
let sectionTwo=input[1];
let sectionThree=input[2];

let priceConcrete=1900;
let totalPrice=0;
let day=0;
let countWorking=0;
let isCompleted=false;
let concrete=[];

while(!isCompleted){
    day++;

    if (sectionOne < 30){
        sectionOne++;
        countWorking++;
    } 

    if (sectionTwo < 30){
        sectionTwo++;
        countWorking++;
    } 

    if (sectionThree < 30){
        sectionThree++;
        countWorking++;
    } 
   
    
    let daylyConcentrate=countWorking*195;
    concrete.push(daylyConcentrate);
    let todayPrice=daylyConcentrate*priceConcrete;
    totalPrice+=todayPrice;


    if (sectionOne == 30 && sectionTwo == 30 && sectionThree == 30){
        isCompleted=true;
    } else{

        countWorking=0;
    }
    
}



console.log(concrete.join(", "));
console.log(`${totalPrice} pesos`)


}

// buildWall([21, 25, 28]);
buildWall([17,22,17,19,17]);