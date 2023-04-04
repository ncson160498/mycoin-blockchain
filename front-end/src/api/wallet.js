import Api from "./api";

const createWallet = () => {
  return Api.get("/createwallet").then((res) => res);
};

const getAllHitory = () => {
  return Api.get("/histories-all").then((res) => res);
};

const sendCoins = (params) => {
  return Api.post("/send", params).then((res) => res);
};

const getBalanceAddress = (address) => {
  return Api.get(`/getbalance/${address}`).then((res) => res);
};

const mining = (params) => {
  return Api.post("/mining", params).then((res) => res);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createWallet,
  getAllHitory,
  sendCoins,
  getBalanceAddress,
  mining,
};
