import React from "react";
import PropTypes from "prop-types";
import "./character.scss";

const Character = props => {
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
        
          <p>Status: {status}</p>
          <p>Species: {species}</p>
          <p>Gender: {gender}</p>
          <p>Location: {location.name}</p>
          <p>Created: {created}</p>
        
        <span>Location Url: {location.url}</span>
      </div>
    </>
  );
};
Character.propTypes = {
  name: PropTypes.string,
  city: PropTypes.string,
  location: PropTypes.string,
  status: PropTypes.string,
  gender: PropTypes.string,
  created: PropTypes.string
};
Character.defaultProps = {
  name: 'Rick Smith',
  status: 'apve',
  gender: 'apen'
};
export default Character;
