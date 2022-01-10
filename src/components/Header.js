import "./Header.css";
import React, {useState, Suspense} from "react";
import Search from "./Search";
import { useModal } from "../utils/hooks";

const UpsertMovieModal = React.lazy(()=> import("./UpsertMovieModal"));
const Modal = React.lazy(() => import("./Modal"));

export default function Header(){
    const [showCreateMovieModal, toggleCreateMovieModal] = useModal()
    return (
        <header>
            <Search/>  
            <div className="header-logo"><b>netflix</b>roulette</div>
            <button className="add-movie-btn" onClick={toggleCreateMovieModal}>+ ADD MOVIE</button>
            <Suspense fallback={<div className="error">Loading...</div>}>
                <Modal show={showCreateMovieModal} handleClose={toggleCreateMovieModal}>
                    <UpsertMovieModal header="ADD MOVIE" handleCloseModal={toggleCreateMovieModal}/>
                </Modal>
            </Suspense>
            
        </header>
    )
}