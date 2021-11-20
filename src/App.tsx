import { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import PrivateRoute from "components/routes/PrivateRoute";
// import NotFound from "components/404";

import Layout from "components/layout";
const PrivateRoute = lazy(() => import("components/routes/PrivateRoute"));
const NotFound = lazy(() => import("components/404"));

import { privateRoutes, routes } from "routes";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          {routes.map((routeProps, index) => (
            <Route {...routeProps} key={index} />
          ))}
          {privateRoutes.map((privateRouteProps, index) => (
            <PrivateRoute
              {...privateRouteProps}
              key={`privateRoute-${index}`}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  </BrowserRouter>
);

export default App;
