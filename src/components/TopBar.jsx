import styles from './../styles/styles.scss';

import React from 'react';
import AppBar from 'material-ui/AppBar';

import AppMenu from './AppMenu';

class TopBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = { open: false };
  }

  handleMenuOpen() {
    this.setState({ open: true });
  }

  handleMenuClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div className={styles['u-margin-bottom-5']}>
        <AppBar
        title="Wini Wiki"
        onLeftIconButtonTouchTap={ this.handleMenuOpen.bind(this) }
        />
        <AppMenu 
          open={this.state.open}
          onMenuClose={ this.handleMenuClose.bind(this) } />
      </div>
    )
  }

}

export default TopBar;