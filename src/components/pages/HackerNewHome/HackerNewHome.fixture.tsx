import * as React from "react";
import HackerNewHome from "./HackerNewHome";
import {hackerNewItems} from "../../organisms/HackerNewItem/HackerNewItem.fixture";
import {navLinksFooter} from "../../molecules/Navigation/Navigation.fixture";



const HackerNewHomeCosmos = () => {
    return (
        <HackerNewHome hackerNewItems={hackerNewItems} navText={navLinksFooter}/>
    )
}

export default HackerNewHomeCosmos;