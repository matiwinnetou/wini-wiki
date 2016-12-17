import styles from './../styles/styles.scss';
import classnames from "classnames";

import React from 'react';
import PageList from './PageList';
import PageEditor from "./PageEditor";
import TopBar from "./TopBar";

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={classnames(styles.wrapper)}>
          <TopBar />

          <div className={styles.row}>
            <div className={styles['col-xs-2']}>
              <div className={styles.box}>
                <PageList />
              </div>
            </div>

            <div className={styles['col-xs-10']}>
              <div className={styles.box}>
                <PageEditor />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;