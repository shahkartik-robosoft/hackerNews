import * as React from "react";
import Text from "../../atoms/Text/Text";
import ItemDetails from "../../molecules/ItemDetails/ItemDetails";
import './HackerNewItem.scss';
import apis from "../../../api/apiCalls";
import {formatData} from "../../../utils";
import {
    detailsPages,
    discussPages,
    favouritePages,
    hidePages,
    PAGES,
    pastPages,
    showCommentsPages
} from "../../../constants";

export interface IHackerNewItem {
    itemLabel: string,
    source: string,
    noOfPoints: number,
    pointsBy: string,
    time: any,
    noOfComments: number,
    kids?: Array<number>,
    html?: string
}

interface IHackerNewItemProps {
    itemId: number,
    itemIndex?: number,
    page: string,
    updateKidsList?: (kids :Array<number>) => void;
}
const HackerNewItem: React.FC<IHackerNewItemProps> = props => {
    const [hackerNewItem, setHackerNewItem] = React.useState<IHackerNewItem>();
    React.useEffect(() => {
        const subscription = apis
                                .fetchItems(props.itemId)
                                .subscribe((response: any) => {
                                    setHackerNewItem(formatData(response.data));
                                    props.updateKidsList && props.updateKidsList(response.data.kids);
                                });
        return () => {
            subscription.unsubscribe();
        };
    }, [props.itemId]);
    const hide: boolean = hidePages.includes(props.page as PAGES);
    const past: boolean = pastPages.includes(props.page as PAGES);
    const discuss: boolean = discussPages.includes(props.page as PAGES);
    const showComments: boolean = showCommentsPages.includes(props.page as PAGES);
    const details: boolean = detailsPages.includes(props.page as PAGES);
    const favourite: boolean = favouritePages.includes(props.page as PAGES);

    return (
        <React.Fragment>
            {hackerNewItem &&
            <div className="hackerNewItem">
                {props.itemIndex && <Text textLabel={`${props.itemIndex}. `} className="text_subtitle list" />}
                <div className="hackerNewItem_item">
                    <div className="hackerNewItem_item--title">
                        <Text textLabel={hackerNewItem.itemLabel} className="text"/>
                        {hackerNewItem.source && <Text textLabel={`(${hackerNewItem.source})`} className="text_subtitle"/>}
                    </div>
                    <ItemDetails
                         itemId={props.itemId}
                         noOfPoints={hackerNewItem.noOfPoints}
                         pointsBy={hackerNewItem.pointsBy}
                         time={hackerNewItem.time}
                         details={details}
                         favourite={favourite}
                         hide={hide}
                         past={past}
                         discuss={discuss}
                         showComments={showComments}
                         noOfComments={hackerNewItem.noOfComments}/>
                </div>
            </div>
            }
        </React.Fragment>
    )
};

export default HackerNewItem;
