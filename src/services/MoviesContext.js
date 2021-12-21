import { createContext } from "react";

const MovieContext = createContext();

export default MovieContext;

export class MovieRepo {

    movies = [
        {
            "id": 1,
            "name": "Pulp Fiction",
            "icon": "pulp-fiction.png",
            "year": 2004,
            "rating": 4.3,
            "runtime": 154,
            "overview": "Pulp Fiction is a 1994 American black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.",
            "genres": [{
                "id": 7,
                "name": "Action & Adventure"
        
            }]
        },
        {
            "id": 2,
            "name": "Bohemian Rhapsody",
            "icon": "bohemian_rhapsody.png",
            "year": 2003,
            "genres": [
                {
                    "id": 6,
                    "name": "Drama"
                },
                {
                    "id": 8,
                    "name": "Biography"
            
                },
                {
                    "id": 9,
                    "name": "Music"
            
                }  
            ]
        },
        {
            "id": 3,
            "name": "Kill Bill: Vol 2",
            "icon": "kill_bill_vol2.png",
            "year": 1994,
            "genres": [
                {
                    "id": 10,
                    "name": "Oscar winning Movie"
                }
            ]
        },
        {
            "id": 4,
            "name": "Avangers: War of Infinity",
            "icon": "avengers.png",
            "year": 2004,
            "genres": [
                {
                    "id": 7,
                    "name": "Action & Adventure"
            
                }
            ]
        },
        {
            "id": 5,
            "name": "Inception",
            "icon": "inception.png",
            "year": 2003,
            "genres": [
                {
                    "id": 7,
                    "name": "Action & Adventure"
            
                }
            ]
        },
        {
            "id": 6,
            "name": "Reservoir dogs",
            "icon": "reservoir_dogs.png",
            "year": 1994,
            "genres": [
                {
                    "id": 10,
                    "name": "Oscar winning Movie"
                }
            ]
        },
    ];

    getAllMovies(){
        return this.movies;
    }

    getFirstMovies(size){
        return this.movies.slice(0, size);
    }

    updateMovie(newMovie){
        const existingMovieIndex = this.findIndex(newMovie);

        this.movies[existingMovieIndex].name = newMovie.name;
        this.movies[existingMovieIndex].genres = newMovie.genres;
        this.movies[existingMovieIndex].url = newMovie.url;
        this.movies[existingMovieIndex].rating = newMovie.rating;
        this.movies[existingMovieIndex].runtime = newMovie.runtime;
        this.movies[existingMovieIndex].overview = newMovie.overview;

    }

    addMovie(newMovie){
        const id = "id" + Math.random().toString(16).slice(2);
        newMovie.id = id;
        this.movies.push(newMovie);
    }

    deleteMovie(movie){
        const existingMovieIndex = this.findIndex(movie);
        this.movies.splice(existingMovieIndex, 1);
    }

    findIndex(newMovie){
        return this.movies.findIndex((movie => movie.id == newMovie.id));
    }

    clone(){
        let clone = new MovieRepo();
        clone.movies = this.movies;
        return clone;
    }

    sort(option){
        let compare = (a,b) => a.name.localeCompare(b.name);
        if(option === "RELEASE DATE"){
            compare = (a,b)=>{return parseInt(a.year) - parseInt(b.year)};
        }
        this.movies.sort(compare);
    }

}
