import styles from './../styles/styles.scss';

import Paper from 'material-ui/Paper';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';

import PageItem from "./PageItem.jsx";

import React, { Component } from 'react';

class PageList extends React.Component {

  constructor(props) {
    super(props)
    this.state = { pages: ["tinc", "me"] } ;
  }

  render() {
    return (
      <div>
        <Paper className={styles.column} zDepth={2}>
          <List>
            <Subheader>Pages</Subheader>
            {
              this.state.pages.map(pageName => {
                return <PageItem pageName={pageName} />
              })
            }
          </List>
        </Paper>
      </div>
    )
  }
}

export default PageList;