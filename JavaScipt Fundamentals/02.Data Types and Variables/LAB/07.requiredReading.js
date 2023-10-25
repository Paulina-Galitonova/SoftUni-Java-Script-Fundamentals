function requiredReading(TotalPages,pagesPerHour,days) {
    //Write a function to help Ivan calculate how many hours a day he has to spend reading 
    //the necessary literature from the list given for the summer vacation
    
    //As input, you will receive 3 parameters: 
    //Number of pages of the current book - integer [1… 1000] 
    //Pages read in 1 hour - integer [1… 1000]
    //The number of days for which you must read the book -  integer [1… 1000]


        let totalTime=TotalPages/pagesPerHour;
        let hoursNeeded=totalTime/days;
        console.log(hoursNeeded);






}
requiredReading(432,
    15 ,
    4 
    );