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
        const newText = e.target.value;
        this.setState({editorValue: e.target.value});
    }

    shouldBeEditorDisabled() {
        if (this.props.pageCount === 0) {
            return true;
        }

        return this.state.editorDisabled;
    }

    render() {
        const { pageName } = this.props;

        return (
            <Paper className={styles.column} zDepth={2}>
                <div className={styles['u-margin-left-right-10']}>
                    <Textfield
                        id="markdown-editor"
                        multiLine={true}
                        disabled={this.shouldBeEditorDisabled()}
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

// it makes no sense to allow editing anything when pageCount = 0
PageEditor.propTypes = {
  pageCount: React.PropTypes.number.isRequired
};

PageEditor.defaultProps = {
  pageCount: 0
};

export default PageEditor;