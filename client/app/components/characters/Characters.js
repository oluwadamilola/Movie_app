import React, { useState, useEffect } from "react";
import CardList from "../shared/CardList";
import useSearchableAPI from "../../hooks/useSearchableAPI"
import Search from "../shared/Search";
import {Spinner, CharacterImage} from '../../styles/page'


const Characters = () => {
  const [search, setSearch] = useState("");
  const { data, loading } = useSearchableAPI({ name: search });

  const onSearchChanged = searchTerm => {
    setSearch(searchTerm);
  };

  return (
    <>
      <Search onSearchSubmitted={onSearchChanged} />
      {loading && <Spinner>Loading...</Spinner>}
      <CharacterImage>
        <CardList items={data} />
      </CharacterImage>
    </>
  );
};

export default Characters;
