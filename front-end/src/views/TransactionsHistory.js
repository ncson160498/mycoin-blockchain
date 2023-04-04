import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import http from "api/wallet";
import * as moment from "moment";

export default function TransactionsHistory() {
  // const [address, setAddress] = useState();
  const [histories, setHistories] = useState([]);
  const getAllTransaction = async () => {
    try {
      const res = await http.getAllHitory();
      const { status, data } = res;
      if (status === 200) {
        setHistories(data);
      }
    } catch (error) {
      alert("Transactions History is Empty !");
      throw error;
    }
  };
  return (
    <div className="history-container">
      <div className="container__header">
        <span>Transitions History</span>
      </div>
      {/* <div className="form__content form__content--row">
        <label className="form__content__label form__content__label--row">
          My Address
        </label>
        <input
          type="text"
          placeholder="0xABC123..."
          onChange={(e) => setAddress(e.target.value)}
          className="form__content__input form__content__input--row"
        />
      </div> */}

      <div className="history__btn">
        <button onClick={getAllTransaction}>Get All Transaction</button>
      </div>
      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th className="col-hash">Txn Hash</th>
            <th className="col-age">Time</th>
            <th className="col-from">From</th>
            <th className="col-to">To</th>
            <th className="col-val">Value</th>
          </tr>
        </thead>
        <tbody>
          {histories.map((history) => (
            <tr>
              <td className="col-hash">{history.TXID}</td>
              <td className="col-time">
                {moment(history.Timestamp * 1000).format("DD-MM-YYYY")}
              </td>
              <td className="col-from">{history.From}</td>
              <td className="col-to">{history.To}</td>
              <td className="col-amount">{history.Value}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
