import React from 'react';

import { connect } from "react-redux";
import { pure, compose} from "recompose";

import App from "./App";

const AppContainer = ({ editing }) => {
    return (
        <App editing={editing} />
    )
};

function mapStateToProps(state) {
    return {
        editing: state.local.editing
    };
}

const enhance = compose(
    connect(mapStateToProps),
    pure
);

export default enhance(AppContainer);
