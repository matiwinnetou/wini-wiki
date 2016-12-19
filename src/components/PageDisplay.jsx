import styles from './../styles/styles.scss';

import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import m from "markdown";

const markdown = m.markdown;

class PageDisplay extends React.Component {

    constructor(props) {
        super(props)
        this.props.store.subscribe(() => this.forceUpdate());
    }

    render() {
        const { store } = this.props;
        const state = store.getState();
        const activePageId = state.activePageId;
        const isDisabled = activePageId === null;
        
        let text = "";
        if (isDisabled) {
            text = "";
        } else if (activePageId && state.pages.length > 0) {
            const p = state.pages.find(page => page.id === activePageId);
            if (p) {
                text = p.text;
            }
        }

        return (
            <Paper 
                className={styles.column} 
                zDepth={2}
                onTouchTap={this.props.onToggleEdit}
                dangerouslySetInnerHTML={{__html: markdown.toHTML(text)}} />
        )
    }
    
}

PageDisplay.propTypes = {
  onToggleEdit: React.PropTypes.func.isRequired
};

export default PageDisplay;