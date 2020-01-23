
export const initialState = {
  count: 0,
  pages: 0,
  page: 1,
  loading: false,
  error: false,
  hasNext: false,
  hasPrevious: false,
  episodes: []
};

function episodeReducer(state = initialState, action) {
  switch (action.type) {
    case "EPISODE_LOADING":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "EPISODES_FETCHED": {
      const { info, results } = action.payload;
      const hasNext = Boolean(info.next);
      const hasPrevious = Boolean(info.prev);

      return {
        ...state,
        hasNext,
        hasPrevious,
        loading: false,
        error: null,
        count: info.count,
        pages: info.pages,
        episodes: results
      };
    }
    case "EPISODES_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error.message
      };
    case "EPISODES_NEXT": {
      const { hasNext, page } = state;
      if (!hasNext) {
        return state;
      }

      return {
        ...state,
        page: page + 1
      };
    }
    case "EPISODES_PREVIOUS": {
      const { hasPrevious, page } = state;

      if (!hasPrevious) {
        return state;
      }

      return {
        ...state,
        page: page - 1
      };
    }
    case "EPISODES_PAGEGOTO": {
      const pageToGo = action.payload;
      const { pages } = state;

      if (pageToGo > pages) {
        return state;
      }

      return {
        ...state,
        page: pageToGo
      };
    }
    default:
      throw new Error("Use one of the defined states");
  }
}
export default episodeReducer;
