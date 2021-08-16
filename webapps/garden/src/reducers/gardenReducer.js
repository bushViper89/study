import parseFromString from "react-native-xml2js";

import { SET_GARDEN_LIST } from "../actions/gardenActions";

const initState = {
  items: [],
  totalCount: null
}

export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_GARDEN_LIST: {
      let entities = null;

      parseFromString.parseString(payload, async (err, result) => {
        entities = JSON.parse(JSON.stringify(result)).response.body[0].items[0]
      });

      const items = entities.item;
      const totalCount = Number(entities.totalCount[0]);

      return { ...state, items, totalCount }
    }
    default:
      return state;
  }
}