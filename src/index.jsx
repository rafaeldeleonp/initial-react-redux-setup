import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Map } from 'immutable';
import configureStore from './app/store';
import App from './app';

const store = configureStore(Map({}));

const renderApp = Component => ReactDOM.render( // eslint-disable-line react/no-render-return-value
  <AppContainer>
    <Component store={store} />
  </AppContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./app', () => {
    // eslint-disable-next-line
    const NextApp = require('./app').default;
    renderApp(NextApp);
  });
}

renderApp(App);

