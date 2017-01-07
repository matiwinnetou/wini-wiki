import styles from './../styles/styles.scss';

import React from 'react';

import Paper from 'material-ui/Paper';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';

import PageItemContainer from "./PageItemContainer.jsx";

const PageList = ({ isLoading, rawPages }) => {
  return (
    <div>
      <Paper className={styles.column} zDepth={2}>
        <List>
          <Subheader>Pages {isLoading ? "(loading...)" : ""}</Subheader>
          {Object.keys(rawPages).map((key, id) => {
            const page = rawPages[key];
            return <PageItemContainer key={page.id} page={page} />
          })}
        </List>
      </Paper>
    </div>
  )
}

export default PageList;
