import React from 'react';

import { connect } from "react-redux";

import { findActivePage, storePage, pageTextChanged } from "../actions/index";
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
    const activePage = findActivePage(state.pages, state.activePageId);

    return {
        pageId: activePage ? activePage.id : null,
        pageName: activePage ? activePage.name : null,
        pageText: activePage ? activePage.text : ""
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        storePage: storePage,
        pageTextChanged: pageTextChanged
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PageEditorContainer);