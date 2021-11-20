import { Navigate, RouteProps, Route } from "react-router-dom";

type PrivateRouteProps = RouteProps & {
  isAllowed?: boolean;
};

const PrivateRoute = ({
  isAllowed,
  element: RouteComponent,
  ...rest
}: PrivateRouteProps) => {
  return (
    <Route
      {...rest}
      element={isAllowed ? RouteComponent : <Navigate to="/login" replace />}
    />
  );
};

export default PrivateRoute;
