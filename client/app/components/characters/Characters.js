import React, { useState, useEffect } from "react";
import { AtomSpinner } from "react-epic-spinners";

import "./characters.scss";
import CardList from "../shared/CardList";
import useApiData from "../../state/useApiData"

const Characters = () => {
const {data,loading, error} = useApiData()

  return (
    <>
    <div className="characters">

            <CardList items={data} />
          </div>

    </>
  );
};

export default Characters;
