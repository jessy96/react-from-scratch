import "./UpsertMovieModal.css";
import React from "react";


export default function UpsertMovieModal(props){
    return (
        <>
            <h1>{props.header}</h1>
            <form className="addMovieForm">
            	<div className="col1-2 row1 form-input">
                	<label >TITLE</label>
                	<input type="text" name="title" value="best movie"/>
                </div>
                
                <div className="col1-2 row2 form-input">
                	<label>MOVIE URL</label>
                	<input type="text" name="url" value="https://"/>
                </div>
                
                <div className="col1-2 row3 form-input">
                	<label>GENRE</label>
                    <select name="genre">
                        <option>Action</option>
                        <option>Drama</option>
                    </select>
                </div>
                
                <div className="col3 row1 form-input">
                	<label>RELEASE DATE</label>
                	<input type="date" name="releaseDate"/>
                </div>
                
                 <div className="col3 row2 form-input">
                    <label>RATING</label>
                    <input type="text" name="rating" value="7.8"/>
                 </div>
                 
                 <div className="col3 row3 form-input">
                    <label>RUNTIME</label>
                    <input type="text" name="runtime" value="minutes"/>
                 </div>

                <div className="col1-3 row4 form-input">
                	<label>OVERVIEW</label>
                	<textarea type="text" name="overview"></textarea>
                </div>
                
                <div className="col2-3 row5 form-control">
                	<input className="btn-reset" type="button" value="Reset"/>
                	<input className="btn-submit" type="submit" value="Submit"/>
                </div>

            </form>

        </>
    );
}