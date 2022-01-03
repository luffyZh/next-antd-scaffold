import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import userMiddleware from '@/middlewares/client/user';
import rootReducer from './reducers/index';
import rootSaga from './sagas/index';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

function bindMiddleware(middleware) {
  // add route middleware
  middleware.push(userMiddleware);
  if (!IS_PRODUCTION) {
    const { composeWithDevTools } = require('redux-devtools-extension');
    // development use logger
    const { logger } = require('redux-logger');
    middleware.push(logger);
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
}

function configureStore () {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    bindMiddleware([sagaMiddleware])
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (!IS_PRODUCTION && module.hot) {
    module.hot.accept('./reducers', function() {
      // eslint-disable-next-line global-require
      store.replaceReducer(require('./reducers').default);
    });
  }

  return store;
}

export default configureStore;

export const wrapper = createWrapper(configureStore, { debug: true });