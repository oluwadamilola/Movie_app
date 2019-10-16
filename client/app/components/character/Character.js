import React from "react";

const Character =()=>{
  
    const {
      id,
      city,
      species,
      status,
      name,
      image
    } = this.props.location.state;
    

    return (
      <>
        <p>This is a page for a single character</p>
        <p>The selected character is {this.props.match.params.characterID}</p>
        <img src={image} alt={city} />
        <h2>Name:{name}</h2>
        <p>States:{status}</p>
        <p>Species:{species}</p>
      </>
    );
  }

