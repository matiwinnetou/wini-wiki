import Chance from "chance";
import firebase from "../myfirebase";

const chance = new Chance();

export const createNewPage = () => {
  const id = chance.string();

  return {
    type: 'CREATE_PAGE',
    page: {
      id: chance.string(),
      name: "New Page",
      text: id
    }
  }
}

export const removePage = (pageId) => {
  return {
    type: 'DELETE_PAGE',
    pageId: pageId
  }
}

export const selectPage = (pageId) => {
  return {
    type: 'SELECT_PAGE',
    pageId: pageId
  }
}

export const leaveEditModeSuccessAction = () => {
  return {
    type: 'LEAVE_EDIT_MODE'
  }
}

export const leaveEditMode = (pageId, pageText) => {
  return dispatch => {
    dispatch(leaveEditModeSuccessAction());
    storePage(pageId, pageText)(dispatch); // asynchronusly save page
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

export const storePageSuccessAction = pageId => {
  return {
    type: 'STORED_PAGE',
    status: 'SUCCESS',
    payload: {
      pageId: pageId
    }
  }
}

export const storePage = (pageId, pageText) => {
  return dispatch => {
    console.log("Storing:" + page.id);
    firebase.database().ref(`pages/${page.id}`).set({
      pageId: pageId,
      pageText: pageText
    }).then(() => {
      dispatch(storePageSuccessAction(pageId));
    });
  }
}

export const fetchPagesSuccessAction = pages => {
  return {
    type: 'FETCHED_PAGES',
    status: 'SUCCESS',
    payload: {
      pages: pages
    }
  }
}

export const fetchPagesFailureAction = errMsg => {
  return {
    type: 'FETCHED_PAGES',
    status: 'FAILURE',
    errorMsg: errMsg,
    payload: {
      pages: []
    }
  }
}

export const fetchPages = () => {
  return dispatch => {
    firebase.database().ref('pages').once('value').then(snapshot => {
      console.log("DB answered:" + snapshot);
      dispatch(fetchPagesSuccessAction([]));
    }).catch(e => {
      console.log("error:" + e);
      dispatch(fetchPagesFailureAction(e));
    });
  }
}

export const findActivePage = (pages, activePageId) => {
  return pages.find(page => page.id === activePageId);
}
