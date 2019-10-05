import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => {
    console.log('option ', props.selectedOption);
    return (
    <Modal 
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleSeletedOption}
        contentLabel="selected Option"
        closeTimeoutMS={300}
        className="modal"
    >
        <p className="modal-title"> selected option</p>
        { props.selectedOption && <p className="modal-body">{ props.selectedOption }</p> }
        <button onClick={props.handleSeletedOption }>Okay</button>
    </Modal>
    )
};

export default OptionModal;