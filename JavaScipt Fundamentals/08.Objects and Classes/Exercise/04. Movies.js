function movies(input) {

    //Write a function that stores information about movies inside an array. The movie's object info must be name, director, and date. You can receive several types of input:

    //     //•	"addMovie {movie name}" – add the movie
    // •	"{movie name} directedBy {director}" – check if the movie exists and then add the director
    // •	"{movie name} onDate {date}" – check if the movie exists and then add the date


    let movies = [];


    for (let commands of input) {
        if (commands.includes("addMovie")) {
            let tokens = commands.split("addMovie ");
            let movieName=tokens[1];
            let movieObj={name:movieName};
            movies.push(movieObj);
        }
        else if (commands.includes("directedBy")) {
            let tokens = commands.split(" directedBy ");
            let movieName=tokens[0];
            let directedBy=tokens[1]
            let movie=movies.find(movie=>movie.name==movieName);
            if (movie){
                movie.director=directedBy;
            }

        } else if(commands.includes("onDate")){
            let tokens = commands.split(" onDate ");
            let movieName=tokens[0];
            let date=tokens[1];

            let movie=movies.find(movie=>movie.name==movieName);
            if (movie){
                movie.date=date;
            }

        }

        



    }

    for (let object of movies){

        if(object.name && object.director && object.date){
            let text =JSON.stringify(object);
            console.log(text)
        }
    
       
    }
    

}

// movies([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
// ]
// );

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    )