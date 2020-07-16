import * as React from "react";
import { useHistory } from "react-router";
import './ItemDetails.scss';
import Text from "../../atoms/Text/Text";

interface IItemDetailsProps {
    noOfPoints: number,
    pointsBy: string,
    time?: string,
    noOfComments?: number | boolean,
    details: boolean,
    hide: boolean,
    past: boolean,
    favourite: boolean,
    discuss: boolean,
    showComments: boolean,
    itemId: number,
    goToComments?: () => void,
}

const ItemDetails: React.FC<IItemDetailsProps> = props => {
    const history = useHistory();
    const detail = `${props.noOfPoints} points by ${props.pointsBy}  `;
    const routeToComments = (e: any) => {
        history.push(`/item?id=${props.itemId}`);
    }
    return (
        <div className="itemDetails">
            {props.details && <Text textLabel={detail} className="text_subtitle" />}
            <Text textLabel={`${props.time} `} className="text_subtitle" />
            {props.hide && <Text textLabel=" | hide " className="text_subtitle" />}
            {props.past && <Text textLabel=" | past " className="text_subtitle" />}
            {props.favourite && <Text textLabel=" | favourite " className="text_subtitle" />}
            {props.discuss && <Text textLabel=" | discuss " className="text_subtitle" />}
            {props.showComments ? <Text textLabel={`| ${props.noOfComments} Comments`} className="text_subtitle pointerOnHover" onClick={routeToComments} /> : ''}
        </div>
    )
};

export default ItemDetails;