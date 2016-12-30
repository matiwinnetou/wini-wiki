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
    id: pageId
  }
}

export const selectPage = (pageId) => {
  return {
    type: 'SELECT_PAGE',
    id: pageId
  }
}

export const leaveEditMode = () => {
  return {
    type: 'LEAVE_EDIT_MODE'
  }
}

export const enterEditMode = () => {
  return {
    type: 'ENTER_EDIT_MODE'
  }
}

export const pageTextChanged = (pageId, txt) => {
  return {
    type: 'PAGE_TEXT_CHANGED',
    id: pageId,
    text: txt
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

export const storePage = page => {
  return dispatch => {
    console.log("Storing:" + page.id);
    firebase.database().ref(`pages/${page.id}`).set({
      id: page.id,
      text: page.text
    }).then(f => {
      dispatch(storePageSuccessAction(page.id))
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
      const v = snapshot.val();
      console.log("DB answered:" + v);
      dispatch(fetchPagesSuccessAction([]));
    });
  }
}

export const findActivePage = (pages, activePageId) => {
  return pages.find(page => page.id === activePageId);
}
