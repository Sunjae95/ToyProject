import React from 'react';
import './modal.css';
function Modal({ clickedModify, onSave }) {
  return (
    <div className="modal-page">
      <div className="modal-content">
        <div className="modal-content-title">알림</div>
        <div className="modal-content-text">수정하시겠습니까?</div>
        <div className="modal-content-button-container">
          <button
            className="modal-content-button button-style"
            onClick={onSave}
          >
            확인
          </button>
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
