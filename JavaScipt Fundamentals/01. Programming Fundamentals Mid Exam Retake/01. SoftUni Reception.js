function softUniReception(input){

//First, you will receive 3 lines with integers, representing the number of students that each employee can help per hour. On the following line, you will receive students count as a single integer. 

let employee1PerHour=Number(input[0]);
let employee2PerHour=Number(input[1]);
let employee3PerHour=Number(input[2]);
let studentsCount=Number(input[3]);
let totalHours=0;


while(studentsCount>0){
    totalHours++;
    if(totalHours %4 ==0){
       continue;
    }
    let StudentsPerH=employee1PerHour+employee2PerHour+employee3PerHour;
    studentsCount-=StudentsPerH;
    if(studentsCount <0){
        studentsCount=0;
    } 
   
    
    
   
}

console.log(`Time needed: ${totalHours}h.`);

}

// softUniReception(['5','6','4','20']);
softUniReception(['3','2','5','40'])