import styles from './../styles/styles.scss';

import React, { Component } from 'react';
import classnames from "classnames";

import Paper from 'material-ui/Paper';
import m from "markdown";
import * as helper from "../helper";

const markdown = m.markdown;

class PageDisplay extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.store.subscribe(() => this.forceUpdate());
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
                <div
                    innerHtml={markdown.toHTML(data.text)}
                />

            </Paper>
        )
    }

}

PageDisplay.propTypes = {
    onToggleEdit: React.PropTypes.func.isRequired
};

export default PageDisplay;