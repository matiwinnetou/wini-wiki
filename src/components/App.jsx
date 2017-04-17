import styles from './../styles/styles.scss';

import React from 'react';

import TopBarContainer from "./TopBarContainer";
import PageDisplayContainer from "./PageDisplayContainer";
import PageListContainer from "./PageListContainer";
import PageEditorContainer from "./PageEditorContainer";

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
        <div className={styles['col-xs-10']}>
          <div className={styles.box}>
            {!editing &&
              <PageDisplayContainer />
            }
            {editing &&
              <PageEditorContainer />
            }
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;
