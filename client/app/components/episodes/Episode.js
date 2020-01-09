import React, { useState, useEffect, useReducer } from "react";
import EpisodesList from "./EpisodesList";
import usePagedEpisodes from "../state/usePagedEpisodes";


const Episode =()=>{
const {previous,next} = usePagedEpisodes()
return(
    <>
  <EpisodesList/>
  
  </>
  )
}

export default Episode;
