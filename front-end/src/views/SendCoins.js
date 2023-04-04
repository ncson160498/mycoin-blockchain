import React, { useState, useEffect } from "react";
import http from "api/wallet";

export default function SendTransaction() {
  const [disabled, setDisabled] = useState(true);
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    setDisabled(!(sender.length > 0 && receiver.length > 0 && amount > 0));
  }, [sender, receiver, amount]);
  const send = async () => {
    try {
      const params = {
        from: sender,
        to: receiver,
        amount: parseInt(amount),
      };
      const res = await http.sendCoins(params);
      const { status, data } = res;
      if (status === 200) {
        alert(data.Result);
      }
    } catch (error) {
      alert("Send Error");
      throw error;
    }
  };
  return (
    <div className="transaction-container">
      <div className="transaction">
        <div className="container__header">
          <span>Send Coins</span>
        </div>
        <div className="transaction__body">
          <div className="transaction__form">
            <div className="transaction__row form__content">
              <label className="form__content__label">Sender Address</label>
              <input
                type="text"
                className="form__content__input"
                placeholder="0xABC123..."
                onChange={(e) => setSender(e.target.value)}
              />
            </div>
            <div className="transaction__row group-double">
              <div className="form__content group-double__2">
                <label className="form__content__label">Amount</label>
                <input
                  type="number"
                  placeholder="0"
                  className="form__content__input"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>
            <div className="transaction__row form__content">
              <label className="form__content__label">Receiver Address</label>
              <input
                type="text"
                className="form__content__input"
                placeholder="0xDEF456..."
                onChange={(e) => setReceiver(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="transaction__footer">
          <button
            className={`btn-active ${disabled ? "btn-disabled" : ""}`}
            onClick={send}
            disabled={disabled}
          >
            Send
          </button>
          <p className="btn-clear">Clear All</p>
        </div>
      </div>
    </div>
  );
}
