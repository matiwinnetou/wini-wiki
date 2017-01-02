import React from 'react';

import { connect } from "react-redux";

import { enterEditMode, findActivePage} from "../actions/index";
import { bindActionCreators } from "redux";
import PageDisplay from "./PageDisplay";

const PageDisplayContainer = ({ pageText, enterEditMode }) => {
    return (
        <PageDisplay
            enterEditMode={enterEditMode}
            pageText={pageText}
        />
    )
}

function mapStateToProps(state) {
    const activePage = findActivePage(state.pages, state.activePageId);

    return {
        pageText: activePage ? activePage.text : ""
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        enterEditMode: enterEditMode
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PageDisplayContainer);