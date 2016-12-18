import styles from './../styles/styles.scss';

import React from 'react';
import AppBar from 'material-ui/AppBar';

import AppMenu from './AppMenu';

class TopBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = { open: false };
  }

  openMenu() {
    this.setState({ open: true });
  }

  closeMenu() {
    this.setState({ open: false });
  }

  handleMenuOpen() {
    this.openMenu();
  }

  handleMenuClose() {
    this.closeMenu();
  }

  handlePageCreate() {
    this.closeMenu();
    // bubble up
    this.props.onCreatePage();
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
          onMenuClose={this.handleMenuClose.bind(this)}
          onCreatePage={this.handlePageCreate.bind(this)}
        />
      </div>
    )
  }
}

TopBar.propTypes = {
  onCreatePage: React.PropTypes.func.isRequired
};

TopBar.defaultProps = {
  onCreatePage: () => {}
};

export default TopBar;