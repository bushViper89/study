export const SET_GARDEN_LIST = 'garden/SET_GARDEN_LIST';

export function setGardenList(garden) {  
  return {
    type: SET_GARDEN_LIST,
    payload: garden,
  };
}