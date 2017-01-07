import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { config } from './myfirebase';

import { reactReduxFirebase, firebaseStateReducer, getFirebase } from 'react-redux-firebase'

import reducers from './reducers/index'

const logger = createLogger();

const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
  local: reducers
})

const enhancer = compose(
    applyMiddleware(logger, thunk.withExtraArgument(getFirebase)),
    reactReduxFirebase(config, { userProfile: 'users', enableLogging: true }),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer,
    enhancer
);

export {
    store
};