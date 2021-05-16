const UPDATE_META = `UPDATE_META`;

export const metaReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_META:
      return {
        ...state,
        meta: {
          data: action.payload,
          initialLoad: false,
        },
      };
    default:
      return state;
  }
};
