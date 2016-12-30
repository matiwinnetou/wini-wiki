import React from 'react';

import { connect } from "react-redux";

import { findActivePage, leaveEditMode, pageTextChanged } from "../actions/index";
import { bindActionCreators } from "redux";

import { pure, compose, withHandlers } from "recompose";

import PageEditor from "./PageEditor";

const PageEditorContainer = ({ id, text, leaveEditMode, pageTextChanged }) => {
    return (
        <PageEditor
            id={id}
            text={text}
            leaveEditMode={leaveEditMode}
            pageTextChanged={pageTextChanged}
            />
    )
}

function mapStateToProps(state) {
    const activePage = findActivePage(state.pages, state.activePageId);

    return {
        id: activePage ? activePage.id : null,
        text: activePage ? activePage.text : ""
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        leaveEditMode: leaveEditMode,
        pageTextChanged: pageTextChanged
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PageEditorContainer);