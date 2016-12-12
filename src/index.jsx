import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({});

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const Parent = () => (
  <AppContainer>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </AppContainer>
);

render(<Parent />, document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    const App = require('./components/App.jsx').default;
    render(
      <Parent />,
      document.querySelector("#app")
    );
  });
}
