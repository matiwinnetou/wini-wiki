import React from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPagesAsync } from "../actions/index";

import { pure, compose, lifecycle} from "recompose";

import PageList from "./PageList.jsx";

const PageListContainer = ({ pages }) => {
    return (
        <PageList
            pages={pages}
         />
    )
}

function mapStateToProps(state) {
    return {
        pages: state.pages
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchPagesAsync: fetchPagesAsync
    }, dispatch);
}

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    pure,
    lifecycle({
        componentDidMount() {
            const { fetchPagesAsync } = this.props;
            fetchPagesAsync.call();
        }
    })
);

export default enhance(PageListContainer);