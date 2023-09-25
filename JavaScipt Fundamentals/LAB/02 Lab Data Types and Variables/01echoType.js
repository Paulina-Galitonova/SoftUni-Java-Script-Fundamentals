function echoType (param) {

  let typeOfParam=typeof param;
   console.log (typeOfParam);

   if(typeOfParam == "string" ||typeOfParam == "number") {
    console.log(param);

   } else {
    console.log("Parameter is not suitable for printing");
   }




}

echoType (null);
