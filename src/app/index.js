import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
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
    const { store } = this.props;
    const me = this;

    return (
      <Provider store={store}>
        <Router history={me.history}>
          <Main />
        </Router>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
