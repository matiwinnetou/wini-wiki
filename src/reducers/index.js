const reducers = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "SELECT_PAGE": {

      return Object.assign({}, state, { activePageId: action.id })
    }

    case "CREATE_PAGE": {
      return Object.assign({}, state, { pages: state.pages.concat(action.page) })
    }

    case "DELETE_PAGE": {
      const pageId = action.id;

      // TODO what happens when removed one is activePageId
      const newPages = state.pages.filter(page => page.id !== pageId);

      return Object.assign({}, state, {
        pages: newPages
      })
    }

    default:
      return state
  }
}

export default reducers;
