import React from 'react';

import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';

class AppMenu extends React.Component {

  constructor(props) {
    super(props);
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <Popover 
            open={this.props.open}
            onRequestClose={this.handleRequestClose.bind(this)}
        >
          <Menu>  
            <MenuItem>Create Page</MenuItem>
         </Menu>
        </Popover>
      </div>
    );
  }
}
export default AppMenu;