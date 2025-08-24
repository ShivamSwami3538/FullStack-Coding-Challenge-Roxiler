import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import StoreListPage from './StoreListPage';
import NotFoundPage from './NotFoundPage';

const IndexPage: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/stores" component={StoreListPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default IndexPage;