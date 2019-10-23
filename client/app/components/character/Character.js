import React from "react";
import "./characters.scss";

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
        <p>The selected character is {props.match.params.characterID}</p>
        <img src={image} alt={city} />
        <h2>Name: {name}</h2>
        <p>States: {status}</p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Location: {location.name}</p>
        <span>Location: {location.url}</span>
        <p>Created: {created}</p>
        </div>
      </>
    );
  }

export default Character;