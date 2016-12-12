import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import React, { Component } from 'react';

class PageList extends React.Component {
  render() {
    return (
      <div>
        <Paper>
          <List>
            <Subheader>Pages</Subheader>
            {Array(10).fill(1).map((el, i) =>
                <ListItem primaryText={i} />
            )}
          </List>
        </Paper>
      </div>
    )
  }
}

export default PageList;