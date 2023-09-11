import { useState } from "react";
import { LOGO_IMG } from "../utils/common";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");

  return (
    <div className="header-container">
      <div className="logo-holder">
        <img src={LOGO_IMG} />
      </div>
      <div className="menu-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Order</li>
          <li>Contact</li>
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
