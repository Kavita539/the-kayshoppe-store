import {Navigate, useLocation} from "react-router-dom";
import { useAuth } from "../context";

const PrivateRoutes = ({ element: Element }) => {
    const { state } = useAuth();
    const { token } = state;
    const location = useLocation();
  
    return token ? <Element /> : <Navigate to="/signin" state={{ from: location }} replace />;
  };

export { PrivateRoutes };