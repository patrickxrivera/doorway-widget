import axios from "axios";
import { GET_REQUEST_TOKEN, GET_ACCESS_TOKEN, FOLLOW_ON_TWITTER } from "../utils/endpoints";

export const getRequestToken = async () => {
    const requestToken = await axios.get(GET_REQUEST_TOKEN);
    const { oauth_token } = requestToken.data;
    return oauth_token;
}

export const getAccessToken = async ({ oAuthToken, oAuthVerifier }) => {
    const accessToken = await axios.post(GET_ACCESS_TOKEN, {
        oAuthToken,
        oAuthVerifier
    });
    
    const { oauth_token, oauth_token_secret } = accessToken.data;
    
    return {
        oAuthToken: oauth_token,
        oAuthTokenSecret: oauth_token_secret
    };
}

export const followOnTwitter = async ({ oAuthToken, oAuthTokenSecret }) => {
    const res = await axios.post(FOLLOW_ON_TWITTER, {
        oAuthToken,
        oAuthTokenSecret
    });

    return res.data;
}