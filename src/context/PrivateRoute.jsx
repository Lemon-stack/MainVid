import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import PropTypes from "prop-types";

export default function PrivateRoute({ element }) {
  const { currentUser } = useAuth();

  return currentUser ? element : <Navigate to="/signin" />;
}

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
};
