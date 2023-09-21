import { useState, useContext } from "react";
import { LOGO_IMG } from "../utils/common";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="header-container flex bg-blue-200 mb-3">
      <div className="logo-holder">
        <img className="w-40" src={LOGO_IMG} />
      </div>
      <div className="menu-container flex items-center">
        <ul className="flex">
          <li className="px-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
          </li>
          <li className="px-4">Order</li>
          <li className="px-4">
            <Link to="/grocery" className="hover:underline">
              Grocery
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
          <li className="px-4">{loggedInUser}</li>
        </ul>
        <div className="">
          <button
            className="loginBtn hover:underline px-4"
            onClick={() => {
              btnText === "Login" ? setBtnText("Logout") : setBtnText("Login");
            }}
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
