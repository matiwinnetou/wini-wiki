import React from 'react';

import { connect } from "react-redux";

import { firebaseConnect, helpers } from 'react-redux-firebase'
const { isLoaded, dataToJS } = helpers

import PageList from "./PageList.jsx";

const PageListContainer = ({ rawPages }) => {
    return (isLoaded(rawPages) ?
       <PageList isLoading={false} rawPages={rawPages} />
     : <PageList isLoading={true} rawPages={{}} />
     )
}

const wrappedPageList = firebaseConnect([
    '/pages'
])(PageListContainer)

export default connect(
    ({firebase}) => ({
        rawPages: dataToJS(firebase, '/pages'),
    })
)(wrappedPageList)