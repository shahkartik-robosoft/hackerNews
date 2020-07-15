import * as React from "react";
import HackerNewItem, {IHackerNewItem} from "../../organisms/HackerNewItem/HackerNewItem";
import {useEffect} from "react";
import {formatData} from "../../../utils";

const Container: React.FC<any> = props => {
    const [items, setItems] = React.useState(props.hackerNewItems);
    useEffect(() => {
        const data = props.hackerNewItems.map((item: any) => formatData(item));
        setItems(data);
    }, [props]);

    if(props.page === 'news') {
        console.log('items  ', items);
        return (
            <HackerNewItem hackerNewItems={items} activePage ={props.activePage} />
        )
    } else {
        return (<div />);
    }
};

export default Container;