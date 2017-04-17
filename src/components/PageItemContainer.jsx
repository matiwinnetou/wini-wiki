import React from 'react';

import { selectPage, removePage } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import PageItem from "./PageItem";

const PageItemContainer = ({ pageId, pageName, pageText, selectPage, removePage}) => {
    return (
        <PageItem
            pageId={pageId}
            pageName={pageName}
            pageText={pageText}
            selectPage={selectPage}
            removePage={removePage}
        />
    )
};

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectPage: selectPage,
        removePage: removePage
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PageItemContainer);
