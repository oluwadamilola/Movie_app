import React, { useState, useEffect } from "react";
import { AtomSpinner } from "react-epic-spinners";

import "./characters.scss";
import api from "../../api/api";
import CardList from "../shared/CardList";
import useApiData from "../shared/useApiData"

const Characters = () => {
const {data,loading, error} = useApiData()

  return (
    <>
    <div className="characters">
    { loading && <p>loading...</p> }
            <CardList items={data} />
          </div>

    </>
  );
};

export default Characters;
