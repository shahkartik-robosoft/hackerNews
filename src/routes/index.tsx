import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../components/pages/HackerNewHome/Main";
import Comments from "../components/pages/Comments";
import Guidelines from "../components/pages/Guidelines/Guidelines";

export interface IRoute {
    path: string;
    exact?: boolean;
    component: React.FunctionComponent;
}

const routes: Array<IRoute> = [
    {
        path: "/",
        exact: true,
        component: Main,
    },
    {
        path: "/news",
        component: Main,
    },
    {
        path: "/newest",
        component: Main,
    },
    {
        path: "/ask",
        component: Main,
    },
    {
        path: "/show",
        component: Main,
    },
    {
        path: "/jobs",
        component: Main,
    },
    {
        path: "/item",
        component: Comments,
    },
    {
        path: "/guideline",
        component: Guidelines,
    }
];

const Routes = () => {
    let renderRoutes = routes.map((item, key) => <Route key={key} {...item} />);

    return (
        <Switch>
            {renderRoutes}
    </Switch>);
};

export default Routes;