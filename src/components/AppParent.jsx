import React from 'react';

import App from './App.jsx';

import { AppContainer } from 'react-hot-loader';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({});

class AppParent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppContainer>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <App />
                </MuiThemeProvider>
            </AppContainer>
        );
    }
}
export default AppParent;