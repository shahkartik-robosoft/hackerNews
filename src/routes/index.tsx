import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../components/pages/HackerNewHome/Main";
import Comments from "../components/pages/Comments";

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