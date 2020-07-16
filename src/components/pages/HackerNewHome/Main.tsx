import * as React from "react";
import {useHistory, useLocation} from "react-router";
import {MAX_ITEM_IN_A_PAGE} from "../../../constants";
import Container from "./Container";
import { getPageNo } from "../../../utils";
import {useEffect, useState} from "react";
import './News.scss';
import {getSubscription} from "../../../Subscriptions";
import Text from "../../atoms/Text/Text";


const Main: React.FC = (props ) => {
    const history = useHistory();
    const [processed, setProcessed] = useState<boolean>(false);
    const [entries, setEntries] = useState<number[]>([]);
    const [activeItems, setActiveItems] = useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [total, setTotal] = useState(0);

    const page = useLocation().pathname.split("/")[1];
    useEffect(() => {
        const subscription = getSubscription(page)
            .subscribe((response: any) => {
                setEntries(response.data);
                setProcessed(false);
                setTotal(Math.ceil(response.data.length / MAX_ITEM_IN_A_PAGE));
            });

        return () => subscription.unsubscribe();
    }, []);

    useEffect(() => {
        setProcessed(false);
        const pageNo = getPageNo(location.search, "p");
        const sliceFrom = pageNo - 1 ? (pageNo-1) * MAX_ITEM_IN_A_PAGE : 0;
        const activeSet = entries.slice(sliceFrom, sliceFrom+30);

        setCurrentPage(pageNo);
        activeSet.length > 0 && setActiveItems(activeSet);

        setProcessed(true);
    }, [entries, location.search]);
    const goToNextPage = () => {
        history.push(`${page}?p=${currentPage === 0 ? 2 : currentPage+1}`);
    }

    if (processed) {
        return (
            <div className="news">
                <Container
                    activeItems={activeItems}
                    activePage={currentPage || 1}
                    page={page || 'news'}
                />
                {
                    currentPage !== total &&
                    <Text textLabel={"More"} onClick={goToNextPage} className="text_subtitle list" />
                }
            </div>
        )
    }
    else {
        return <div>test</div>
    }

};

export default Main;

