import React from 'react';

import { connect } from "react-redux";

import { leaveEditMode, pageTextChanged } from "../actions/index";
import { bindActionCreators } from "redux";

import PageEditor from "./PageEditor";

const PageEditorContainer = ({ pageId, pageText, leaveEditMode, pageTextChanged }) => {
    return (
        <PageEditor
            pageId={pageId}
            pageText={pageText}
            leaveEditMode={leaveEditMode}
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
        leaveEditMode: leaveEditMode,
        pageTextChanged: pageTextChanged
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PageEditorContainer);