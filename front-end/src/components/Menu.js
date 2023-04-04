import React from "react";
import "styles/menu.scss";
import { NavLink } from "react-router-dom";
import { VscExpandAll } from "react-icons/vsc";
import { AiOutlineHistory, AiFillInfoCircle } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";

export default function Menu() {
  return (
    <div className="menu">
      <div className="menu__nav">
        <NavLink
          className="menu__navlink"
          to="/create-wallet"
          activeClassName="menu__navlink--active"
        >
          <VscExpandAll /> Create Wallet
        </NavLink>
        <NavLink
          className="menu__navlink"
          to="/mining"
          activeClassName="menu__navlink--active"
        >
          <GiTwoCoins /> First Mining
        </NavLink>
        <NavLink
          className="menu__navlink"
          to="/statistics"
          activeClassName="menu__navlink--active"
        >
          <AiFillInfoCircle /> Account Statistics
        </NavLink>
        <NavLink
          className="menu__navlink"
          to="/send-coins"
          activeClassName="menu__navlink--active"
        >
          <FaEthereum /> Send Coins
        </NavLink>
        <NavLink
          className="menu__navlink"
          to="/transactions-history"
          activeClassName="menu__navlink--active"
        >
          <AiOutlineHistory /> Transactions History
        </NavLink>
      </div>
    </div>
  );
}
