import * as React from "react";
import Text from "../../atoms/Text/Text";
import ItemDetails from "../../molecules/ItemDetails/ItemDetails";
import './HackerNewItem.scss';

export interface IHackerNewItem {
    itemLabel: string,
    source: string,
    noOfPoints: number,
    pointsBy: string,
    time: any,
    noOfComments: number
}

interface IHackerNewItemProps {
    hackerNewItems: Array<IHackerNewItem>,
    activePage: number,
}
const HackerNewItem: React.FC<IHackerNewItemProps> = props => {
    console.log(' pros   ', props.hackerNewItems);
    return (
        <div className="hackerNewItem">
            <ol>
                {
                    props.hackerNewItems.map((hackerNewItem, index) => (
                        <li key={index}>
                            <div className="hackerNewItem_item">
                                <div className="hackerNewItem_item--title">
                                    <Text textLabel={hackerNewItem.itemLabel} className="text" />
                                    <Text textLabel={`(${hackerNewItem.source})`} className="text_subtitle" />
                                </div>
                                <ItemDetails noOfPoints={hackerNewItem.noOfPoints}
                                             pointsBy={hackerNewItem.pointsBy}
                                             time={hackerNewItem.time}
                                             hide={true}
                                             past={false}
                                             noOfComments={hackerNewItem.noOfComments} />
                            </div>
                        </li>
                    ))
                }
            </ol>
        </div>
    )
};

export default HackerNewItem;
