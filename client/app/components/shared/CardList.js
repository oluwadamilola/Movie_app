import React from "react";
import { Link } from "react-router-dom";

const CardList = ({ items }) => {

  return  items.map(item => (
    <div key={item.id}>
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

      <h3>{item.name}</h3>
    </div>
  ));

 
}

export default CardList;
