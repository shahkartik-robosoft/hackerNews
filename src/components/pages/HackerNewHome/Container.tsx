import * as React from "react";
import HackerNewItem from "../../organisms/HackerNewItem/HackerNewItem";
import { MAX_ITEM_IN_A_PAGE } from "../../../constants";

interface IContainer {
    activeItems: Array<number>,
    activePage: number,
    page: string
}

const Container: React.FC<IContainer> = props => {
    const startIndex = props.activePage === 0 ? 1 : 1 + (props.activePage-1) * MAX_ITEM_IN_A_PAGE;
    return (
        <React.Fragment>
            {
                props.activeItems.map((item: any, index: number) => (
                    <React.Fragment key={index}>
                        <HackerNewItem itemIndex={startIndex+index} itemId={item} page={props.page} />
                    </React.Fragment>
                ))
            }
        </React.Fragment>
    )
};

export default Container;