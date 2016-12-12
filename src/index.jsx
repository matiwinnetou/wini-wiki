import React from 'react';
import { render } from 'react-dom';
import AppParent from './components/AppParent.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(<AppParent />, document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept('./components/AppParent.jsx', () => {
    const AppParent = require('./components/AppParent.jsx').default;
    render(
      <AppParent />,
      document.querySelector("#app")
    );
  });
}
