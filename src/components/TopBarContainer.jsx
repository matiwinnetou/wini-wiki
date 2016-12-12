import React from 'react';

import { connect } from "react-redux";
import { createNewPage } from "../actions/index";
import { bindActionCreators } from "redux";

import TopBar from "./TopBar";

const TopBarContainer = ({ createNewPage }) => {
    return (
        <TopBar 
            createNewPage={createNewPage}
         />
    )
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        createNewPage: createNewPage
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBarContainer);