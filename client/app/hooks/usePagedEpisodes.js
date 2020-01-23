import React,{ useEffect, useCallback, useReducer } from "react";
import api from "../api/api";
import episodeReducer, { initialState } from "../reducer/episodeReducer";

const usePagedEpisodes = () => {
  const [state, dispatch] = useReducer(episodeReducer, initialState);
  const { page } = state;

  useEffect(() => {
    const makeRequest = async () => {
      dispatch({ type: "EPISODE_LOADING" });
      try {
        const response = await api.get(`/episode?page=${page}`);
        dispatch({ type: "EPISODES_FETCHED", payload: response.data });
      } catch (error) {
        dispatch({ type: "EPISODES_ERROR", error });
      }
    };

    makeRequest();
  }, [page]);

  const { hasNext, hasPrevious, loading, error, episodes, pages } = state;

  const next = useCallback(() => {
    dispatch({ type: "EPISODES_NEXT" });
  }, []);

  const previous = useCallback(() => {
    dispatch({ type: "EPISODES_PREVIOUS" });
  }, []);

  const gotoPage = page => {
    const payload = Number(page);
    if (Number.isNaN(payload)) {
      return;
    }

    dispatch({ type: "PAGEGOTO/goto-page", payload });
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
