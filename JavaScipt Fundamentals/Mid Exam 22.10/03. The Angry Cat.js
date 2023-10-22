function angryCat(priceRatings,entryPoint,typeOfItems){



   let entryPointItemPrice=priceRatings[entryPoint];
   let damageLeft=0;
   let damageRight=0;

  //left
  //-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3
  // 0, 1, 2, 3, 4, 5, 6,  7, 8,  9, 10, 11
   
   for (let i=entryPoint-1; i>=0;i--){
    currentItm=priceRatings[i];
    if(typeOfItems=="cheap"){
        if(currentItm < entryPointItemPrice){
            damageLeft+=currentItm;
        }

    } else if(typeOfItems =="expensive"){
        if(currentItm >=entryPointItemPrice){
            damageLeft +=currentItm;
        }
    }  


}

//right

//1, 5, 1

for(let i=entryPoint+1; i<priceRatings.length; i++){
    currentItm =priceRatings[i];
    if(typeOfItems=="cheap"){
        if(currentItm < entryPointItemPrice){
            damageRight+=currentItm;
        }

    } else if(typeOfItems =="expensive"){
        if(currentItm >=entryPointItemPrice){
            damageRight +=currentItm;
        }
    
}




  

}

if(damageLeft>=damageRight){
    console.log(`Left - ${damageLeft}`);
    
} else{
    console.log(`Right - ${damageRight}`);
}




}

// angryCat([1, 5, 1],
//     1,
//     "cheap")
//     ;

    // angryCat([5, 10, 12, 5, 4, 20],
    //     3,
    //     "cheap");        

    angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
        7,
        "expensive");
        