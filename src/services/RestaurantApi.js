import axios from "axios";

const API_KEY = 'wfjGJjybjdhG0J0LVynQTGytYSx3wWFq86tLagik1Q4VuQNV_RsSMldrz3tdjk_0oC30nRp1ba3PsvsXg1s5c7fx3Wcz9_ZgUcczJpRBcbXd2qLv2_TUH6s64KKbXHYx';
const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3';
// const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3123123';
const RestHeaders = {
  headers: {
    'Authorization': 'Bearer ' + API_KEY,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
}
export default {
  get: (url, values, headers = RestHeaders) =>  axios.get(baseURL+url, headers),
  put: (url, values, headers = RestHeaders) =>  axios.put(baseURL+url, values, headers)
}
