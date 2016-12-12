import React from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import PageDisplayContainer from "./PageDisplayContainer";
import PageListContainer from "./PageListContainer";
import PageEditorContainer from "./PageEditorContainer";
import TopBarContainer from "./TopBarContainer";

import App from "./App";

const AppContainer = ({ editing }) => {
    return (
        <App editing={editing} />
    )
}

function mapStateToProps(state) {
    return {
        editing: state.editing
    };
}

export default connect(mapStateToProps)(AppContainer);