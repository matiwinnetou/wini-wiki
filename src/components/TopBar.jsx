import styles from './../styles/styles.scss';

import React from 'react';
import AppBar from 'material-ui/AppBar';

import AppMenu from './AppMenu';

class TopBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = { open: false };
  }

  handleTouchMap() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div className={styles['u-margin-bottom-5']}>
        <AppBar
        title="Wini Wiki"
        onLeftIconButtonTouchTap={ this.handleTouchMap.bind(this) }
        />
        <AppMenu open={this.state.open} />
      </div>
    )
  }

}

export default TopBar;