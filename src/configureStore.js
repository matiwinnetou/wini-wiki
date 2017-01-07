import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { config } from './myfirebase';

import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase'

//import reducers from './reducers/index'

const logger = createLogger();

const rootReducer = combineReducers({
  firebase: firebaseStateReducer
})

const enhancer = compose(
    applyMiddleware(logger, thunk),
    reactReduxFirebase(config, { userProfile: 'users' }),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

// const enhancer = compose(
//     reactReduxFirebase(config, { userProfile: 'users' }),
// );

const store = createStore(rootReducer,
    enhancer
);

export {
    store
};