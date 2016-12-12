import styles from './../styles/styles.scss';

import React from 'react';
import AppBar from 'material-ui/AppBar';

import AppMenu from './AppMenu';

const TopBar = ({ createNewPage }) => {
    return (
      <div className={styles['u-margin-bottom-5']}>
        <AppBar
        title="Wini Wiki"
        onLeftIconButtonTouchTap={createNewPage}
        //onLeftIconButtonTouchTap={ this.handleMenuOpen.bind(this) }
        />
        <AppMenu
          //open={this.state.open}
          //onMenuClose={this.handleMenuClose.bind(this)}
          onPageCreate={createNewPage}
        />
      </div>
    )
}

export default TopBar;