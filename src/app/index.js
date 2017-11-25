import React from 'react';
import { Router } from 'react-router-dom';
import queryString from 'query-string';
import createHistory from 'history/createBrowserHistory';
import isEmpty from 'lodash/isEmpty';
import Main from '../views/Main';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.history = createHistory({
      basename: '/',
    });
    this.history.listen(this.parseQueryString);
    this.history.push(window.location.pathname.replace('/', ''));
  }

  parseQueryString = (location) => {
    let query = {};

    if (!isEmpty(location.search)) {
      query = queryString.parse(location.search);
    }

    Object.assign(location, { query });
  };

  render() {
    const me = this;

    return (
      <Router history={me.history}>
        <Main />
      </Router>
    );
  }
}

export default Root;
