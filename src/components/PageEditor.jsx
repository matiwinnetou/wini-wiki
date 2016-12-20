import styles from './../styles/styles.scss';

import React, { Component } from 'react';

import classnames from "classnames";

import Textfield from 'material-ui/Textfield';
import Paper from 'material-ui/Paper';
import * as helper from "../helper";

class PageEditor extends React.Component {

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
        const { store } = this.props;
        const state = store.getState();
        const data = helper.readText(state);

        return (
            <Paper className={styles.column} zDepth={2}>
                <div className={styles['u-margin-left-right-10']}>
                    <Textfield
                        id="markdown-editor"
                        className={classnames(styles.column, styles.display)}
                        multiLine={true}
                        value={data.text}
                        onBlur={this.props.onToggleEdit}
                        onChange={txt => this.props.onPageTextChange(data.activePageId)}
                        fullWidth={true}
                        underlineShow={false}
                        />
                </div>
            </Paper>
        )
    }
}

PageEditor.propTypes = {
    onPageTextChange: React.PropTypes.func.isRequired
};

export default PageEditor;