import React, { useState, useEffect } from 'react';
import Modal from "../Modal";
import Button from "react-bootstrap/Button"
import styled from "styled-components";
import queryStringParser from "qs"
import { getAccessToken, followOnTwitter } from '../../api/twitter';
import InitialStep from '../Modal/InitialStep';
import TwitterFollowSuccess from '../Modal/TwitterFollowSuccess';
import Loading from '../Modal/Loading';
import ErrorLogger from '../../services/error-logger';
import Cache from '../../services/cache';

const STEPS = {
  INITIAL_STEP: () => InitialStep,
  TWITTER_FOLLOW_SUCCESS: () => TwitterFollowSuccess,
  LOADING: () => Loading
}

function Widget() {
  const [show, setShow] = useState(false);
  const [StepComponent, setStepComponent] = useState(STEPS.INITIAL_STEP);
  const [followedTwitterUsers, setFollowedTwitterUsers] = useState([]);

  useEffect(() => {
    const handleQueryParams = async () => {
      const url = window.location.href.split("?")[1];
      const res = queryStringParser.parse(url, { ignoreQueryPrefix: true });
      
      if (Object.keys(res).length === 0) {
        return;
      }

      try {
        setShow(true);
        setStepComponent(STEPS.LOADING);

        const { oauth_token, oauth_verifier } = res;
        
        const { token } = await getAccessToken({
          oAuthToken: oauth_token,
          oAuthVerifier: oauth_verifier
        });
        
        Cache.saveToken(token);
        
        const followOnTwitterRes = await followOnTwitter();

        setStepComponent(STEPS.TWITTER_FOLLOW_SUCCESS);

        setFollowedTwitterUsers(followOnTwitterRes);
      } catch (e) {
        ErrorLogger.send(e);
        // TODO: create error step
        setStepComponent(STEPS.INITIAL_STEP);
      }
    }
    
    handleQueryParams();
  }, []);

  const handleShow = () => setShow(true);
  
  return (
    <Container>
      <Button onClick={handleShow} variant="secondary">Get Access</Button>
      <FooterContainer>
        <span>Made with ❤️ by <a href="https://usemicro.com" target="_blank">Micro</a></span>
      </FooterContainer>
      <Modal 
        show={show} 
        setShow={setShow} 
        StepComponent={StepComponent}
        followedTwitterUsers={followedTwitterUsers}
      />
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
