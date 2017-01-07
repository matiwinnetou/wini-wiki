import React from 'react';

import { connect } from "react-redux";

import { firebaseConnect, helpers } from 'react-redux-firebase'
const { isLoaded, dataToJS } = helpers

import PageList from "./PageList.jsx";

function processRawPages(rawPages) {
    const pagesList = [];

    if (isLoaded(rawPages)) {
        Object.keys(rawPages).map((key, id) => {
            pagesList.push(rawPages[key]);
        })
        return (<PageList isLoading={false} pages={pagesList} />)
    }

    return (<PageList isLoading={true} pages={[]} />)
}

const PageListContainer = ({ rawPages }) => {
    return processRawPages(rawPages)
}

const wrappedPageList = firebaseConnect([
    '/pages#limitToFirst=10'
])(PageListContainer)

export default connect(
    ({firebase}) => ({
        rawPages: dataToJS(firebase, '/pages'),
    })
)(wrappedPageList)