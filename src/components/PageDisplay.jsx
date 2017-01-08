import styles from './../styles/styles.scss';

import React, { Component } from 'react';
import classnames from "classnames";

import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress'

import MarkdownElement from "./MarkdownElement";

const PageDisplay = ({ pageText, isLoading, enterEditMode }) => {
    return (
        isLoading ? <CircularProgress /> : 
        <Paper
            className={classnames(styles.column)}
            zDepth={2}
            style={{ backgroundColor: 'navajowhite' }}
            onTouchTap={enterEditMode}
            >
            <MarkdownElement text={pageText} />
        </Paper>
    )
}

export default PageDisplay;