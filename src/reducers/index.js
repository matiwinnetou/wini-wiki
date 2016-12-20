const reducers = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "SELECT_PAGE": {
      return Object.assign({}, state, { activePageId: action.id })
    }

    case "CREATE_PAGE": {
      return Object.assign({}, state, {
        editing: false,
        pages: state.pages.concat(action.page)
       })
    }

    case "TOGGLE_EDIT_MODE": {
      if (state.activePageId === null) {
        return Object.assign({}, state, state)
      }

      return Object.assign({}, state, { editing: !state.editing })
    }

    case "DELETE_PAGE": {
      const pageId = action.id;
      
      const newPages = state.pages.filter(page => page.id !== pageId);

      return Object.assign({}, state, {
        activePageId: null,
        pages: newPages
      })
    }

    case "PAGE_TEXT_CHANGED": {
      const pageId = action.id;
      const newText = action.text;

      const stateCopy = Object.assign({}, state);
      
      const page = stateCopy.pages.find(page => page.id === pageId);

      if (page) {
        page.text = newText;
      }

      return stateCopy;
    }

    default:
      return state
  }
}

export default reducers;
