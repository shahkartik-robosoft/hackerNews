import * as React from "react";
import './ItemDetails.scss';
import Text from "../../atoms/Text/Text";

interface IItemDetailsProps {
    noOfPoints: number,
    pointsBy: string,
    time?: string,
    noOfComments?: number,
    hide: boolean,
    past: boolean,
    goToComments?: () => void,
}

const ItemDetails: React.FC<IItemDetailsProps> = props => {
    const detail = `${props.noOfPoints} points by ${props.pointsBy} ${props.time} ago `;
    return (
        <div className="itemDetails">
            <Text textLabel={detail} className="text_subtitle" />
            {props.hide && <Text textLabel=" | hide " className="text_subtitle" />}
            {props.past && <Text textLabel=" | past " className="text_subtitle" />}
            {props.noOfComments && <Text textLabel={`| ${props.noOfComments} Comments`} className="text_subtitle pointerOnHover" onClick={props.goToComments} />}
        </div>
    )
};

export default ItemDetails;