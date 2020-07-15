import * as React from "react";
import Header from "../../organisms/Header/Header";
import HackerNewItem, {IHackerNewItem} from "../../organisms/HackerNewItem/HackerNewItem";
import Navigation from "../../molecules/Navigation/Navigation";
import './hackerNewHome.scss';

interface IHackerNewHomeProps {
    hackerNewItems: Array<IHackerNewItem>;
    navText: Array<string>;
}

const HackerNewHome: React.FC<IHackerNewHomeProps> = props => {
    return (
        <div className="hackerNewHome">
            <Header />
            <HackerNewItem hackerNewItems={props.hackerNewItems} activePage={3} />
            <div className="hackerNewHome_footer">
                <Navigation navText={props.navText} textStyle="subtitle" classname="navigate-footer" />
            </div>
        </div>
    );
};

export default HackerNewHome;