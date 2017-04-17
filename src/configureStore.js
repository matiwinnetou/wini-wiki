import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { reactReduxFirebase, firebaseStateReducer, getFirebase } from 'react-redux-firebase'

import reducers from './reducers/index'

const logger = createLogger();

const config = {
    apiKey: "AIzaSyDXRI14USehNDjI-KpRln7u5nLTnBlMLYU",
    authDomain: "wiki-1e0b0.firebaseapp.com",
    databaseURL: "https://wiki-1e0b0.firebaseio.com",
    storageBucket: "wiki-1e0b0.appspot.com",
    messagingSenderId: "962926843866"
};

const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
  local: reducers
});

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
