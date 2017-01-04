const reducers = (state, action) => {
  switch (action.type) {
    case "SELECT_PAGE": {
      return Object.assign({}, state, { activePageId: action.pageId })
    }

    case "CREATE_PAGE": {
      return Object.assign({}, state, {
        editing: false,
        pages: state.pages.concat(action.page)
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
      const pagesCopy = state.pages.filter(page => page.id !== action.pageId);

      return Object.assign({}, state, {
        activePageId: null,
        editing: false,
        pages: pagesCopy
      })
    }

    case "PAGE_TEXT_CHANGED": {
      const stateCopy = Object.assign({}, state);

      const page = stateCopy.pages.find(page => page.id === action.pageId);

      if (page) {
        page.text = action.pageText;
      }

      return stateCopy;
    }

    case "FETCHED_PAGES": {
      if (action.status === "SUCCESS") {
        return Object.assign({}, state, { pages: action.payload.pages });
      }

      return Object.assign({}, state);
    }

    default:
      return state
  }
}

export default reducers;