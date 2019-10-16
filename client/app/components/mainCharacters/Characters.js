import React, { useState, useEffect } from "react";
import "./characters.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import api from '../../api/ApiConfig'

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
    <div className="characters">
      {data.results.map(item => (
        <div key={item.id} >
          <Link to={{ pathname: `/character/${item.id}` }}>
            <img src={item.image} alt=""  className="characters-img"/>
          </Link>
          <h3>{item.name}</h3>
          </div>
         
       
      ))}
      </div>
    </>
  );
};
export default Characters;
