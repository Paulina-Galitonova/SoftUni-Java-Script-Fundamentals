function nextDay (year,mount,day){

   

     let todayDay = day+1;
     let todayMount=mount;
     let todayYear= year;

     if ( mount == 12 && todayDay >=31){
        todayYear = year +1;
        todayMount=1;
       } 

     if ((mount == 1 || mount==3 || mount ==4 || mount ==5 || mount ==7 || mount ==8 || mount ==10 || mount ==12) && todayDay >=31){
        todayDay=1
        todayMount = mount +1;
     } 
     if ((mount == 6 || mount == 9 || mount ==11) && day >=30) {
        todayDay =1;
        todayMount = mount +1;     } 

     if (mount == 2 && day >=28) {
        todayDay=1;
        todayMount=3;
     }
     
     

console.log (`${todayYear}-${todayMount}-${todayDay}`)



}

nextDay(1951, 12, 25);