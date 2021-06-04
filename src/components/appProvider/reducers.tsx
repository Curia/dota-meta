const UPDATE_META = `UPDATE_META`;

export const metaReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_META:
      if (action.payload) {
        return {
          ...state,
          data: action.payload.heroStats,
          initialLoad: true,
        };
      }
      return state;
    default:
      return state;
  }
};
