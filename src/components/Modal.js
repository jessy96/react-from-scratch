import "./Modal.css";
import React from "react";

export default function Modal({ handleClose, show, children }) {
    const showHideModalClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideModalClassName}>

          <section className="modal-main">
            <div className="modal-content">
                {children}
            </div>
            <button type="button" onClick={handleClose}>
              <b>X</b>
            </button>
          </section>
        </div>
      );
}
