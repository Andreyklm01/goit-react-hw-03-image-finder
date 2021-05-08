import { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

import PropTypes from 'prop-types';
const modalRef = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeOnEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeOnEsc);
  }

  closeOnEsc = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  closeOnBackdrop = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div className={s.Overlay} onClick={this.closeOnBackdrop}>
        <div className={s.Modal}>
          <img src={this.props.largeUrl} alt="" />
        </div>
      </div>,
      modalRef,
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
};

export default Modal;
