const API_KEY = "f3b31d02";
const API_SECRET = "q1lmA0v2I60L0kLC";
const APP_ID = "8c5ed53f-b7eb-440d-93c0-ebfe822a6059";
const PRIVATE_KEY_PATH = "private.key";

const Vonage = require("@vonage/server-sdk");

const vonage = new Vonage(
  {
    apiKey: API_KEY,
    apiSecret: API_SECRET,
    applicationId: APP_ID,
    privateKey: PRIVATE_KEY_PATH
  }
);

console.log(vonage);

vonage.conversations.create({
    "name": 'CONV_NAME',
    "display_name": 'CONV_DISPLAY_NAME'}, (error, result) => {
        if(error) {
            console.error(error);
        }
        else {
            console.log(result);
        }
    });

vonage.users.create({
    "name": USER_NAME,
    "display_name": USER_DISPLAY_NAME}, (error, result) => {
        if(error) {
            console.error(error);
        }
        else {
            console.log(result);
        }
    });

vonage.users.get({}, (error, result) => {
    if(error) {
        console.error(error);
    }
    else {
        console.log(result);
    }
});