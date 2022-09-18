import React from 'react';
import ProtectedRoute from '../containers/ProtectedRoute';

const Dashboard = () => {
  return <div>This route is protected.</div>;
};

export default ProtectedRoute(Dashboard);
