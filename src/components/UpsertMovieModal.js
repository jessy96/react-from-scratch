import "./UpsertMovieModal.css";
import React from "react";
import GenresRepo from "../services/GenreRepo";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";
import { useFormik } from "formik";
import * as Yup from "yup";

const MovieSchema = Yup.object().shape({
    title: Yup.string().required(),
    url: Yup.string().required(),
    releaseDate: Yup.string().required(),
    rating: Yup.number()
                .required()
                .test("is more the 0 less then 10", 
                "Rating must be from 0 to 10 ", (val)=>{
                    return val >= 0 && val <= 10
                }),
    runtime: Yup.number()
                .required()
                .test("more then 0", "runtime should be positive", val=>{
                    return val >= 0
                }),
    overview: Yup.string().required()
})


export default function UpsertMovieModal({header, movie, handleCloseModal}){
    const dispatch = useDispatch();
    const {updateMovie, createMovie} = bindActionCreators(actionCreators, dispatch)
    
    const genreRepo = new GenresRepo();
    const genres = genreRepo.getAllGenres();

    const defaultFormData = {}

    if(movie !== undefined) {
        defaultFormData.title = movie.title;
        defaultFormData.url = movie.poster_path;
        defaultFormData.rating = movie.vote_average;
        defaultFormData.runtime = movie.runtime;
        defaultFormData.overview = movie.overview;
        defaultFormData.releaseDate = movie.release_date;
    }

    const formik = useFormik({
        initialValues: defaultFormData,
        validationSchema: MovieSchema,
        onSubmit: values => {
            console.log(values)
            if (movie === undefined){
                handleCreate(values);
            } else {
                handleUpdate(movie, values);
            }
            handleCloseModal();
        }
    })

    const handleUpdate = (movie, formData)=>{
        if(formData.title){
            movie.title = formData.title;
        }
        if(formData.genre && formData.genre !== "All"){
            movie.genres = [formData.genre];
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

        if(formData.releaseDate){
            movie.release_date = formData.releaseDate;
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
        newMovie.release_date = formData.releaseDate;
        createMovie(newMovie)
    };
  

    return (
        <>
            <h1>{header}</h1>
            <form className="addMovieForm" onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
            	<div className="col1-2 row1 form-input">
                    <label >TITLE</label>
                	<input 
                        placeholder="Best Movie" 
                        type="text" 
                        name="title" 
                        onChange={formik.handleChange}
                        value={formik.values.title}
                        onBlur={formik.handleBlur('title')}
                    />
                    {formik.touched.title && formik.errors.title}
                </div>
                
                <div className="col1-2 row2 form-input">
                	<label>MOVIE URL</label>
                	<input 
                        type="text"
                        placeholder="http://picture-url" 
                        name="url" 
                        onChange={formik.handleChange}
                        value={formik.values.url} 
                        onBlur={formik.handleBlur('url')}

                    />
                    {formik.touched.url && formik.errors.url}
                </div>
                
                <div className="col1-2 row3 form-input">
                	<label>GENRE</label>
                    <select 
                        name="genre" 
                        onChange={formik.handleChange}
                        value={formik.values.genre}
                        onBlur={formik.handleBlur('genre')}>

                            {genres.map((genre) =>
                                <option key={genre.id}>{genre.name}</option>
                            )}
                    </select>
                    {formik.touched.genre && formik.errors.genre}
                </div>
                
                <div className="col3 row1 form-input">
                	<label>RELEASE DATE</label>
                	<input type="date" onChange={formik.handleChange} 
                        value = {formik.values.releaseDate}
                        name="releaseDate"
                        onBlur={formik.handleBlur('releaseDate')}
                    />
                    {formik.touched.releaseDate && formik.errors.releaseDate}

                </div>
                
                 <div className="col3 row2 form-input">
                    <label>RATING</label>
                    <input 
                        placeholder="7.8"  
                        type="text" 
                        name="rating"
                        onChange={formik.handleChange}
                        value={formik.values.rating}
                        onBlur={formik.handleBlur('rating')}

                     />
                    {formik.touched.rating && formik.errors.rating}
                 </div>
                 
                 <div className="col3 row3 form-input">
                    <label>RUNTIME</label>
                    <input 
                        placeholder="120"
                        type="text" 
                        name="runtime" 
                        onChange={formik.handleChange}
                        value={formik.values.runtime}
                        onBlur={formik.handleBlur('runtime')}

                    />
                    {formik.touched.runtime && formik.errors.runtime}
                 </div>

                <div className="col1-3 row4 form-input">
                	<label>OVERVIEW</label>
                	<textarea 
                        placeholder="Lorem ipsum" 
                        type="text" 
                        name="overview" 
                        onChange={formik.handleChange}
                        value={formik.values.overview}
                        onBlur={formik.handleBlur('overview')}

                    />
                    {formik.touched.overview && formik.errors.overview}
                </div>
                
                <div className="col2-3 row5 form-control">
                	<input className="btn-reset" type="reset" value="Reset"/>
                	<input className="btn-submit" type="submit" value="Submit"/>
                </div>

            </form>

        </>
    );
}
