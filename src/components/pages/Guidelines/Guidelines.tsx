import * as React from "react";
import {getSubscription} from "../../../Subscriptions";
import {PAGES} from "../../../constants";

const JSSoup = require("jssoup").default;

const Guidelines: React.FC = () => {
    const [pageContent, setPageContent] = React.useState();
    React.useEffect(() => {
        fetch('/newsguidelines.html')
            .then((response: any) => {
                console.log('res  ', response.text());
                const soup = new JSSoup(response.text());
                console.log('res  ', response.text(), 'soup  ', soup.find('table'));
            });
    }, []);
    return (
        <div>In guidelines Page</div>
    );
}

export default Guidelines;
