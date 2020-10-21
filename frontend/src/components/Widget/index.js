import React, { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "../Modal";
import styled from "styled-components";
import queryStringParser from "qs"

function Widget() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  useEffect(() => {
    const url = window.location.href.split("?")[1];
    const res = queryStringParser.parse(url, { ignoreQueryPrefix: true });
    
    if (Object.keys(res).length === 0) {
      console.log("no response")
      return;
    }

    setShow(true);
  }, []);

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
