import * as React from "react";
import Text from "../../atoms/Text/Text";
import logo from "../../../../assets/images/logo.gif";
import './Header.scss';
import Image from "../../atoms/Image/Image";

const Header = () => {
    return (
        <div className="header">
            <Image height={20} width={20} src={logo} />
            <Text textLabel="Hacker News" className="text text_header" />
        </div>
    )
}

export default Header;