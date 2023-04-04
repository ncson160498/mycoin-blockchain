import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { RiWallet3Line } from "react-icons/ri";

export default function Rectangles(props) {
  const { address, balance } = props;
  return (
    <div className="rectangle-group">
      <div className="rectangle rectangle--address">
        <div className="rectangle__icon">
          <BiUserCircle />
        </div>
        <div className="rectangle__info">
          <div className="rectangle__title">Address</div>
          <div className="rectangle__content">{address}</div>
        </div>
      </div>
      <div className="rectangle rectangle--balance">
        <div className="rectangle__icon">
          <RiWallet3Line />
        </div>
        <div className="rectangle__info">
          <div className="rectangle__title">Balance</div>
          <div className="rectangle__content">{balance} ETH</div>
        </div>
      </div>
    </div>
  );
}
