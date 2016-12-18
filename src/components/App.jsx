import styles from './../styles/styles.scss';
import classnames from "classnames";

import React, { Component } from 'react';
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
          <TopBar onPageCreate={this.props.onPageCreate} />

          <div className={styles.row}>
            <div className={styles['col-xs-2']}>
              <div className={styles.box}>
                <PageList 
                  store={this.props.store}
                  onPageSelect={this.props.onPageSelect}
                  onPageRemove={this.props.onPageRemove}
                />
              </div>
            </div>

            <div className={styles['col-xs-10']}>
              <div className={styles.box}>
                <PageEditor store={this.props.store} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  onPageSelect: React.PropTypes.func.isRequired,
  onPageCreate: React.PropTypes.func.isRequired,
  onPageRemove: React.PropTypes.func.isRequired
};

export default App;