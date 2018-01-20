import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';

const Main = () => (
  <Switch>
    <Route key="home" path="/" component={Home} />
  </Switch>
);

export default Main;

