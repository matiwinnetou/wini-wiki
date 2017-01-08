export const createNewPage = () => {
  const newPage = {
    name: "New Page",
    text: ""
  };

  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    firebase.push('/pages', newPage, () => {
      dispatch({
        type: 'CREATE_PAGE'
      });
    });
  }
}

export const removePage = (pageId) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    firebase.remove(`/pages/${pageId}`, () => {
      dispatch({
        type: 'DELETE_PAGE'
      })
    });
  }
}

export const selectPage = (pageId, pageText) => {
  return {
    type: 'SELECT_PAGE',
    payload: {
      pageId: pageId,
      pageText: pageText
    }
  }
}

export const leaveEditMode = (pageId, pageText) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    firebase.update(`/pages/${pageId}`, { text: pageText }, () => {
      dispatch({
        type: 'LEAVE_EDIT_MODE'
      });
    });
  }
}

export const enterEditMode = (pageText) => {
  return {
    type: 'ENTER_EDIT_MODE',
    payload: {
      pageText: pageText
    }
  }
}

export const pageTextChanged = (pageId, pageText) => {
  return {
    type: 'PAGE_TEXT_CHANGED',
    payload: {
      pageId: pageId,
      pageText: pageText
    }
  };
}
