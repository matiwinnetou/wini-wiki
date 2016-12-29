import React from 'react';

import { connect } from "react-redux";

import { enterEditMode } from "../actions/index";
import { bindActionCreators } from "redux";
import PageDisplay from "./PageDisplay";

const PageDisplayContainer = ({ text, enterEditMode }) => {
    return (
        <PageDisplay
            enterEditMode={enterEditMode}
            text={text}
        />
    )
}

function mapStateToProps(state) {
    const activePage = state.pages.find(page => page.id === state.activePageId);

    return {
        text: activePage ? activePage.text : ""
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        enterEditMode: enterEditMode
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PageDisplayContainer);