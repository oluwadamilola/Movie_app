import React from "react";
import "./character.scss";

function Character(props) {
  const {
    city,
    species,
    status,
    name,
    image,
    gender,
    location,
    created
  } = props.location.state;

  return ( 
    <>
    <div className="character-info">
      <img src={image} alt={city} />
      <h2>Name: {name}</h2>
      <ul>
        <li>Status: {status}</li>
        <li>Species: {species}</li>
        <li>Gender: {gender}</li>
        <li>Location: {location.name}</li>
        <li>Created: {created}</li>
      </ul>
      <span>Location Url: {location.url}</span>
    </div>
    </>
  );
}

export default Character;