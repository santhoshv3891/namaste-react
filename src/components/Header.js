import { useState } from "react";
import { LOGO_IMG } from "../utils/common";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");

  return (
    <div className="header-container flex justify-between">
      <div className="logo-holder">
        <img className="w-40" src={LOGO_IMG} />
      </div>
      <div className="menu-container flex w">
        <ul>
          <li className="menu-links">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-links">
            <Link to="/about">About Us</Link>
          </li>
          <li className="menu-links">Order</li>
          <li className="menu-links">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="menu-links">
            <Link to="/contact">Contact</Link>
          </li>
          <button
            className="loginBtn"
            onClick={() => {
              btnText === "Login" ? setBtnText("Logout") : setBtnText("Login");
            }}
          >
            {btnText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
