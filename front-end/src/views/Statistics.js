import React, { useState } from "react";
import Rectangles from "components/Rectangles";
import "styles/statistics.scss";
import http from "api/wallet";

export default function Statistics() {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState();
  const submit = async () => {
    try {
      const res = await http.getBalanceAddress(address);
      const { status, data } = res;
      if (status === 200) {
        setBalance(data.Balance);
      }
    } catch (error) {
      setBalance("");
      alert("Address not exist !");
      throw error;
    }
  };
  return (
    <div className="account-container">
      <div className="container__header">
        <span>Account Statistics</span>
      </div>
      <div className="account-form">
        <div className="account-form__address">
          <label className="account-form__address__label">
            My Address (Account Address)
          </label>
          <input
            type="text"
            placeholder="0xABC123..."
            onChange={(e) => setAddress(e.target.value)}
            className="account-form__address__input"
          />
        </div>
      </div>
      <button className="account__submit" onClick={submit}>
        Submit
      </button>
      <Rectangles address={address} balance={balance} />
    </div>
  );
}
