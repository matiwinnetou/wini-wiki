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
  }

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.props,
      pages = store.getState().pages;
    return (
      <div>
        <Paper className={styles.column} zDepth={2}>
          <List>
            <Subheader>Pages</Subheader>
            {
              pages.map(page => {
                return <PageItem 
                  key={page.id}
                  id={page.id}
                  pageName={page.name}
                  onPageSelect={() => this.props.onPageSelect(page.id)}
                  onPageRemove={() => this.props.onPageRemove(page.id)} />
              })
            }
          </List>
        </Paper>
      </div>
    )
  }
}

PageList.propTypes = {
  onPageSelect: React.PropTypes.func.isRequired,
  onPageRemove: React.PropTypes.func.isRequired
};

export default PageList;
