import Parse from "parse/dist/parse.min.js";

const initParse = () => {
    const PARSE_APPLICATION_ID = "MPYNUsWo2DPhxCkJlhTjjmPXTvyRMFrXYj0HsRMA";
    const PARSE_HOST_URL = "https://parseapi.back4app.com/";
    const PARSE_JAVASCRIPT_KEY = "NDkUxaRlJf0kRhUIYiev4ZUhCfZD161ucEE7bwHE";
    Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
    Parse.serverURL = PARSE_HOST_URL;
}

export {initParse}