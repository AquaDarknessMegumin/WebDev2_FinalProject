import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ element, isLoggedIn, fallbackPath }) => {
  return isLoggedIn ? (
    <Route element={element} />
  ) : (
    <Navigate to={fallbackPath} replace />
  );
};

export default PrivateRoute;
