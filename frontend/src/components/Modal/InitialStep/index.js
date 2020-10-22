import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import * as EmailValidator from 'email-validator';
import { getRequestToken } from '../../../api/twitter';
import { saveEmail } from "../../../api/user";
import { TWITTER_OAUTH_URL } from "../../../utils/endpoints";

import {
    EmailInputSectionContainer,
    EmailInputContainer,
    EmailInput,
    EmailButton,
    TwitterButton,
    SectionContainer,
    EmailErrorText
} from "./styles";

function InitialStep() {
    const [emailValue, setEmailValue] = useState("");
    const [showEmailErrorMessage, setShowEmailErrorMessage] = useState(false);
  
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
        
        await saveEmail(emailValue);
    }

    return (
        <React.Fragment>
            <Modal.Header style={styles.ModalHeader}>
                <Modal.Title>Welcome to Patrick's Follow Gate 👋</Modal.Title>
            </Modal.Header>
            <Modal.Body style={styles.ModalBody}>
                <span>To access this content, you must:</span>
                {/* <EmailInputSectionContainer>
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
                </SectionContainer> */}
                <SectionContainer>
                    <TwitterButton onClick={handleContinueClick}>Follow on Twitter</TwitterButton>
                </SectionContainer>
            </Modal.Body>
        </React.Fragment>
    )
}

const styles = {
    ModalHeader: {
        justifyContent: "center"
    },
    ModalBody: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }
}

export default InitialStep;