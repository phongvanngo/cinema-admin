import PageLoaderRouter from 'common/PageLoader/PageLoaderRouter';
import React, { lazy, Suspense } from 'react';
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Redirect, Route, Switch, useLocation } from "react-router-dom";
import { PublicRoutes } from './routes.const';

const AdminDashboard = lazy(() => import('pages/AdminDashboard/AdminDashboard'));
const AdminSignIn = lazy(() => import('pages/AdminSignIn/AdminSignIn'));
const LandingPage = lazy(() => import('pages/LandingPage/LandingPage'));
const {
    LANDINGPAGE,
    HOMEPAGE,
    CONTACT,
    ABOUT,
    ADMIN_DASHBOARD,
    ADMIN_SIGNIN,
    USER_DASHBOARD,
    USER_SIGNIN
} = PublicRoutes;

function PrivateAdminRoute({ children, ...rest }) {
    let location = useLocation();
    const isLoggedIn = useSelector(state => state.adminAuth.isLoggedIn);
    if (isLoggedIn) return <Route {...rest}>{children}</Route>
    return (
        <Redirect
            to={{
                pathname: ADMIN_SIGNIN,
                state: { from: location },
            }}
        />
    )
}

export default function AppRoutes() {
    return (
        <Suspense fallback={<PageLoaderRouter />}>
            <Router>
                <Switch>
                    <PrivateAdminRoute path={ADMIN_DASHBOARD}>
                        <AdminDashboard />
                    </PrivateAdminRoute>
                    <Route path={ADMIN_SIGNIN} component={AdminSignIn} exact={true} />
                    <Route path={LANDINGPAGE} component={LandingPage} exact={true} />
                    <Route path={HOMEPAGE} component={LandingPage} />
                    <Route path={CONTACT} component={LandingPage} />
                    <Route path={ABOUT} component={LandingPage} />
                    <Redirect to={LANDINGPAGE} />
                    {/* <Redirect exact from={PublicRoutes.LANDINGPAGE} to={LandingPageRoutes.HOMEPAGE} /> */}
                    {/* <Route component={NotFound} /> */}
                </Switch>
            </Router>
        </Suspense>
    )
}