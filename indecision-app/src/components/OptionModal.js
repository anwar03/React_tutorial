import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => {
    console.log('option ', props.selectedOption);
    return (
    <Modal 
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleSeletedOption}
        contentLabel="selected Option"
    >
        <p> selected option</p>
        { props.selectedOption && <p>{ props.selectedOption }</p> }
        <button onClick={props.handleSeletedOption }>Okay</button>
    </Modal>
    )
};

export default OptionModal;