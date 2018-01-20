import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducers from '../reducers';

let finalCreateStore;
let store;

export default function configureStore(initialState = {}) {
  if (store) {
    return store;
  }

  if (process.env.NODE_ENV === 'production') {
    finalCreateStore = createStore;
  } else {
    finalCreateStore = compose(applyMiddleware(createLogger({ collapsed: true })))(createStore);
  }

  store = finalCreateStore(combineReducers({
    ...rootReducers,
  }), initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../index.js', () => {
      const nextRootReducer = rootReducers;
      store.replaceReducer(combineReducers({ ...nextRootReducer }));
    });
  }

  return store;
}
