import React, { useState, useEffect } from "react";
import "../../styles/characters.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const API = "https://rickandmortyapi.com/api/character";

const Characters = () => {
  const [data, setData] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(API);

      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      {data.results.map(item => (
        <div key={item.id} className="characterCard">
          <Link to={{ pathname: `/character/${item.id}` }}>
            <img src={item.image} alt="" className="characters-img" />
          </Link>

          <h1>{item.name}</h1>
        </div>
      ))}
    </>
  );
};
export default Characters;
