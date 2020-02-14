import { useEffect, useState } from "react";
import api from "../api/api";
import axios from "axios";

const useSearchableAPI = ({ name }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState([]);

  let cancelRequest;

  function fetchData({ name }) {
    const CancelToken = axios.CancelToken;
    let searchQuery = "/character";

    if (name) {
      searchQuery = `${searchQuery}/?name=${name}`;
    }

    return api.get(searchQuery, {
      cancelToken: new CancelToken(cancellationToken => {
        cancelRequest = cancellationToken;
      })
    });
  }

  useEffect(() => {
    setLoading(true);

    fetchData({ name })
      .then(response => {
        setLoading(false);
        setData(response.data.results);
      })
      .catch(err => {
        setLoading(false);
        setError(err);
      });

    return () => {
      cancelRequest && cancelRequest();
    };
  }, [name]);

  return {
    error,
    loading,
    data
  };
};
export default useSearchableAPI;
