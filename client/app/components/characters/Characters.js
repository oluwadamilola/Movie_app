import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./characters.scss";
import CardList from "../shared/CardList";
import useApiData, { useSearchableAPI } from "../../state/useApiData";
import Search from "../shared/Search";
import styled from "styled-components";
import Header from "../shared/Header"

const Characters = () => {
  const [search, setSearch] = useState("");
  const { data, loading } = useSearchableAPI({ name: search });

  const onSearchChanged = searchTerm => {
    setSearch(searchTerm);
  };

  return (
    <>
      <Search onSearchSubmitted={onSearchChanged} />
      {loading && <h3>Loading...</h3>}
      <div className="characters">
        <CardList items={data} />
      </div>
    </>
  );
};

export default Characters;
