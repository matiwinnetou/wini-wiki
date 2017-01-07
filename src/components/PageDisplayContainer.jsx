import React from 'react';

import { connect } from "react-redux";

import { enterEditMode} from "../actions/index";
import { bindActionCreators } from "redux";

import { firebaseConnect, helpers } from 'react-redux-firebase'

import PageDisplay from "./PageDisplay";

const { isLoaded, dataToJS } = helpers

const PageDisplayContainer = ({ pageText, enterEditMode }) => {
    return (
        <PageDisplay
            enterEditMode={enterEditMode}
            pageText={pageText}
        />
    )
}

function mapStateToProps(state) {
    const activePageId = state.local.activePageId;
    const rawPages = dataToJS(state.firebase, '/pages');

    let pageText = "";
    if (!isLoaded(rawPages)) {
        pageText = "refreshing...";
    } else {
        const activePage = rawPages[activePageId];
        pageText = activePage ? activePage.text : "";
    }

    return {
        pageText: pageText
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        enterEditMode: enterEditMode
    }, dispatch);
}

// TODO some query because loading all pages is overkill!!!
// const firebasePageDisplayContainer = firebaseConnect([
//     '/pages#orderByKey&equalTo=b4fd8b5c5ce15f738e7a4057ffa867e00c83ce16ddf85f199c96e05ab9ff8bf3'
// ])(PageDisplayContainer)

// TODO some query because loading all pages is overkill!!!
const firebasePageDisplayContainer = firebaseConnect([
    '/pages'
])(PageDisplayContainer)

export default connect(mapStateToProps, mapDispatchToProps)(firebasePageDisplayContainer);