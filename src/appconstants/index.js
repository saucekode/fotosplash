export const API_BASE_URL = "https://fotosplash.herokuapp.com"
// "https://fotosplash.herokuapp.com";

export const ACCESS_TOKEN = "accessToken";
// live url = https://objective-dubinsky-cb9c46.netlify.app/oauth2/redirect
export const OAUTH2_REDIRECT_URI = "http://localhost:3000/oauth2/redirect";

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;