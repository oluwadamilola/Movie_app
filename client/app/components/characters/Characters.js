import React, { useState, useEffect } from "react";
import { AtomSpinner } from "react-epic-spinners";

import "./characters.scss";
import api from "../../api/api";
import CardLinks from '../shared/CardLinks';

const Characters = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    api
      .get()
      .then(response => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch(console.error);
  }, []);


  if (loading) {
    return (
      <div className="data-loading">
        <AtomSpinner color="blue" />;
        <p>Loading</p>
      </div>
    );
  }

  return (
    <>
      <div className="characters">
        <CardLinks items={data} />
      </div>
    </>
  );
};

export default Characters;
