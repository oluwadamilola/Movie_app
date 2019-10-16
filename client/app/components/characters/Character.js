import React from "react";
import '../../styles/app.scss'


const Character =() => {
    const {
      id,
      city,
      species,
      status,
      name,
      image
    } = this.location.state;


    return (
      <>
      <div className="character-info">
        <img src={image} alt={city} />
        <h2>Name:{name}</h2>
        <p>States:{status}</p>
        <p>Species:{species}</p>
        </div>
      </>
    );
  }
export default Character;
