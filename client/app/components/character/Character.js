import React from "react";
import PropTypes from "prop-types";
import { CharacterInfo } from "../../styles/page";

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
      <CharacterInfo>
        <img src={image} alt={city} />
        <h2>Name: {name}</h2>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Location: {location.name}</p>
        <p>Created: {created}</p>
        <span>Location Url: {location.url}</span>
      </CharacterInfo>
    </>
  );
};
Character.propTypes = {
  name: PropTypes.string,
  city: PropTypes.string,
  status: PropTypes.string,
  gender: PropTypes.string,
  created: PropTypes.string,
  location: PropTypes.object
};
Character.defaultProps = {
  location: "Earth",
  status: "alive",
  species: "Human",
  gender: "apen"
};
export default Character;
