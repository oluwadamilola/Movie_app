import React, { useState, useEffect } from "react";
import "./characters.scss";
import { Link } from "react-router-dom";
import API from "../../api/ApiConfig";

const Characters = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(API, { signal })
      .then(response => response.json())
      .then(data => {
        setData(data.results);
      });

    return () => controller.abort();
  }, []);
  console.log(data)
  return (
    <>
      <div className="characters">
        {data.map(item => (
          <div key={item.id}>
            <Link
              to={{
                pathname: `/character/${item.id}`,
                state: {
                  ...item
                }
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="characters-img"
              />
            </Link>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};
export default Characters;
