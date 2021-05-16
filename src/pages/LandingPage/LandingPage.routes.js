import React, { lazy } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import { PublicRoutes } from 'routes.const';

const Homepage = lazy(() => import('./Homepage/Homepage'));
const Contact = lazy(() => import('./Contact/Contact'));
const About = lazy(() => import('./About/About'));

const {
    LANDINGPAGE,
    HOMEPAGE,
    CONTACT,
    ABOUT,
} = PublicRoutes;

export default function LandingPageRoutes() {
    return (
        <Switch>
            <Route path={LANDINGPAGE} component={Homepage} exact={true} />
            <Route path={HOMEPAGE} component={Homepage} />
            <Route path={CONTACT} component={Contact} />
            <Route path={ABOUT} component={About} />
            <Redirect to={LANDINGPAGE} />
        </Switch>
    )
}