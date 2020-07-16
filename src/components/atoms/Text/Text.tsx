import * as React from "react";
import "./Text.scss";

export interface ITextProps {
  textLabel: string;
  style?: {};
  className?: string;
  onClick?: (e: any) => void;
}

const Text: React.FC<ITextProps> = props => {

  return (
      <p style={props.style} onClick={props.onClick} className={`${props.className}`}>{props.textLabel}</p>
  );
};

export default Text;
