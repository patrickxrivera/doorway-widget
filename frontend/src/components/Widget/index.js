import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "../Modal";
import styled from "styled-components";

function Widget() {
  const [show, setShow] = useState(true);

  const handleShow = () => setShow(true);

  return (
    <Container>
      <Button onClick={handleShow} variant="secondary">Get Access</Button>
      <FooterContainer>
        <span>Made with ❤️ by <a href="https://usemicro.com" target="_blank">Micro</a></span>
      </FooterContainer>
      <Modal show={show} setShow={setShow} />
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

export default Widget;
