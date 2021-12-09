import "./UpsertMovieModal.css";
import React from "react";
import { useForm } from "react-hook-form";


export default function UpsertMovieModal({header, movie}){
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => console.log(data, e);
    const onError = (errors, e) => console.log(errors, e);

    return (
        <>
            <h1>{header}</h1>
            <form className="addMovieForm" onSubmit={handleSubmit(onSubmit, onError)}>
            	<div className="col1-2 row1 form-input">
                	<label >TITLE</label>
                	<input {...register("title")} type="text" name="title" defaultValue="best movie" />
                </div>
                
                <div className="col1-2 row2 form-input">
                	<label>MOVIE URL</label>
                	<input {...register("url")} type="text" name="url" defaultValue="https://" />
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
                    <input {...register("rating")} type="text" name="rating" defaultValue="7.8" />
                 </div>
                 
                 <div className="col3 row3 form-input">
                    <label>RUNTIME</label>
                    <input {...register("runtime")} type="text" name="runtime" defaultValue="minutes" />
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