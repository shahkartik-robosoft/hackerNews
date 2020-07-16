import * as React from "react";
import Text from "../../atoms/Text/Text";
import logo from "../../../../assets/images/logo.gif";
import './Header.scss';
import Image from "../../atoms/Image/Image";
import {useHistory} from "react-router";

const Header = () => {
    const history = useHistory();
    const routeToNews = () => {
        history.push('/news');
    }
    return (
        <div className="header" onClick={routeToNews}>
            <Image height={20} width={20} src={logo} />
            <Text textLabel="Hacker Main" className="text text_header" />
        </div>
    )
}

export default Header;