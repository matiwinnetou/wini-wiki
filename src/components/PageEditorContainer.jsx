import React from 'react';

import { connect } from "react-redux";

import { findActivePage, toggleEditMode, pageTextChanged } from "../actions/index";
import { bindActionCreators } from "redux";

import PageEditor from "./PageEditor";

const PageEditorContainer = ({ id, text, toggleEditMode, pageTextChanged }) => {
    return (
        <PageEditor
            id={id}
            text={text}
            toggleEditMode={toggleEditMode}
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
        toggleEditMode: toggleEditMode,
        pageTextChanged: pageTextChanged
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PageEditorContainer);