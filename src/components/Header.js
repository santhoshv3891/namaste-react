import { LOGO_IMG } from "../utils/common";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
