import React from 'react';
import { Link } from 'react-router-dom';
import './modal.css';

function Modal({ modalCheck, clickedModify, onSave, message, closeModify }) {
  return (
    <div className="modal-page" onClick={closeModify}>
      <div className="modal-content">
        <div className="modal-content-title">알림</div>
        <div className="modal-content-text">{message}</div>
        <div className="modal-content-button-container">
          {modalCheck ? (
            <button
              className="modal-content-button button-style"
              onClick={onSave}
            >
              확인
            </button>
          ) : (
            <Link className="Link" to="/">
              <button
                className="modal-content-button button-style"
                onClick={onSave}
              >
                확인
              </button>
            </Link>
          )}

          <button
            className="modal-content-button button-style-no"
            onClick={clickedModify}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
