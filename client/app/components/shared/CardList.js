import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

const CardStyle = styled.div `
    border: 1px solid #0003;
    width: fit-content;
    margin-bottom: 5px;
    border-radius: 4px;
    margin: 20px;
    box-shadow: 0 5px 5px 5px #0003;
    overflow: hidden;
    margin-right: 3%
  
`
const CardList = ({ items }) => {
  return items.map(item => (
    <CardStyle key={item.id}>
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
    </CardStyle>
  ));
};

export default CardList;
