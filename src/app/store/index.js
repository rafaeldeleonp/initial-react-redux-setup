import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import { createLogger } from 'redux-logger';
import { Map } from 'immutable';

let finalCreateStore;
let store;

const getReducers = () => {
  // eslint-disable-next-line
  const componentsRedux = require('./views');
  // eslint-disable-next-line
  const viewsRedux = require('./components');

  const rootReducers = combineReducers({
    ...componentsRedux,
    ...viewsRedux,
  });

  return {
    rootReducers,
  };
};

export default function configureStore(initialState = Map({})) {
  if (store) {
    return store;
  }

  const { rootReducers } = getReducers();

  if (process.env.NODE_ENV === 'production') {
    finalCreateStore = createStore;
  } else {
    finalCreateStore = compose(applyMiddleware(createLogger({ collapsed: true })))(createStore);
  }

  store = finalCreateStore(combineReducers(rootReducers), initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../index.js', () => {
      const nextRootReducer = getReducers();
      store.replaceReducer(...nextRootReducer);
    });
  }

  return store;
}
