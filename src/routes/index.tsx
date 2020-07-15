import React from "react";
import { Route, Switch } from "react-router-dom";
import New from "../components/pages/HackerNewHome/News";

export interface IRoute {
    path: string;
    exact?: boolean;
    component: React.FunctionComponent;
}

const routes: Array<IRoute> = [
    {
        path: "/",
        exact: true,
        component: New,
    },
    {
        path: "/news",
        // exact: true,
        component: New,
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