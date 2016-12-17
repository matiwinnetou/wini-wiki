import styles from './../styles/styles.scss';

import React from 'react';

import Textfield from 'material-ui/Textfield';
import Paper from 'material-ui/Paper';

class PageEditor extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { pageName } = this.props;

        return (
            <Paper zDepth={2}>
                <div className={styles['u-margin-left-right-10']}>
                    <Textfield
                        multiLine={true}
                        disabled={true}
                        rows={10}
                        value="sss"
                        fullWidth={true}
                        underlineShow={false}
                        />
                </div>
            </Paper>
        )
    }
    
}

export default PageEditor;