import React from "react";
import Search from "../containers/Search";

export default function Header(){
    return (
    <header>
        <Search/>  
        <div className="header-logo"><b>netflix</b>roulette</div>
        <button className="add-movie-btn">+ ADD MOVIE</button>
    </header>
    )
}