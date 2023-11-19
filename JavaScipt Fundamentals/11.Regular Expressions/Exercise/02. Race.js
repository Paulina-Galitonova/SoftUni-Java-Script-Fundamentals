function race(input){

    let participants=input.shift().split(", ");

    let command=input.shift();
    let paternDistance=/[0-9]/g;
    let paternName=/[a-zA-Z]/g
    let racers={};
    

    while(command !== "end of race"){
       let matchNumbers=command.match(paternDistance); 
       let mathchLetters=command.match(paternName);
       let distance=0;
       let name=mathchLetters.join('')
       
      

       if (participants.includes(name)){
        for(let num of matchNumbers){
            num=Number(num);
            distance+=num;
          }
        if(name in racers){
            currentDistance=racers[name];
            let newDistance=currentDistance+distance;
            racers[name]=newDistance;
        } else{
            racers[name]=distance;
        }

       }
    
    command=input.shift();

    }

    let entries=Object.entries(racers);
    let sortedRacers=entries.sort((a,b) =>b[1]-a[1]);
    let winners=sortedRacers.slice(0, 3).map(([key]) => key)
   
   console.log(`1st place: ${winners[0]}`);
   console.log(`2nd place: ${winners[1]}`);
   console.log(`3rd place: ${winners[2]}`);



}
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']
);