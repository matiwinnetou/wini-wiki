import React from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPages } from "../actions/index";

import { firebaseConnect, helpers } from 'react-redux-firebase'
const { isLoaded, isEmpty, dataToJS } = helpers

import { pure, compose, lifecycle } from "recompose";

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
    '/pages'
])(PageListContainer)

export default connect(
    ({firebase}) => ({
        rawPages: dataToJS(firebase, '/pages'),
    })
)(wrappedPageList)

// function mapStateToProps(state) {
//     return {
//         pages: state.pages
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//         fetchPages: fetchPages
//     }, dispatch);
// }

// const enhance = compose(
//     connect(mapStateToProps, mapDispatchToProps),
//     pure,
//     lifecycle({
//         componentDidMount() {
//             const { fetchPages } = this.props;
//             fetchPages();
//         }
//     })
// );

//export default enhance(PageListContainer);