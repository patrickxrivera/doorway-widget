import { isProdEnv } from "./helpers";

// TODO: move to config file
const API_URL = isProdEnv() ? '' : "https://0d0e68bbb72c.ngrok.io"

export const GET_REQUEST_TOKEN = `${API_URL}/twitter/request-token`;

export const GET_ACCESS_TOKEN = `${API_URL}/twitter/access-token`;

export const FOLLOW_ON_TWITTER = `${API_URL}/twitter/follow`;

export const SAVE_EMAIL = `${API_URL}/user/email`;

export const TWITTER_OAUTH_URL = "https://api.twitter.com/oauth/authorize";