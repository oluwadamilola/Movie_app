import React from "react";
import "./character.scss";

function Character(props) {
    const {
      id,
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
        <span>Location Url: {location.url}</span>
        </ul>
        </div>
      </>
    );
  }

export default Character;