import axios from "axios";
import { GET_REQUEST_TOKEN } from "../utils/endpoints";

export const getRequestToken = async () => {
    const requestToken = await axios.get(GET_REQUEST_TOKEN);
    const { oauth_token } = requestToken.data;
    return oauth_token;
}