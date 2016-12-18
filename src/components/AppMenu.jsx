import React from 'react';

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
            open={this.props.open}
            onRequestClose={this.props.onMenuClose}
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
  onMenuClose: React.PropTypes.func.isRequired,
  onCreatePage: React.PropTypes.func.isRequired
};

AppMenu.defaultProps = {
  onMenuClose: () => {},
  onCreatePage: () => {}
};

export default AppMenu;