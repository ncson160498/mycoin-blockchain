import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:1327",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// interceptors.checkToken(Api);
// interceptors.checkError(Api);
// interceptors.showSpinnerRequest(Api);
// interceptors.hideSpinnerRequest(Api);

export default Api;
