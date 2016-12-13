import styles from './../styles/styles.scss';
import classnames from "classnames";

import React from 'react';
import PageList from './PageList';

import Textfield from 'material-ui/Textfield';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

class App extends React.Component {

  render() {
    return (
      <div className={classnames(styles.wrapper, styles['full-monty'])}>
        <div className={styles['u-margin-bottom-5']}>
          <AppBar title="Wini Wiki"
            showMenuIconButton={false} />
        </div>
        <div className={styles.row}>

          <div className={styles['col-xs-2']}>
            <div className={styles.box}>
              <PageList />
            </div>
          </div>

          <div className={styles['col-xs-10']}>
            <div className={styles.box}>
              <Paper zDepth={2}>
                <div className={styles['u-margin-left-right-10']}>
                  <Textfield
                    multiLine={true}
                    disabled={true}
                    rows={10}
                    value="sss"
                    fullWidth={true}
                    underlineShow={false}
                    />
                </div>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;