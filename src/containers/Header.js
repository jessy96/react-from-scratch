import "./Header.css";
import React, {useState, Suspense} from "react";
import Search from "./Search";

const UpsertMovieModal = React.lazy(()=> import("../components/UpsertMovieModal"));
const Modal = React.lazy(() => import("../components/Modal"));

export default function Header(){
    const [showCreateMovieModal, setShowCreateMovieModal] = useState(false);
    const handleClose = ()=>{
        setShowCreateMovieModal(false);
    }
    const openModel = ()=>{
        setShowCreateMovieModal(true);
    }
    return (
        <header>
            <Search/>  
            <div className="header-logo"><b>netflix</b>roulette</div>
            <button className="add-movie-btn" onClick={openModel}>+ ADD MOVIE</button>
            <Suspense fallback={<div className="error">Loading...</div>}>
                <Modal show={showCreateMovieModal} handleClose={handleClose}>
                    <UpsertMovieModal header="ADD MOVIE" handleCloseModal={handleClose}/>
                </Modal>
            </Suspense>
            
        </header>
    )
}