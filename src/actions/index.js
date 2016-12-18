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