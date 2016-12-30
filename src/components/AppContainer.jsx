import React from 'react';

import { connect } from "react-redux";
import firebase from "firebase";
import { pure, compose, lifecycle} from "recompose";

import App from "./App";

const config = {
    apiKey: "AIzaSyDXRI14USehNDjI-KpRln7u5nLTnBlMLYU",
    authDomain: "wiki-1e0b0.firebaseapp.com",
    databaseURL: "https://wiki-1e0b0.firebaseio.com",
    storageBucket: "wiki-1e0b0.appspot.com",
    messagingSenderId: "962926843866"
};

const AppContainer = ({ editing }) => {
    return (
        <App editing={editing} />
    )
}

function mapStateToProps(state) {
    return {
        editing: state.editing
    };
}

const enhance = compose(
    connect(mapStateToProps),
    pure
);

export default enhance(AppContainer);