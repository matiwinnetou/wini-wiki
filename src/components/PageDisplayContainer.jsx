import React from 'react';

import { connect } from "react-redux";

import { enterEditMode} from "../actions/index";
import { bindActionCreators } from "redux";

import { firebaseConnect, helpers } from 'react-redux-firebase'

import PageDisplay from "./PageDisplay";

const { dataToJS } = helpers

// function processRawPages(rawPages) {
//     const pagesList = [];

//     if (isLoaded(rawPages)) {
//         Object.keys(rawPages).map((key, id) => {
//             pagesList.push(rawPages[key]);
//         })
//         return (<PageList isLoading={false} pages={pagesList} />)
//     }

//     return (<PageList isLoading={true} pages={[]} />)
// }

const PageDisplayContainer = ({ activePageId, pageText, enterEditMode }) => {
    return (
        <PageDisplay
            enterEditMode={enterEditMode}
            pageText={pageText}
            activePageId={activePageId}
        />
    )
}

function mapStateToProps(state) {
    return {
        activePageId: state.local.activePageId,
        rawPages: dataToJS(state.firebase, '/pages')
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        enterEditMode: enterEditMode
    }, dispatch);
}

const firebasePageDisplayContainer = firebaseConnect([
    '/pages'
])(PageDisplayContainer)

export default connect(mapStateToProps, mapDispatchToProps)(firebasePageDisplayContainer);
//export default PageDisplayContainer;