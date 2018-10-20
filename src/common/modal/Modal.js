import React, { Component } from 'react';
import popper from 'popper.js';
import classNames from 'classnames';
import $ from 'jquery';
import { modal } from 'bootstrap';
import './Modal.scss';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.isModalExist = true;
  }

  componentDidMount() {
    $('#modal').modal('show');
    $('#modal').on('hidden.bs.modal', e => {
      // If modal is exist then close it

      if (this.isModalExist) {
        this.isModalExist = !this.isModalExist;
        this.props.modalController();
      }
    });
  }

  componentWillUnmount() {
    this.isModalExist = !this.isModalExist;
    $('#modal').modal('hide');
  }

  render() {
    return (
      <div
        className="modal fade"
        id="modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modal"
      >
        <div
          className={classNames('modal-dialog modal-dialog-centered', {
            'modal-lg': this.props.isLarge,
            ' modal-sm': this.props.isSmall
          })}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              {/* Modal title comes from props.title */}
              <h5 className="modal-title">{this.props.title}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {/* Modal body will come from its children */}
            <div className="modal-body">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
