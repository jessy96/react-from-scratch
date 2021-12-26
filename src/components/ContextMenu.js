import "./ContextMenu.css";
import React, {useEffect, useState, useCallback} from "react";
import DeleteMovieModal from "./DeleteMovieModal";
import { useModal } from "../utils/hooks";

const UpsertMovieModal = React.lazy(()=> import("./UpsertMovieModal"));
const Modal = React.lazy(() => import("../components/Modal"));

export default function ContextMenu ({show, handleClose, anchorPoint, movie}){
    const [showEditMovieModal, toggleEditModal] = useModal()
    const [showDeleteMovieModal, toggleDeleteModal] = useModal()

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
            <div className={showHideContextClassName} style={positionStyle}>
                <div className="context-menu">
                    <button onClick={toggleEditModal}>EDIT</button>
                    <button onClick={toggleDeleteModal}>DELETE</button>
                </div>
            </div>
            <Modal show={showEditMovieModal} handleClose={toggleEditModal}>
                <UpsertMovieModal header="EDIT MOVIE" movie={movie} handleCloseModal={toggleEditModal}/>
            </Modal>
            <Modal show={showDeleteMovieModal} handleClose={toggleDeleteModal}>
                <DeleteMovieModal movie={movie} handleClose={toggleDeleteModal}/>
            </Modal>
        </>
    );
}
