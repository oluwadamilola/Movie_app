import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Search = props => {
  const [searchValue, setsearchValue] = useState("");
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

  const SearchForm = {
    display: "flex",
    justifyContent: "center",
    alignItems: "right",
    marginTop: "50px"
  };

  const searchInput = {
    width: "50%",
    padding: "15px"
  };
  const Button = styled.button`
    padding: 15px;
    background-color: transparent;
  `;
  return (
    <>
      <form onSubmit={submitSearch} style={SearchForm}>
        <input
          style={searchInput}
          className="searchInput"
          value={searchValue}
          onChange={handleSearchChanges}
          type="text"
        />
        <Button type="submit" placeholder="search">
          <FaSearch />
        </Button>
      </form>
    </>
  );
};

export default Search;
