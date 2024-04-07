import React from 'react';
import "./Modal.css";

export default function ModalDeleteConfirmation({ onConfirm, onCancel, showModal }) {
    return (
      <>
        {showModal && (
          <div className="modal">
            <div className="overlay" onClick={onCancel}></div>
            <div className="modal-content">
              <p>Are you sure you want to delete your account?</p>
              <p>If you hold a profile on this site, this will also be deleted upon user account deletion.</p>
              <div className="button-container">
                <button onClick={onConfirm} className="confirm-button">Yes</button>
                <button onClick={onCancel} className="cancel-button">No</button>
              </div>
            </div>
          </div>
        )}
      </>
    );
}
