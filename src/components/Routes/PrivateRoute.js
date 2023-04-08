import { useAuth } from "../../context/authContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  //context api thekey
  const getAuthData = localStorage.getItem("auth");
  let token = null;
  if (getAuthData) {
    token = JSON.parse(getAuthData);
  }
  console.log(token);

  let location = useLocation();
  console.log("location", location);

  //if logged in user email not found after loging to account then it will redirect to login page
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet></Outlet>;
};

export default PrivateRoute;
