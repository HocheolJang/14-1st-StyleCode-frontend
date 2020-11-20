import React, { Component } from 'react';
import '../../../Styles/common.scss';
import '../../../Styles/reset.scss';
import './Modal.scss';

class Modal extends Component {
  render() {
  return (
    <>
      <div className="modalWrapper">
        <div className="modalHeader">
          <p>Welcome Wecode</p>
          <span className="close-modal-btn">x</span>
        </div>
        <div className="modal-content">
          <div className="modal-body">
            <h4>Modal</h4>
            <p>fsoifjwenfmowjesdfkwsjefoiewjfoiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiijjjjjjjjjjjjjjjjjjj</p>
          </div>
          <div className="modal0footer">
            <button className="btn-cancel">close</button>
          </div>
        </div>
      </div>
    </>
  )}
}

export default Modal;