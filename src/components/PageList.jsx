import styles from './../styles/styles.scss';

import React from 'react';

import Paper from 'material-ui/Paper';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';
import CircularProgress from 'material-ui/CircularProgress'

import PageItemContainer from "./PageItemContainer.jsx";

const PageList = ({ isLoading, rawPages }) => {
  const children = isLoading ? (<CircularProgress />) :
    Object.keys(rawPages).map((key, id) => {
      return (<PageItemContainer key={key} page={rawPages[key]} />)
    })

  return (
    <div>
      <Paper className={styles.column} zDepth={2}>
        <List>
          <Subheader>Pages {isLoading ? "(loading...)" : ""}</Subheader>
          {children}
        </List>
      </Paper>
    </div >
  )
}

export default PageList;
