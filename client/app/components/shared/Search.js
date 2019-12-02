import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import api from "../../api/api";
import { FaSearch } from "react-icons/fa";

const Search = props => {
  const [searchValue, setsearchValue] = useState("");
  const [data, setData] = useState();
  const [error, setError] = useState();

  const handleSearchChanges = event => {
    setsearchValue(event.target.value);
  };

  const resetInput = () => {
    setsearchValue("");
  };

  const submitSearch = event => {
    event.preventDefault();

    props.onSearchSubmitted(searchValue);
    resetInput();
  };

const searchInput ={
  width: '50%',
  padding:'15px'
}
const Button = {
     padding: '15px',
    backgroundColor: 'transparent'
}

  return (
    <div>
      <form onSubmit={submitSearch} className="searchBox">
        <input
        style={searchInput}
          className="searchInput"
          value={searchValue}
          onChange={handleSearchChanges}
          type="text"
        />
        <button style={Button} type="submit" placeholder="search">
        <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
