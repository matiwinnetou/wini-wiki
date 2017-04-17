import styles from './../styles/styles.scss';

import React from 'react';
import classnames from "classnames";

import Paper from 'material-ui/Paper';

import MarkdownElement from "./MarkdownElement";

const PageDisplay = ({ pageText, enterEditMode }) => {
    return (
        <Paper
            className={classnames(styles.column)}
            zDepth={2}
            style={{ backgroundColor: 'navajowhite' }}
            onTouchTap={() => enterEditMode(pageText)}
            >
            <MarkdownElement text={pageText} />
        </Paper>
    )
};

export default PageDisplay;
