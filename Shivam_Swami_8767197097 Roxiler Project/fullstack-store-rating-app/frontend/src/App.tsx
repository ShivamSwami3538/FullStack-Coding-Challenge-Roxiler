import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import StoreListPage from './pages/StoreListPage';
import AdminDashboard from './pages/AdminDashboard';
import StoreOwnerDashboard from './pages/StoreOwnerDashboard';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/stores" component={StoreListPage} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/store-owner" component={StoreOwnerDashboard} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;