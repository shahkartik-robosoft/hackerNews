import * as React from "react";
import { Link as RouteLink } from "react-router-dom";
import './Link.scss';

interface ILinkProps {
    linkLabel: string,
    onClick?: () => void,
}

const Link: React.FC<ILinkProps> = props => {
    return (
        <p className="link">{props.linkLabel}</p>
    )
};

export default Link;
