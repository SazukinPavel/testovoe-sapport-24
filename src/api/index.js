import axios from "axios";

export const $axios = axios.create({
  baseURL: "https://www.nbrb.by/api/exrates/currencies/",
});
