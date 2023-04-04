import React, { useState } from "react";
import "styles/statistics.scss";
import http from "api/wallet";

export default function Statistics() {
  const [address, setAddress] = useState("");
  const params = {
    address: address,
  };
  const mining = async () => {
    try {
      const res = await http.mining(params);
      const { status, data } = res;
      if (status === 200) {
        alert(data.Result);
      }
    } catch (error) {
      alert("Address not exist !");
      throw error;
    }
  };
  return (
    <div className="account-container">
      <div className="container__header">
        <span>Mining Coins</span>
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
      <button className="account__submit" onClick={mining}>
        Mining
      </button>
    </div>
  );
}
