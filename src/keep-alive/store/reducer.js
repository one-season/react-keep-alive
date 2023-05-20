import * as actionTypes from "./constants";

function reducer(state, action) {
  const { type, payload } = action;
  const { keepAliveId, reactElement, nodes } = payload;

  switch (type) {
    case actionTypes.CREATING: {
      return {
        ...state,
        [keepAliveId]: {
          keepAliveId,
          reactElement,
          status: type,
          nodes: null
        }
      }
    }
    case actionTypes.CREATED: {
      return {
        ...state,
        [keepAliveId]: {
          ...state[keepAliveId],
          status: type,
          nodes
        }
      }
    }
    default: {
      return state;
    }
  }
};

export default reducer;