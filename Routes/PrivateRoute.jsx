// src/routes/PrivateRoute.jsx
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";

import { AuthContext } from './../src/Provider/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    // simple loading UI while we don’t know user yet
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  if (!user) {
    // not logged in → go to login and remember where we came from
    return <Navigate to="/auth/login" state={{ from: location.pathname }} replace />;
  }

  return children;
};

export default PrivateRoute;
