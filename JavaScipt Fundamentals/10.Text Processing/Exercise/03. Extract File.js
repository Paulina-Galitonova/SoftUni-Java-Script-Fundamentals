function extractFile(input){

    //Write a function that receives a single string - the path to a file (the '\' character is escaped)
    //Your task is to subtract the file name and its extension. (Beware of files like template.bak.pptx, as template.bak should be the file name, while pptx is the extension).



    let lastDot=input.lastIndexOf(".");
    let extension=input.substring(lastDot+1);

   let lastSlash=input.lastIndexOf("\\");
   let fileName=input.substring(lastSlash+1,lastDot);

   console.log(`File name: ${fileName}`);
   console.log(`File extension: ${extension}`)




  


}
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');