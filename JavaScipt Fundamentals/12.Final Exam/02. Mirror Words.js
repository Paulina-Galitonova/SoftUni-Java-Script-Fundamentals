function minorWords(input) {

    let pattern = /(@|#)(?<word1>[a-zA-Z]{3,})\1\1(?<word2>[a-zA-Z]{3,})\1/gm

    let mirrorWords=[];
    let count=0;
    let isMatch=false;
    
    while ((items = pattern.exec(input)) !== null){
        isMatch=true;
        count++;
        let word1=items.groups["word1"];
        let word2=items.groups["word2"];
        let reversedWord=word2.split("").reverse().join("");
        if(word1 == reversedWord){
  
            mirrorWords.push(`${word1} <=> ${word2}`);
        }
    }

    
    if(isMatch){
        console.log(`${count} word pairs found!`);
        if(mirrorWords.length>0){
            console.log("The mirror words are:");
            console.log(mirrorWords.join(", "))
        } else{
            console.log("No mirror words!");
        }
    } else{
        console.log("No word pairs found!");
        console.log("No mirror words!");
    }
    

}
// minorWords([
//     '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
// ]
// );

// minorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])

minorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ])