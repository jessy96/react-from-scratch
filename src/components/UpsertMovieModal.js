import "./UpsertMovieModal.css";
import React from "react";
import { useForm } from "react-hook-form";
import GenresRepo from "../services/GenreRepo";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";


export default function UpsertMovieModal({header, movie, handleCloseModal}){
    const dispatch = useDispatch();
    const {updateMovie, createMovie} = bindActionCreators(actionCreators, dispatch)
    
    const genreRepo = new GenresRepo();
    const genres = genreRepo.getAllGenres();

     
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        if (movie === undefined){
            handleCreate(data);
        } else {
            handleUpdate(movie, data);
        }

        handleCloseModal();
    };
    const onError = (errors, e) => console.log(errors, e);

    const handleUpdate = (movie, formData)=>{
        if(formData.title){
            movie.title = formData.title;
        }
        if(formData.genre && formData.genre !== "All"){
            movie.genres = [{name: formData.genre}];
        }

        if(formData.url){
            movie.poster_path = formData.url;
        }

        if(formData.rating){
            movie.vote_average = Number(formData.rating);
        }
        if(formData.runtime){
            movie.runtime = Number(formData.runtime);
        }

        if(formData.overview){
            movie.overview = formData.overview;
        }

        updateMovie(movie)
    };


    const handleCreate = (formData)=>{
        const newMovie = {};
        newMovie.title = formData.title;
        newMovie.genres = [formData.genre];
        newMovie.poster_path = formData.url;
        newMovie.vote_average = Number(formData.rating);
        newMovie.runtime = Number(formData.runtime);
        newMovie.overview = formData.overview;
        createMovie(newMovie)
    };

    const defaultFormData = {}

    if(movie !== undefined) {
        defaultFormData.title = movie.title;
        defaultFormData.url = movie.poster_path;
        defaultFormData.rating = movie.vote_average;
        defaultFormData.runtime = movie.runtime;
        defaultFormData.overview = movie.overview;
    }

    return (
        <>
            <h1>{header}</h1>
            <form className="addMovieForm" onSubmit={handleSubmit(onSubmit, onError)}>
            	<div className="col1-2 row1 form-input">
                	<label >TITLE</label>
                	<input placeholder="Best Movie" {...register("title")} type="text" name="title" defaultValue={defaultFormData.title}/>
                </div>
                
                <div className="col1-2 row2 form-input">
                	<label>MOVIE URL</label>
                	<input placeholder="http://picture-url" {...register("url")} type="text" name="url" defaultValue={defaultFormData.url} />
                </div>
                
                <div className="col1-2 row3 form-input">
                	<label>GENRE</label>
                    <select {...register("genre")} name="genre">
                        {genres.map((genre) =>
                            <option key={genre.id}>{genre.name}</option>
                        )}
                    </select>
                </div>
                
                <div className="col3 row1 form-input">
                	<label>RELEASE DATE</label>
                	<input type="date" {...register("date")} name="releaseDate"/>
                </div>
                
                 <div className="col3 row2 form-input">
                    <label>RATING</label>
                    <input placeholder="7.8" {...register("rating")} type="text" name="rating" defaultValue={defaultFormData.rating} />
                 </div>
                 
                 <div className="col3 row3 form-input">
                    <label>RUNTIME</label>
                    <input placeholder="120" {...register("runtime")} type="text" name="runtime" defaultValue={defaultFormData.runtime} />
                 </div>

                <div className="col1-3 row4 form-input">
                	<label>OVERVIEW</label>
                	<textarea placeholder="Lorem ipsum" {...register("overview")} type="text" name="overview" defaultValue={defaultFormData.overview}/>
                </div>
                
                <div className="col2-3 row5 form-control">
                	<input className="btn-reset" type="reset" value="Reset"/>
                	<input className="btn-submit" type="submit" value="Submit"/>
                </div>

            </form>

        </>
    );
}

