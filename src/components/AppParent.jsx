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
    editing: false,
    pages: [ 
        { 
            id: "test1",
            name: "Page1",
            text: "Hello.\n\n* This is markdown.\n* It is fun\n* Love it or leave it."
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
                            onToggleEdit={() => store.dispatch(actions.toggleEditMode())}
                            onPageTextChange={(pageId, txt) => store.dispatch(actions.pageTextChanged(pageId, txt))}
                        />
                    </Provider>
                </MuiThemeProvider>
            </AppContainer>
        );
    }
}

export default AppParent;