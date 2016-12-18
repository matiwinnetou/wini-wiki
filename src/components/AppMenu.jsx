import React, { Component } from 'react';

import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';

class AppMenu extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Popover
            onRequestClose={() => {}}
        >
          <Menu>
            <MenuItem onTouchTap={this.props.onCreatePage}>Create Page</MenuItem>
         </Menu>
        </Popover>
      </div>
    );
  }
}

AppMenu.propTypes = {
  onCreatePage: React.PropTypes.func.isRequired
};

AppMenu.defaultProps = {
  onCreatePage: () => {}
};

export default AppMenu;