import React from "react";
import logo from "../../assets/images/logo.jpg";
import Button from "../Button/Button";

const Header = () => (
  <header className="header">
    <div className="flex header__content">
      <img
        className="header__logo"
        data-testid="header-logo"
        src={logo}
        alt=""
      />
      <div className="header__text">Home of Lotto Betting</div>
    </div>
    <Button>Join</Button>
  </header>
);

export default Header;
