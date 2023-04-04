import React, { useState } from "react";
import "styles/create-wallet.scss";
import logo from "assets/logo-create.svg";
import http from "api/wallet";

export default function CreateWallet() {
  const [created, setCreated] = useState(false);
  const [address, setAddress] = useState("");
  const Create = async () => {
    try {
      const res = await http.createWallet();
      // console.log("res", res);
      const { status, data } = res;
      if (status === 200) {
        alert(`CREATE SUCCESS \nAddress: ${data.Address}`);
        setCreated(true);
        setAddress(data.Address);
      }
    } catch (error) {
      alert("Create Error");
      throw error;
    }
  };
  return (
    <div className="create-wallet">
      <div className="create-wallet__wrapper">
        <div className="container__header">
          <span>Wallet</span>
        </div>
        <div className="create-wallet__icon">
          <img src={logo} alt="" />
        </div>
        {created ? (
          <div>Address wallet: {address}</div>
        ) : (
          <button className="create-wallet__btn" onClick={Create}>
            CREATE
          </button>
        )}
      </div>
    </div>
  );
}
