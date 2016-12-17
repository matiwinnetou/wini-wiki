import styles from './../styles/styles.scss';

import React from 'react';
import AppBar from 'material-ui/AppBar';

class TopBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = { open: false };
  }

  render() {
    return (
      <div className={styles['u-margin-bottom-5']}>
        <AppBar title="Wini Wiki" />
      </div>
    )
  }

}

export default TopBar;