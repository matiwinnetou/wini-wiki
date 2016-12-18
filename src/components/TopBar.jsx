import styles from './../styles/styles.scss';

import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import AppMenu from './AppMenu';

class TopBar extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles['u-margin-bottom-5']}>
        <AppBar
        title="Wini Wiki"
        onLeftIconButtonTouchTap={this.props.onPageCreate}
        //onLeftIconButtonTouchTap={ this.handleMenuOpen.bind(this) }
        />
        <AppMenu
          //open={this.state.open}
          //onMenuClose={this.handleMenuClose.bind(this)}
          onPageCreate={this.props.onPageCreate}
        />
      </div>
    )
  }
}

TopBar.propTypes = {
  onPageCreate: React.PropTypes.func.isRequired
};

TopBar.defaultProps = {
  onPageCreate: () => {}
};

export default TopBar;