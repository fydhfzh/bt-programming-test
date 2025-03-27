import React from 'react';
import { Navigate } from 'react-router';

const AuthGuard = ({ Component }) => {
  const token = window.sessionStorage.getItem('token');

  return token ? Component : <Navigate to="/signin" />;
};
export default AuthGuard;
