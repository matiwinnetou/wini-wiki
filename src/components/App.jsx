import styles from './../styles/styles.scss';

import React from 'react';
import PageList from './PageList';
import Paper from 'material-ui/Paper';

const flexStyle = {
    'display': 'flex'
  };

class App extends React.Component {
  
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={[styles.row]}>
          <div className={styles['col-xs-2']}>
              <PageList />
          </div>
          <div className={styles['col-xs-10']}>
              <Paper>
                test
              </Paper>
          </div>
        </div>
      </div>
    )
  }
}

export default App;