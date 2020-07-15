import * as React from "react";
import { useLocation } from "react-router";
import apis  from "../../../api/apiCalls";
import {MAX_ITEM_IN_A_PAGE} from "../../../constants";
import Container from "./Container";
import {IHackerNewItem} from "../../organisms/HackerNewItem/HackerNewItem";
import {formatTime} from "../../../utils";
import {Link} from "react-router-dom";


const News: React.FC = (props ) => {
    console.log(' Location  ', useLocation());
    const [activePage, setActivePage] = React.useState(0);
    const [entries, SetEntries] = React.useState([]);
    const [data, setData] = React.useState<Array<IHackerNewItem>>([]);
    const [transformed, setTransformed] = React.useState(false);
    React.useEffect(() => {
        setTransformed(false);
        setData([]);
        apis.fetchTopStories()
            .then(res => {
                SetEntries(res.data);
            })
    }, []);
    React.useEffect(() => {
        const sliceFrom = activePage ? activePage * MAX_ITEM_IN_A_PAGE+1 : 0;
        const activeSet = entries.slice(sliceFrom, sliceFrom+30);
        const dataSet: Array<IHackerNewItem> = [];
        activeSet.forEach( async each => {
            const response = await apis.fetchItems(each);
            dataSet.push(response.data);
        });
        setData(dataSet);
        setTransformed(true);
    }, [useLocation().search, entries]);
    const page = useLocation().pathname.split("/")[1];

    if (transformed) {
        return (
            <div className="news">
                <Container page="news" activePage={activePage} hackerNewItems={data} />
                <Link to={`${page}?p=${activePage+1}`}>More</Link>
            </div>
        )
    } else {
        return <div />
    }
};

export default News;

