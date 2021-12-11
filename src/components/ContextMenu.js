import "./ContextMenu.css";
import React, {useEffect, useState, useCallback} from "react";
import DeleteMovieModal from "./DeleteMovieModal";

const UpsertMovieModal = React.lazy(()=> import("./UpsertMovieModal"));
const Modal = React.lazy(() => import("../components/Modal"));

export default function ContextMenu ({show, handleClose, anchorPoint, movie}){
    const [showEditMovieModal, setShowEditMovieModal] = useState(false);
    const [showDeleteMovieModal, setShowDeleteMovieModal] = useState(false);

    const showHideContextClassName = show ? "context display-block" : "context display-none";
    const handleClick = useCallback(() => (show ? handleClose() : null), [show]);

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
          document.removeEventListener("click", handleClick);
        };
    });

    const positionStyle = {
        top: anchorPoint.y,
        left: anchorPoint.x
    };
    return (
        <>
            <div className={showHideContextClassName}
                style={positionStyle}
            >
                <div className="context-menu">
                    <button onClick={()=>{setShowEditMovieModal(true)}}>EDIT</button>
                    <button onClick={()=>{setShowDeleteMovieModal(true)}}>DELETE</button>
                </div>
            </div>
            <Modal show={showEditMovieModal} handleClose={()=>{setShowEditMovieModal(false)}}>
                <UpsertMovieModal header="EDIT MOVIE" movie={movie} handleCloseModal={()=>{setShowEditMovieModal(false)}}/>
            </Modal>
            <Modal show={showDeleteMovieModal} handleClose={()=>{setShowDeleteMovieModal(false)}}>
                <DeleteMovieModal movie={movie} handleClose={()=>{setShowDeleteMovieModal(false)}}/>
            </Modal>
        </>
    );
}
