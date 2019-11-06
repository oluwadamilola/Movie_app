import React from "react";
import PropTypes from 'prop-types';
import "./character.scss";

 Character =(props)=> {
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

  Character.PropTypes={
    name: PropTypes.string,
    city: PropTypes.string,
    location: PropTypes.string,
    status: PropTypes.string,
    
  }

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
