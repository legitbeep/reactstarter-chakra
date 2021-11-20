import { useState, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Layout from "components/layout";
// import PrivateRoute from "components/route/PrivateRoute";
import NotFound from "components/404";

import { privateRoutes, routes } from "routes";

const App = () => (
  <BrowserRouter>
    {/* <Layout> */}
    <Routes>
      {routes.map((routeProps, index) => (
        <Route exact {...routeProps} key={index} />
      ))}
      {/* {privateRoutes.map((privateRouteProps, index) => (
          <PrivateRoute {...privateRouteProps} key={`privateRoute-${index}`} />
        ))} */}
      <Route element={<NotFound />} />
    </Routes>
    {/* </Layout> */}
  </BrowserRouter>
);

export default App;
