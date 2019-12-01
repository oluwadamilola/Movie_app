import React from "react";
import { Link } from "react-router-dom";

const CardList = ({ items }) => {
  const cardStyle = {
    border: "1px solid #0003",
    width: "fit-content",
    marginBottom: "5px",
    borderRadius: "4px",
    margin: " 20px",
    boxShadow: "0 5px 5px 5px #0003",
    overflow: "hidden",
    marginRight: " margin-right: 3%"
  };

  const hstyle = {
    margin: "5px"
  };

  return items.map(item => (
    <div style={cardStyle} key={item.id}>
      <Link
        to={{
          pathname: `/character/${item.id}`,
          state: {
            ...item
          }
        }}
      >
        <img src={item.image} alt={item.name} className="characters-img" />
      </Link>

      <h3 style={hstyle}>{item.name}</h3>
    </div>
  ));
};

export default CardList;
