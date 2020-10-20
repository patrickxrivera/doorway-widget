import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import Twitter from "twitter-lite";

import 'bootstrap/dist/css/bootstrap.min.css';

const CONSUMER_KEY = "75iOmCKByNk1bMatgGSMqivBX";
const CONSUMER_SECRET = "8rZQIMDjFGHGqdtahNn94BjJFIf7WMTzyBSVl0EXSfBNxP4ICv";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleContinueClick = async () => {
    // request OAuth token
    // redirect to auth page
    // get access token
    const client = new Twitter({
      consumer_key: CONSUMER_KEY,
      consumer_secret: CONSUMER_SECRET
    })

    const requestToken = await client.getRequestToken("https://usemicro.com");
    console.log({requestToken});
  }

  return (
    <Container>
      <Button onClick={handleShow} variant="secondary">Get Access</Button>
      <FooterContainer>
        <span>Made with ❤️ by <a href="https://usemicro.com" target="_blank">Micro</a></span>
      </FooterContainer>
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
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center; 
  margin-top: 16px;
  flex-direction: column;
  align-items: center;
`

const FooterContainer = styled.div`
  font-size: 12px;
  margin-top: 12px
`

export default App;