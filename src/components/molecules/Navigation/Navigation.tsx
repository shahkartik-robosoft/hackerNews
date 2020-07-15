import * as React from "react";
import Text from "../../atoms/Text/Text";
import { Link } from "react-router-dom";
import './Navigation.scss';

interface INavigationProps {
    navText: Array<string>;
    classname?: string;
    textStyle?: string;
}

const Navigation: React.FC<INavigationProps> = props => {
    return (
        <div className={`navigation ${props.classname}`}>
            {props.navText.map((link, index) => (
                <React.Fragment key={index}>
                    <Link to={`/${link}`}>{link}</Link>
                    {/*<Link to={`/${link}`}><Text textLabel={link} className={`text ${props.textStyle}`} /></Link>*/}
                    {index < props.navText.length-1 && <p className="navigation_divider">|</p>}
                </React.Fragment>
            ))}
        </div>
    )
};

export default Navigation;
