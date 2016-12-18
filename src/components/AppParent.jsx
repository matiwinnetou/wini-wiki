import React, { Component } from 'react';

import App from './App.jsx';

import { AppContainer } from 'react-hot-loader';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { createStore } from 'redux'

import * as actions from "../actions/index";

import reducers from '../reducers/index'

import { Provider } from 'react-redux'

const muiTheme = getMuiTheme({});

const initialState = {
    activePageId: null,
    pages: [ 
        { 
            id: "test1",
            name: "Page1",
            text: "test"
        }
   ]
}

const store = createStore(reducers, initialState);

class AppParent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppContainer>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Provider store={store}>
                        <App 
                            store={store}
                            onPageCreate={() => store.dispatch(actions.createNewPage())}
                            onPageSelect={pageId => store.dispatch(actions.selectPage(pageId))}
                            onPageRemove={pageId => store.dispatch(actions.removePage(pageId))}
                        />
                    </Provider>
                </MuiThemeProvider>
            </AppContainer>
        );
    }
}

export default AppParent;