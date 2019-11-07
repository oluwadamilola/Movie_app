import React, { useState, useEffect } from "react";
import "./characters.scss";
import CardList from "../shared/CardList";
import useApiData from "../../state/useApiData";
import Search from "../shared/Search"

const Characters = () => {
const {data,loading} = useApiData()
  return (
    <>
   < Search />
   {loading && <p>Loading...</p>}
    <div className="characters">
       <CardList items={data} />
          </div>

    </>
  );
};

export default Characters;
