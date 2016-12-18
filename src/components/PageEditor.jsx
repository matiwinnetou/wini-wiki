import styles from './../styles/styles.scss';

import React, { Component } from 'react';

import Textfield from 'material-ui/Textfield';
import Paper from 'material-ui/Paper';

class PageEditor extends React.Component {

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
            <Paper className={styles.column} zDepth={2}>
                {}
                <div className={styles['u-margin-left-right-10']}>
                    <Textfield
                        id="markdown-editor"
                        multiLine={true}
                        disabled={true}
                        value={text}
                        fullWidth={true}
                        underlineShow={false}
                        />
                </div>
            </Paper>
        )
    }
    
}

export default PageEditor;