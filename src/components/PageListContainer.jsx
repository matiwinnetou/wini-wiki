import React from 'react';

import { connect } from "react-redux";

import { firebaseConnect, helpers } from 'react-redux-firebase'
const { isLoaded, dataToJS } = helpers

import { bindActionCreators } from "redux";

import PageList from "./PageList.jsx";

const PageListContainer = ({ isLoading, rawPages }) => {
    return <PageList isLoading={isLoading} rawPages={rawPages} />
}

function mapStateToProps(state) {
    const rawPages = dataToJS(state.firebase, '/pages');

    return {
        rawPages: rawPages || {},
        isLoading: !isLoaded(rawPages)
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

const firebasePageListContainer = firebaseConnect([
    '/pages'
])(PageListContainer)

export default connect(mapStateToProps, mapDispatchToProps)(firebasePageListContainer);