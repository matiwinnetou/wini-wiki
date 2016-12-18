import styles from './../styles/styles.scss';

import Paper from 'material-ui/Paper';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';

import PageItem from "./PageItem.jsx";
import Chance from "chance";

import React, { Component } from 'react';

const chance = new Chance();

class PageList extends React.Component {

  constructor(props) {
    super(props)
    this.state = { pages: [] };
  }

  createPage() {
    const pagesCopy = this.state.pages.slice();
    const pageKey = chance.string();
    const pageName = "New Page-" + pageKey.substring(0, 2);

    const page = {
      name: pageName,
      key: pageKey
    }

    pagesCopy.push(page);

    this.setState({pages: pagesCopy});
  }

  removePage(pageKey) {
    const newPages = this.state.pages.filter(page => page.key !== pageKey);

    this.setState({pages: newPages});
  }

  render() {
    return (
      <div>
        <Paper className={styles.column} zDepth={2}>
          <List>
            <Subheader>Pages</Subheader>
            {
              this.state.pages.map((page, i) => {
                const pageName = page.name;
                const pageKey = page.key;
                
                return <PageItem key={pageKey} pageName={pageName} onPageRemoved={() => this.removePage(pageKey)} />
              })
            }
          </List>
        </Paper>
      </div>
    )
  }
}

export default PageList;