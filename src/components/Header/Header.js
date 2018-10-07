import React from "react";
import logo from "../../assets/images/logo.jpg";
import Button from '../Button/Button';

const Header = () => <header className="header">
    <img data-testid="header-logo" src={logo} alt=""/>
    <div className="header__content">
        <div className="header__text">Home of Lotto Betting</div>
        <Button>Join</Button>
    </div>
</header>;

export default Header;