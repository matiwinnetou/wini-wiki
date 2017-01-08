import styles from './../styles/styles.scss';

import React from 'react';

import classnames from "classnames";

import Textfield from 'material-ui/Textfield';
import Paper from 'material-ui/Paper';

const PageEditor = ({ pageId, pageText, leaveEditMode, pageTextChanged }) => {
    return (
        <Paper className={styles.column} zDepth={2}>
            <div className={styles['u-margin-left-right-10']}>
                <Textfield
                    id={pageId}
                    className={classnames(styles.column, styles.display)}
                    multiLine={true}
                    value={pageText}
                    onBlur={() => leaveEditMode(pageId, pageText)}
                    onChange={e => pageTextChanged(pageId, e.target.value) }
                    fullWidth={true}
                    underlineShow={false}
                    />
            </div>
        </Paper>
    )
}

export default PageEditor;