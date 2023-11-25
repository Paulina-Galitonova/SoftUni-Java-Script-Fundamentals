function starEnigma(input){

    let numberMesseges=Number(input.shift());
    let patern=/[star]/gi;
    let decriptedMesseges=[];

    for(let i=0; i< numberMesseges; i++){
        let currentMessege=input[i];
        let decriptedMSG="";
        let matches= currentMessege.match(patern);

        if(matches){
            let count=matches.length;

            for (let char of currentMessege){
                let code=char.charCodeAt();
                code-=count;

                let newChar=String.fromCharCode(code);
                decriptedMSG+=newChar;
            }

        } else{
            decriptedMSG=currentMessege;
        }
        
        decriptedMesseges.push(decriptedMSG);
        
    }

     let decriptedREG=/@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soulders>\d+)/g
     
     for (let messege of decriptedMesseges){
        while ((items = decriptedREG.exec(messege)) !== null) {
            let planet = items.groups["planet"];
            let population = Number(items.groups["population"]);
            let type = items.groups["type"];
            let soulders=Number(items.groups["soulders"])

     }
    }

}


starEnigma(['2',
'STCDoghudd4=63333$D$0A53333',
'EHfsytsnhf?8555&I&2C9555SR']
);