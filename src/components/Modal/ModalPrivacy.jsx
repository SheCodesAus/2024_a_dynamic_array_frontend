import React, { useState } from 'react';
import PrivacyPage from '../../pages/PrivacyPage';
import "./Modal.css";

export default function Modal() {
    const [modal, setModal] = useState(false);
  
    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  
    return (
      <>
        <a href='#' onClick={toggleModal} className="btn-modal">
          Privacy Policy
        </a>
  
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <PrivacyPage />
              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        )}
      </>
    );
  }