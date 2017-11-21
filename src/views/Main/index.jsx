import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../Home';

const Main = () => (
  <Switch>
    <Route key="home" path="/" component={Home} />
    <Redirect to="/" />
  </Switch>
);

export default Main;

