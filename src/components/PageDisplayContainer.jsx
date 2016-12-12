import React from 'react';

import { connect } from "react-redux";

import { toggleEditMode } from "../actions/index";
import { bindActionCreators } from "redux";
import PageDisplay from "./PageDisplay";

const PageDisplayContainer = ({ text, toggleEditMode }) => {
    return (
        <PageDisplay
            toggleEditMode={toggleEditMode}
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
        toggleEditMode: toggleEditMode
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PageDisplayContainer);