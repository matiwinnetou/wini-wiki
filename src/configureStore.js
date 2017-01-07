import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducers from './reducers/index'

const initialState = {
    activePageId: null,
    editing: false,
    pages: []
}

const logger = createLogger();

const enhancer = compose(
    applyMiddleware(logger, thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducers,
    initialState,
    enhancer
);

export {
    store
};