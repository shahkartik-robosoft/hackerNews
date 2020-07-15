import React from "react";

interface IImageProps {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
}

const Image: React.FC<IImageProps> = props  => {
    return <img src={props.src} height={props.height} width={props.width} alt={props.alt} />;
};

export default Image;