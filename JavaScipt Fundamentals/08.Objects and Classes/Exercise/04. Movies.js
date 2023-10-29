function movies(input) {

    //Write a function that stores information about movies inside an array. The movie's object info must be name, director, and date. You can receive several types of input:

    //     //•	"addMovie {movie name}" – add the movie
    // •	"{movie name} directedBy {director}" – check if the movie exists and then add the director
    // •	"{movie name} onDate {date}" – check if the movie exists and then add the date


    let movies = [];


    for (let commands of input) {
        if (commands.includes("addMovie")) {
            let movieName = tokens.slice(1).join(' ');
            movies.push(movieName);
        }
        else if (commands.includes("directedBy")) {
            let movieName=tokens[0];
            let directedBy=tokens.slice(2).join(' ')
            if (movies.includes(movieName)){
               let index=movies.indexOf(movieName)
                movies.splice(index+1,0,directedBy);
            }

        } else if(commands.includes("onDate")){
            let movieName=tokens[0];
            let date=tokens[2];

            if (movies.includes(movieName)){
                let index=movies.indexOf(movieName);
                movies.splice(index+1,0,date);
            }
        }



    }


}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);