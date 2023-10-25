function rightPlace(word1,char,word2){

    let newWord="";
   


    for(i=0; i<word1.length; i++){
    
      if(word1[i] == '_'){
       newWord +=char;
      }  else {
        newWord +=word1[i];
      }
    

    }
    if (newWord == word2) {
        console.log ("Matched")
    } else {
        console.log ("Not Matched");
    }



}

rightPlace('Str_ng', 'i', 'String');