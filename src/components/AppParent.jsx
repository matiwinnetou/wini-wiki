import React from 'react';
import { Provider } from 'react-redux'

import { AppContainer as ReactHotLoaderAppContainer } from 'react-hot-loader';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppContainer from './AppContainer';

import { store } from "../configureStore";

const muiTheme = getMuiTheme({});

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