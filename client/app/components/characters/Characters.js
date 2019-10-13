import React, { Component } from "react";
import "../../styles/characters.scss";
import { Router, Link } from "react-router-dom";

const API = "https://rickandmortyapi.com/api/character";

class Characters extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        this.setState({ results: data.results });
        // console.log(this.state.results);
      })
      .catch(console.error);
  }

  render() {
    const characters = this.state.results.map(item => (
      <React.Fragment key={item.id}>
        <Link to={{
          pathname: `/character/${item.id}`,
          state: {
            ...item
          }
        }}>
          <img src={item.image} alt="" className="characters-img" />
          <h2>Name: {item.name}</h2>
        </Link>
        {/* <div>
      <h2>Name: {item.name}</h2>
        <p>Status: {item.status}</p>
      </div> */}
      </React.Fragment>
    ));

    return <div className="characters">{characters}</div>;
  }
}

export default Characters;
