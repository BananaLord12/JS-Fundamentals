function Movies(array){

    let movies = [];
    const template = {name: "", director: "", date: ""};

    for(let action of array){
        let tokens = String(action).split(" ");
        
        if(tokens[0] === "addMovie"){ //Add a Movie
            let movie = {name: ""};
            let movieName = [];
            for(let i = 1; i < tokens.length; i++){
                movieName.push(tokens[i]);
            }
            movie["name"] = movieName.join(" ");
            movies.push(movie);
            continue;
        }
        
        let movieName = movieNameCombiner(tokens);
        const checkMovie = movie => movie.name === movieName;
        let command = "";

        if(movies.some(checkMovie)){
            for(let i = 0; i < tokens.length; i++){
                if(tokens[i] == "directedBy"){
                    command = tokens[i];
                    break;
                }else if(tokens[i] == "onDate"){
                    command = tokens[i];
                    break;
                }
            }
        }else{
            continue;
        }

        if(command == "directedBy"){
            let directorName = directorNameCombiner(tokens,command);
            let movie = movies.find(movie => movie.name === movieName);
            let index = movies.indexOf(movies);
            movie.director = directorName;

            movies[index] = movie;

        }else{
            let movieDate = directorNameCombiner(tokens,command);
            let movie = movies.find(movie => movie.name === movieName);
            let index = movies.indexOf(movies);
            movie.date = movieDate;

            movies[index] = movie;
        }
    }
    movies.sort(function(a,b){
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if(nameA < nameB){
            return -1;
        }
        if(nameA > nameB){
            return 1;
        }
        return 0;
    })

    let filteredMovies = movies.filter(movie => movie.name != "" && movie.director != undefined && movie.date != undefined);
    for(let fmovie of filteredMovies){
        console.log(JSON.stringify(fmovie));
    }


    function movieNameCombiner(array){
        let name = [];
        for(let i = 0; i < array.length; i++){
            if(array[i] == "directedBy" || array[i] == "onDate"){
                break;
            }
            name.push(array[i]);
        }
        return name.join(" ");
    }

    function directorNameCombiner(array, cmd){
        let name = [];
        let index = array.indexOf(cmd);
        for(let i = ++index; i < array.length; i++){
            name.push(array[i]);
        }
        return name.join(" ");
    }

    function dateSelector(array, cmd){
        let name = [];
        let index = array.indexOf(cmd);
        for(let i = ++index; i < array.length; i++){
            name.push(array[i]);
        }
        return name.join(" ");
    }
}

Movies(['addMovie Fast and Furious','addMovie Godfather','Inception directedBy Christopher Nolan','Godfather directedBy Francis Ford Coppola','Godfather onDate 29.07.2018','Fast and Furious onDate 30.07.2018','Batman onDate 01.08.2018','Fast and Furious directedBy Rob Cohen']);
Movies(['addMovie The Avengers','addMovie Superman','The Avengers directedBy Anthony Russo','The Avengers onDate 30.07.2010','Captain America onDate 30.07.2010','Captain America directedBy Joe Russo'])