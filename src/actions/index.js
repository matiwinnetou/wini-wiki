import _debounce from "lodash/debounce";

export const createNewPage = () => {
  const newPage = {
    name: "New Page",
    text: ""
  };

  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    const r = firebase.push('/pages', newPage, () => {
      dispatch({
        type: 'CREATE_PAGE',
        page: newPage
      });
    });
  }
}

export const removePage = (pageId) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    firebase.remove(`/pages/${pageId}`, () => {
      dispatch({
        type: 'DELETE_PAGE',
        pageId: pageId
      })
    });
  }
}

export const selectPage = (pageId) => {
  return {
    type: 'SELECT_PAGE',
    pageId: pageId
  }
}

export const leaveEditMode = () => {
  return dispatch => {
    dispatch({
      type: 'LEAVE_EDIT_MODE'
    });
  }
}

export const enterEditMode = () => {
  return {
    type: 'ENTER_EDIT_MODE'
  }
}

// throttle this ever 2-3 secs
export const pageTextChanged = (pageId, pageText) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    function pageTextChangedFunc() {
      firebase.update(`/pages/${pageId}`, { text: pageText }, () => {
        dispatch({
          type: 'PAGE_TEXT_CHANGED',
          pageId: pageId,
          pageText: pageText
        });
      });
    }

    //_debounce(pageTextChangedFunc, 1000);
    pageTextChangedFunc();
  }
}

export const storePage = (pageId, pageText) => {
  return dispatch => {
    dispatch(leaveEditMode());
  }
}
