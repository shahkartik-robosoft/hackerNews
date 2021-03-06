import * as React from "react";
import HeaderLogo from "../../molecules/Header/Header";
import './Header.scss';
import Navigation from "../../molecules/Navigation/Navigation";

const navLinks: Array<string> = ["news", "comments", "ask", "show", "jobs"];

const Header: React.FC = () => {
    return (
        <div className="header">
            <HeaderLogo />
            <Navigation navText={navLinks} />
        </div>
    )
};

export default Header;
