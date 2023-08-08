import React from "react";
import "./modal.css";

function Modal({ setOpenModal, projectName, projectDetails }) {
    // console.log(">>>> here", projectName, projectDetails);
  return (
    <div className="modalBackground">
      <div className="modalContainer" >
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Projects</h1>
        </div>
        <div className="body">
            <b>{"Project Name: "+ projectName}</b>
            <h4>Project Description</h4>
            <p> {projectDetails} </p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Collapse
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;