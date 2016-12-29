import Chance from "chance";
import * as api from "../api";

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

export const fetchPages = pages => {
  return {
    type: 'FETCHED_PAGES',
    status: 'SUCCESS',
    payload: {
      pages: pages
    }
  }
}

export const storePage = pageId => {
  return {
    type: 'STORED_PAGE',
    status: 'SUCCESS',
    payload: {
      pageId: pageId
    }
  }
}

export const storePageAsync = page => {
  return dispatch => {
    console.log(page.id);

    dispatch(storePage(page.id));
  }
}

export const fetchPagesAsync = () => {
  return dispatch => {
    firebase.database().ref('pages').once('value').then(snapshot => {
      const v = snapshot.val();
      console.log(v);
      dispatch(fetchPages([]));
    });
  }
}

export const findActivePage = (pages, activePageId) => {
  return pages.find(page => page.id === activePageId);
}
