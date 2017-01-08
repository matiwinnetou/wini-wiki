const initialState = {
  editing: false,
  activePageText: "",
  activePageId: null
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_PAGE": {
      return Object.assign({}, state, {
        editing: false,
        activePageId: action.payload.pageId,
        activePageText: action.payload.pageText
      })
    }

    case "CREATE_PAGE": {
      return Object.assign({}, state, {
        editing: false
      })
    }

    case "ENTER_EDIT_MODE": {
      if (state.activePageId === null) {
        return Object.assign({}, state, state)
      }

      return Object.assign({}, state, {
        editing: true,
        activePageText: action.payload.pageText
      })
    }

    case "LEAVE_EDIT_MODE": {
      if (state.activePageId === null) {
        return Object.assign({}, state, state)
      }

      return Object.assign({}, state, {
        editing: false
      })
    }

    case "DELETE_PAGE": {
      return Object.assign({}, state, {
        activePageId: null,
        activePageText: "",
        editing: false
      })
    }

    case "PAGE_TEXT_CHANGED": {
      return Object.assign({}, state, {
        activePageText: action.payload.pageText
      });
    }

    default:
      return state
  }
}

export default reducers;