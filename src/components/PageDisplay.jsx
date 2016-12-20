import styles from './../styles/styles.scss';

import React, { Component } from 'react';
import classnames from "classnames";

import Paper from 'material-ui/Paper';

import MarkdownElement from "./MarkdownElement";
import * as helper from "../helper";

class PageDisplay extends React.Component {

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
            <Paper
                className={classnames(styles.column)}
                zDepth={2}
                style={{ backgroundColor: 'navajowhite' }}
                onTouchTap={this.props.onToggleEdit}
                >
                <MarkdownElement text={data.text} />
            </Paper>
        )
    }

}

PageDisplay.propTypes = {
    onToggleEdit: React.PropTypes.func.isRequired
};

export default PageDisplay;