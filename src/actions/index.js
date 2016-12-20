import Chance from "chance";

const chance = new Chance();

export const createNewPage = () => {
  const id = chance.string();

  return {
    type: 'CREATE_PAGE',
    page: {
      id: chance.string(),
      name: "New_Page:" + id.substring(0, 2),
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

export const toggleEditMode = () => {
  return {
    type: 'TOGGLE_EDIT_MODE'
  }
}

export const pageTextChanged = (pageId, e) => {
  const txt = e.target.value;
  
  return {
    type: 'PAGE_TEXT_CHANGED',
    id: pageId,
    text: txt
  }
}