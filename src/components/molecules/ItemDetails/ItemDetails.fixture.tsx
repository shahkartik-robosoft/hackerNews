import * as React from "react";
import ItemDetails from "./ItemDetails";

const ItemDetailsCosmos = () => {
    return (
        <div>
            <ItemDetails noOfPoints={23} pointsBy="smith Jonas" time="23 hours" hide={true} past={false} details={true} discuss={false} favourite={false} itemId={234235} showComments={true} noOfComments={35} />
        </div>
    )
};

export default ItemDetailsCosmos;