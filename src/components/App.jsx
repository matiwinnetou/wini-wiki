import styles from './../styles/styles.scss';

import React from 'react';
import PageList from './PageList';
import Paper from 'material-ui/Paper';
import classnames from "classnames";

class App extends React.Component {

  render() {
    return (
      <div className={classnames(styles.wrapper, styles.redBg)}>
        <div className={styles.row}>

          <div className={styles['col-xs-2']}>
            <div className={styles.box}>
              <PageList />
            </div>
          </div>
          
          <div className={styles['col-xs-10']}>
            <div className={styles.box}>
              <Paper>s</Paper>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;