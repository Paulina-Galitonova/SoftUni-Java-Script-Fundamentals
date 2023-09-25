function nextDay(year, mount, day) {



   let todayDay = 0;
   let todayMount = 0;
   let todayYear = 0;




         todayDay = day + 1;
         todayMount = mount;
         todayYear = year;
         if (todayMount == 12 && todayDay >= 31) {
            todayYear = year + 1;
            todayMount = 1;
         } 

         if ((todayMount == 1 || todayMount == 3 || todayMount== 5 || todayMount == 7 || todayMount == 8 || todayMount == 10 || todayMount == 12) && todayDay >= 31) {
            todayDay = 1
            todayMount = mount + 1;
         }



         if ((todayMount==4 || todayMount == 6 || todayMount == 9 || todayMount == 11) && todayDay >= 30) {
            todayDay = 1;
            todayMount = mount + 1;
         }

         if (todayMount == 2 && todayDay >= 28) {
            todayDay = 1;
            todayMount = 3;
         }

         console.log(`${todayYear}-${todayMount}-${todayDay}`)


      }




   








nextDay(1901, 1, 1);