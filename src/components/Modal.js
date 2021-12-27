import "./Modal.css";
import React from "react";

export default function Modal({ handleClose, show, children }) {
    return (
      <>
        {!show ? null :
          (
            <div className="modal">
              <section className="modal-main">
                <div className="modal-content">
                    {children}
                </div>
                <button type="button" onClick={handleClose}>
                  <b>X</b>
                </button>
              </section>
            </div>
          )
        }
      </>  
    );
}
