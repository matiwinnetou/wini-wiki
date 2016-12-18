import styles from './../styles/styles.scss';

import React from 'react';

import Textfield from 'material-ui/Textfield';
import Paper from 'material-ui/Paper';

class PageEditor extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            editorValue: '',
            editorDisabled: true
        }
    }

    handleOnClick() {
        const stateCopy = Object.assign({}, this.state);
        stateCopy.editorDisabled = false;

        this.setState(stateCopy);
    }

    handleOnChange(e) {
        const text = e.target.value;
        const stateCopy = Object.assign({}, this.state);
        stateCopy.editorValue = text;

        this.setState(stateCopy);
    }

    render() {
        const { pageName } = this.props;

        return (
            <Paper className={styles.column} zDepth={2}>
                <div className={styles['u-margin-left-right-10']}>
                    <Textfield
                        id="markdown-editor"
                        multiLine={true}
                        disabled={this.state.editorDisabled}
                        rows={10}
                        value={this.state.editorValue}
                        fullWidth={true}
                        onChange={this.handleOnChange.bind(this)}
                        onTouchTap={this.handleOnClick.bind(this)}
                        underlineShow={false}
                        />
                </div>
            </Paper>
        )
    }
    
}

export default PageEditor;