import * as React from "react";
import ItemDetails from "./ItemDetails";

const ItemDetailsCosmos = () => {
    return (
        <div>
            <ItemDetails noOfPoints={23} pointsBy="smith Jonas" hide={true} past={false} time="23 hours" noOfComments={35} />
            <ItemDetails noOfPoints={23} pointsBy="smith Jonas" hide={false} past={true} time="23 hours" />
            <ItemDetails noOfPoints={23} pointsBy="smith Jonas" hide={true} past={true} time="23 hours" />
        </div>
    )
};

export default ItemDetailsCosmos;