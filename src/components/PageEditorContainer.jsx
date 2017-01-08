import React from 'react';

import { connect } from "react-redux";

import { storePage, pageTextChanged } from "../actions/index";
import { bindActionCreators } from "redux";

import { pure, compose, withHandlers } from "recompose";

import PageEditor from "./PageEditor";

const PageEditorContainer = ({ pageId, pageName, pageText, storePage, pageTextChanged }) => {
    return (
        <PageEditor
            pageId={pageId}
            pageText={pageText}
            pageName={pageName}
            storePage={storePage}
            pageTextChanged={pageTextChanged}
            />
    )
}

function mapStateToProps(state) {
    return {
        pageId: "",
        pageName: "",
        pageText: ""
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        storePage: storePage,
        pageTextChanged: pageTextChanged
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PageEditorContainer);