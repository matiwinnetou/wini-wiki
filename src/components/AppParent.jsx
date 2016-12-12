import React from 'react';

import { AppContainer as ReactHotLoaderAppContainer } from 'react-hot-loader';

import AppContainer from './AppContainer';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'

import createLogger from 'redux-logger';

import reducers from '../reducers/index'

const muiTheme = getMuiTheme({});

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

const AppParent = () => {
    return (
        <ReactHotLoaderAppContainer>
            <MuiThemeProvider muiTheme={muiTheme}>
                <Provider store={store}>
                    <AppContainer />
                </Provider>
            </MuiThemeProvider>
        </ReactHotLoaderAppContainer>
    );
}

export default AppParent;