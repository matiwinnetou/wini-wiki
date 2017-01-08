import React from 'react';

import { connect } from "react-redux";

import { storePage, pageTextChanged } from "../actions/index";
import { bindActionCreators } from "redux";

import PageEditor from "./PageEditor";

const PageEditorContainer = ({ pageId, pageText, storePage, pageTextChanged }) => {
    return (
        <PageEditor
            pageId={pageId}
            pageText={pageText}
            storePage={storePage}
            pageTextChanged={pageTextChanged}
            />
    )
}

function mapStateToProps(state) {
    return {
        pageId: state.local.activePageId,
        pageText: state.local.activePageText
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        storePage: storePage,
        pageTextChanged: pageTextChanged
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PageEditorContainer);