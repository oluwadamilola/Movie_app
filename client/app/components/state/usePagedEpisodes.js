import React, { useEffect, useCallback, useReducer } from "react";
import api from "../../api/api";

const initialState = {
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
    case "episodes/loading":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "episodes/fetched": {
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
    case "episodes/error":
      return {
        ...state,
        loading: false,
        error: action.error.message
      };
    case "episodes/next": {
      const { hasNext, page } = state;
      if (!hasNext) {
        return state;
      }

      return {
        ...state,
        page: page + 1
      };
    }
    case "episodes/previous": {
      const { hasPrevious, page } = state;

      if (!hasPrevious) {
        return state;
      }

      return {
        ...state,
        page: page - 1
      };
    }
    case "episodes/goto-page": {
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

const usePagedEpisodes = () => {
  const [state, dispatch] = useReducer(episodeReducer, initialState);
  const { page } = state;
  useEffect(() => {
    const makeRequest = async () => {
      dispatch({ type: "episodes/loading" });
      try {
        const response = await api.get(`/episode?page=${page}`);
        dispatch({ type: "episodes/fetched", payload: response.data });
      } catch (error) {
        dispatch({ type: "episodes/error", error });
      }
    };

    makeRequest();
  }, [page]);

  const { hasNext, hasPrevious, loading, error, episodes, pages } = state;

  const next = useCallback(() => {
    dispatch({ type: "episodes/next" });
  }, []);

  const previous = useCallback(() => {
    dispatch({ type: "episodes/previous" });
  }, []);

  const gotoPage = page => {
    const payload = Number(page);
    if (Number.isNaN(payload)) {
      return;
    }

    dispatch({ type: "episodes/goto-page", payload });
  };

  return {
    hasNext,
    next,
    hasPrevious,
    previous,
    pages,
    gotoPage,
    loading,
    error,
    episodes
  };
};
export default usePagedEpisodes;
