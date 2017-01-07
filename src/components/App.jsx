import styles from './../styles/styles.scss';
import classnames from "classnames";

import React from 'react';
import PageDisplayContainer from "./PageDisplayContainer";
import PageListContainer from "./PageListContainer";
import PageEditorContainer from "./PageEditorContainer";
import TopBarContainer from "./TopBarContainer";

const App = ({ editing }) => {
  return (
    <div className={styles.wrapper}>
      <TopBarContainer />

      <div className={styles.row}>
        <div className={styles['col-xs-2']}>
          <div className={styles.box}>
            <PageListContainer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;