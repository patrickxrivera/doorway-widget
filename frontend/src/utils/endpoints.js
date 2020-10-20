import { isProdEnv } from "./helpers";

// TODO: move to config file
const API_URL = isProdEnv() ? '' : "http://localhost:5000"

export const GET_REQUEST_TOKEN = `${API_URL}/twitter/request-token`;

export const TWITTER_OAUTH_URL = "https://api.twitter.com/oauth/authorize";