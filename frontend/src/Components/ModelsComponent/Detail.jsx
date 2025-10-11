import React from 'react'
import Modal from 'react-bootstrap/Modal';

const Detail = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title>View Employee details</Modal.Title>
            </Modal.Header>
        </Modal>
    )
}

export default Detail
