import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { getRequestToken } from '../../api/twitter';
import { saveEmail } from "../../api/user";
import { TWITTER_OAUTH_URL } from "../../utils/endpoints";
import * as EmailValidator from 'email-validator';

import {
    EmailInputSectionContainer,
    EmailInputContainer,
    EmailInput,
    EmailButton,
    TwitterButton,
    SectionContainer,
    EmailErrorText
} from "./styles";

function ModalComponent({ show, setShow }) {
    const [emailValue, setEmailValue] = useState("");
    const [showEmailErrorMessage, setShowEmailErrorMessage] = useState(false);

    const handleClose = () => setShow(false);
  
    const handleContinueClick = async () => {
        const requestToken = await getRequestToken();
        window.location.href = `${TWITTER_OAUTH_URL}?oauth_token=${requestToken}`;
    }

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value);
    }

    const handleEmailSubmit = async () => {
        const isValidEmail = EmailValidator.validate(emailValue);
        
        if (!isValidEmail) {
            setShowEmailErrorMessage(true);
            return;
        }

        // TODO: handle error
        const res = await saveEmail(emailValue);
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Welcome to Patrick's Follow Gate 👋</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <span>To access this content, you must:</span>
                <EmailInputSectionContainer>
                    <EmailInputContainer>
                        <EmailInput value={emailValue} onChange={handleEmailChange} placeholder="Enter your email..." type="email" autoComplete="off" />
                    </EmailInputContainer>
                    <EmailButton onClick={handleEmailSubmit} role="button" tabIndex="0">
                        Submit
                    </EmailButton>
                </EmailInputSectionContainer>
                {showEmailErrorMessage && <SectionContainer>
                    <EmailErrorText>Invalid email. Please try again.</EmailErrorText>
                </SectionContainer>}
                <SectionContainer>
                    <span>~ OR ~</span>
                </SectionContainer>
                <SectionContainer>
                    <TwitterButton onClick={handleContinueClick}>Follow on Twitter</TwitterButton>
                </SectionContainer>
            </Modal.Body>
        </Modal>
    )
}

export default ModalComponent;