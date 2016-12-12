import React, { Component } from 'react';

import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';

const AppMenu = ({ onCreatePage }) => {
    return (
      <div>
        <Popover
            onRequestClose={() => {}}
        >
          <Menu>
            <MenuItem onTouchTap={onCreatePage}>Create Page</MenuItem>
         </Menu>
        </Popover>
      </div>
    );
}

AppMenu.propTypes = {
  onCreatePage: React.PropTypes.func.isRequired
};

AppMenu.defaultProps = {
  onCreatePage: () => {}
};

export default AppMenu;