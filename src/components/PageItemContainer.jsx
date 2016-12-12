import React, { Component } from 'react';

import { selectPage, removePage } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import PageItem from "./PageItem";

const PageItemContainer = ({ page, selectPage, removePage}) => {
    return (
        <PageItem
            page={page}
            selectPage={selectPage}
            removePage={removePage}
        />
    )
}

function mapStateToProps(state) {
    const pages = state.pages;

    return {
        pages: state.pages
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectPage: selectPage,
        removePage: removePage
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PageItemContainer);