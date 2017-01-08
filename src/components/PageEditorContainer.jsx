import React from 'react';

import { connect } from "react-redux";

import { storePage, pageTextChanged } from "../actions/index";
import { bindActionCreators } from "redux";

import { firebaseConnect, helpers } from 'react-redux-firebase'

const { isLoaded, isEmpty, dataToJS } = helpers

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
    const activePageId = state.local.activePageId;
    const rawPages = dataToJS(state.firebase, '/pages');

    let pageText = "";
    if (isLoaded(rawPages)) {
        const activePage = rawPages[activePageId];
        pageText = activePage ? activePage.text : "";
    }

    return {
        pageId: activePageId,
        pageText: pageText
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        storePage: storePage,
        pageTextChanged: pageTextChanged
    }, dispatch);
}

const firebasePageEditorContainer = firebaseConnect([
    '/pages'
])(PageEditorContainer)

export default connect(mapStateToProps, mapDispatchToProps)(firebasePageEditorContainer);