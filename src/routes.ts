import { RouteProps } from "react-router-dom";

import Home from "./components/home";

export const routes: Array<RouteProps> = [
  {
    path: "/",
    element: Home(),
  },
];

export const privateRoutes: Array<RouteProps> = [];
