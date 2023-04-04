import React, { useState } from "react";
import "styles/navbar.scss";
import icMew from "assets/logo-mew.png";
import { FaEthereum } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const [statusDropdown, setStatusDropdown] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src={icMew} alt="" />
      </div>
      <div className="navbar__right">
        <div className="navbar__group">
          <div className="navbar__item">
            <div className="navbar__item__name">
              <FaEthereum size={30} />
              Buy ETH
            </div>
          </div>
          <div
            className="navbar__item"
            onClick={() => setStatusDropdown(!statusDropdown)}
          >
            <div className="navbar__item__name">
              <MdAccountCircle size={35} />
              <FiChevronDown />
            </div>
            <div
              className={`nav-dropdown ${
                statusDropdown ? "nav-dropdown--show" : ""
              }`}
            >
              <div className="nav-dropdown__wrapper">
                <div className="nav-dropdown__logout">Logout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
