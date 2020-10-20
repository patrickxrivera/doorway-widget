import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getRequestToken } from '../../api/twitter';
import { TWITTER_OAUTH_URL } from "../../utils/endpoints";

function ModalComponent({ show, setShow }) {
    const handleClose = () => setShow(false);
  
    const handleContinueClick = async () => {
        const requestToken = await getRequestToken();
        window.location.href = `${TWITTER_OAUTH_URL}?oauth_token=${requestToken}`;
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Welcome to Patrick's Follow Gate 👋</Modal.Title>
            </Modal.Header>
            <Modal.Body>Follow me on Twitter and give me your email... or else 🗡️</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleContinueClick}>
                Continue
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalComponent;