import axios from "axios";

const API_URL = "https://reqres.in/api/pizza";

export function postPizza(payload) {
  return axios.post(API_URL, payload);
}
