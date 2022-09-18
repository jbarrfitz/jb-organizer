import React from 'react';
import ProtectedRoute, { ProtectedRouteComponent } from '../containers/ProtectedRoute';

const Dashboard = () => {
  return <div>This route is protected.</div>;
};

export default <ProtectedRouteComponent><Dashboard /></ProtectedRouteComponent>