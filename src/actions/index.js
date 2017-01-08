import Chance from "chance";
import { firebase } from "../myfirebase";

const chance = new Chance();

const createNewPageSuccessAction = (page) => {
  return {
    type: 'CREATE_PAGE',
    status: "SUCCESS",
    page: page
  }
}

const createNewPageFailureAction = (page) => {
  return {
    type: 'CREATE_PAGE',
    status: "FAILURE",
    page: page
  }
}

export const createNewPage = () => {
  const newPage = {
    id: chance.apple_token(),
    name: "New Page",
    text: ""
  };

  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    const r = firebase.push('/pages', newPage);
    console.log("r:" + r);
    dispatch(createNewPageSuccessAction(newPage.id));
  }
}

const removePageSuccessAction = (pageId) => {
  return {
    type: 'DELETE_PAGE',
    status: 'SUCCESS',
    pageId: pageId
  }
}

export const removePage = (pageId) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    firebase.remove(`/pages/${pageId}`);

    dispatch({
      type: 'DELETE_PAGE',
      pageId: pageId
    })
  }
}

export const selectPage = (pageId) => {
  return {
    type: 'SELECT_PAGE',
    pageId: pageId
  }
}

const leaveEditModeSuccessAction = () => {
  return {
    type: 'LEAVE_EDIT_MODE'
  }
}

export const leaveEditMode = () => {
  return dispatch => {
    dispatch(leaveEditModeSuccessAction());
  }
}

export const enterEditMode = () => {
  return {
    type: 'ENTER_EDIT_MODE'
  }
}

export const pageTextChanged = (pageId, pageText) => {
  return {
    type: 'PAGE_TEXT_CHANGED',
    pageId: pageId,
    pageText: pageText
  }
}

export const storePage = (pageId, pageName, pageText) => {
  return dispatch => {
    dispatch(leaveEditMode());
  }
}

  // return dispatch => {
  //   firebase.database().ref("pages/" + pageId).set({
  //     id: pageId,
  //     name: pageName,
  //     text: pageText
  //   }).then(() => {
  //     dispatch(storePageSuccessAction(pageId));
  //     dispatch(leaveEditMode());
  //   }).catch(ex => {
  //     console.error("Store failed:" + ex);
  //     dispatch(leaveEditMode());
  //   });
 //  }
//}
