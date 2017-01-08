const initialState = {
  editing: false,
  activePageId: null
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_PAGE": {
      return Object.assign({}, state, { activePageId: action.pageId })
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

      return Object.assign({}, state, { editing: true })
    }

    case "LEAVE_EDIT_MODE": {
      if (state.activePageId === null) {
        return Object.assign({}, state, state)
      }

      return Object.assign({}, state, { editing: false })
    }

    case "DELETE_PAGE": {
      return Object.assign({}, state, {
        activePageId: null,
        editing: false
      })
    }

    case "PAGE_TEXT_CHANGED": {
      const stateCopy = Object.assign({}, state);

      return stateCopy;
    }

    default:
      return state
  }
}

export default reducers;