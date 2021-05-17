import React, { lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AdminRoutes } from "routes.const";

const MovieManagement = lazy(() => import("./MovieManagement/MovieManagement"));
const MovieTypeManagement = lazy(() =>
  import("./MovieManagement/MovieTypeManagement")
);
const TheaterManagement = lazy(() =>
  import("./TheaterManagement/TheaterManagement")
);
const CumRapManagement = lazy(() =>
  import("./TheaterManagement/CumRapManagement")
);
const PhongChieuManagement = lazy(() =>
  import("./TheaterManagement/PhongChieuManagement")
);
const TheaterSystemManagement = lazy(() =>
  import("./TheaterManagement/TheaterSystemManagement")
);
const ShowTimeManagement = lazy(() =>
  import("./ShowTimeManagement/ShowTimeManagement")
);
const AdminIntroduction = lazy(() =>
  import("./AdminIntroduction/AdminIntroduction")
);

const {
  MOVIE_MANAGEMENT,
  THEATER_MANAGEMENT,
  SHOWTIME_MANAGEMENT,
  INTRODUCTION,
  THEATER_SYSTEM_MANAGEMENT,
  PHONGCHIEU_MANAGEMENT,
  MOVIE_TYPE_MANAGEMENT,
} = AdminRoutes;

export default function AdminDashboardRoutes() {
  return (
    <Switch>
      <Route path={INTRODUCTION} component={AdminIntroduction} exact={true} />
      <Route path={MOVIE_MANAGEMENT} component={MovieManagement} />
      <Route path={THEATER_MANAGEMENT} component={CumRapManagement} />
      <Route path={SHOWTIME_MANAGEMENT} component={ShowTimeManagement} />
      <Route path={PHONGCHIEU_MANAGEMENT} component={PhongChieuManagement} />
      <Route path={MOVIE_TYPE_MANAGEMENT} component={MovieTypeManagement} />
      <Route
        path={THEATER_SYSTEM_MANAGEMENT}
        component={TheaterSystemManagement}
      />
      <Redirect to={INTRODUCTION} />
    </Switch>
  );
}
