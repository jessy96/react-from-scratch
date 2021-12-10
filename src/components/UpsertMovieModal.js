import "./UpsertMovieModal.css";
import React, {useContext} from "react";
import { useForm } from "react-hook-form";
import MoviesContext, { MovieRepo } from "../services/MoviesContext";



export default function UpsertMovieModal({header, movie, handleCloseModal}){
    let contextValue = useContext(MoviesContext);
    
    const movieRepo = contextValue.movieRepo;
     
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        if (movie === undefined){
            handleCreate(data);
        } else {
            handleUpdate(movie, data);
        }

        console.log(contextValue);

        contextValue.setMovieRepo(movieRepo.clone());
        handleCloseModal();
    };
    const onError = (errors, e) => console.log(errors, e);

    const handleUpdate = (movie, formData)=>{
        if(formData.title && formData.title !==""){
            movie.name = formData.title;
        }
        if(formData.genre && formData.genre !==""){
            movie.genres = [{name: formData.genre}];
        }

        if(formData.url && formData.url !==""){
            movie.url = formData.url;
        }

        if(formData.rating && formData.rating !==""){
            movie.rating = formData.rating;
        }
        if(formData.runtime && formData.runtime !==""){
            movie.runtime = formData.runtime;
        }

        if(formData.overview && formData.overview !==""){
            movie.overview = formData.overview;
        }

        movieRepo.updateMovie(movie);
    };


    const handleCreate = (formData)=>{
        const newMovie = {};
        newMovie.name = formData.title;
        newMovie.genres = [{name: formData.genre}];
        newMovie.url = formData.url;
        newMovie.rating = formData.rating;
        newMovie.runtime = formData.runtime;
        newMovie.overview = formData.overview;
        movieRepo.addMovie(newMovie);
    };

    const defaultFormData = {
        title: "best movie",
        url: "https://",
        rating: "7.8",
        runtime: "minutes"
    };

    if(movie !== undefined) {
        defaultFormData.title = movie.name;
        defaultFormData.url = movie.url;
        defaultFormData.rating = movie.rating;
        defaultFormData.runtime = movie.runtime;
    }

    return (
        <>
            <h1>{header}</h1>
            <form className="addMovieForm" onSubmit={handleSubmit(onSubmit, onError)}>
            	<div className="col1-2 row1 form-input">
                	<label >TITLE</label>
                	<input {...register("title")} type="text" name="title" defaultValue={defaultFormData.title}/>
                </div>
                
                <div className="col1-2 row2 form-input">
                	<label>MOVIE URL</label>
                	<input {...register("url")} type="text" name="url" defaultValue={defaultFormData.url} />
                </div>
                
                <div className="col1-2 row3 form-input">
                	<label>GENRE</label>
                    <select {...register("genre")} name="genre">
                        <option>Action</option>
                        <option>Drama</option>
                    </select>
                </div>
                
                <div className="col3 row1 form-input">
                	<label>RELEASE DATE</label>
                	<input type="date" {...register("date")} name="releaseDate"/>
                </div>
                
                 <div className="col3 row2 form-input">
                    <label>RATING</label>
                    <input {...register("rating")} type="text" name="rating" defaultValue={defaultFormData.rating} />
                 </div>
                 
                 <div className="col3 row3 form-input">
                    <label>RUNTIME</label>
                    <input {...register("runtime")} type="text" name="runtime" defaultValue={defaultFormData.runtime} />
                 </div>

                <div className="col1-3 row4 form-input">
                	<label>OVERVIEW</label>
                	<textarea {...register("overview")} type="text" name="overview"></textarea>
                </div>
                
                <div className="col2-3 row5 form-control">
                	<input className="btn-reset" type="reset" value="Reset"/>
                	<input className="btn-submit" type="submit" value="Submit"/>
                </div>

            </form>

        </>
    );
}

