import styles from './../styles/styles.scss';
import classnames from "classnames";

import React from 'react';
import PageList from './PageList';
import PageEditor from "./PageEditor";

import AppBar from 'material-ui/AppBar';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    document.body.style.backgroundColor = "teal";
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = null;
  }

  render() {
    return (
      <div>
        <div className={classnames(styles.wrapper)}>

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