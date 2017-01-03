import Chance from "chance";
import firebase from "../myfirebase";

const chance = new Chance();

export const createNewPage = () => {
  const id = chance.apple_token();

  return {
    type: 'CREATE_PAGE',
    page: {
      id: id,
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

export const storePageSuccessAction = pageId => {
  return {
    type: 'STORED_PAGE',
    status: 'SUCCESS',
    payload: {
      pageId: pageId
    }
  }
}

export const storePage = (pageId, pageName, pageText) => {
  return dispatch => {
    console.log("Storing:" + pageId);
    firebase.database().ref("pages/" + pageId).set({
      id: pageId,
      name: pageName,
      text: pageText
    }).then(() => {
      console.log("Store success");
      dispatch(storePageSuccessAction(pageId));
      dispatch(leaveEditMode());
    }).catch(ex => {
      console.log("Store failed:" + ex);
      dispatch(leaveEditMode());
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
      const pages = [];
      
      snapshot.forEach(childSnapshot => {
        const page = childSnapshot.val();
        console.log(JSON.stringify(page));
        pages.push(page);
      });
      
      dispatch(fetchPagesSuccessAction(pages));
    }).catch(e => {
      console.log("error:" + e);
      dispatch(fetchPagesFailureAction(e));
    });
  }
}

export const findActivePage = (pages, activePageId) => {
  return pages.find(page => page.id === activePageId);
}
