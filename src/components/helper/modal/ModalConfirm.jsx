import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { FaInfo } from 'react-icons/fa';
import { MdCheck, MdClear } from 'react-icons/md';
import '../../../styles/modal.css';

function ModalConfirm(props) {
  const [modalIsOpen, setIsOpen] = useState();
  // ----------------------------------------------------------------------------------->
  useEffect(() => {
    Modal.setAppElement('body');
    setIsOpen(props.toggleModal);
  }, [props]);
  // ----------------------------------------------------------------------------------->
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      border: '0',
      padding: '10',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  // ----------------------------------------------------------------------------------->
  const closeModal = () => {
    setIsOpen(true);
    props.showModalConfirmTry(!props.toggleModal);
  };

  return (
    <>
      <Modal
        onRequestClose={closeModal}
        isOpen={modalIsOpen}
        style={customStyles}
      >
        <div className='modal-dialog modal-dialog-centered' role='document'>
          <div className='modal-content'>
            <div className='modal-body text-center'>
              <div className='content-body'>
                <FaInfo className='icon' />
                <h3 className='title mt-3'>
                  Do you want to delete this record?
                </h3>
                <h4 className='sub-title mt-2'>
                  You will not be able to recover this data{' '}
                </h4>
              </div>
            </div>
            <div className='modal-footer d-flex justify-content-center'>
              <button
                type='button'
                className='btn btn-cancel'
                data-dismiss='modal'
                onClick={() => closeModal()}
              >
                <MdClear /> No
              </button>
              <button
                type='button'
                className='btn btn-done'
                data-toggle='modal'
                onClick={() => props.delete()}
              >
                <MdCheck /> Yes
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ModalConfirm;
