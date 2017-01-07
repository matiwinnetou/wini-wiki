import styles from './../styles/styles.scss';

import React, { Component } from 'react';
import classnames from "classnames";

import MarkdownElement from "./MarkdownElement";
import Paper from 'material-ui/Paper';

const PageDisplay = ({ activePageId, pageText, enterEditMode }) => {
    return (
        <Paper
            className={classnames(styles.column)}
            zDepth={2}
            style={{ backgroundColor: 'navajowhite' }}
            onTouchTap={enterEditMode}
            >
            <MarkdownElement text={activePageId} />
        </Paper>
    )
}

export default PageDisplay;