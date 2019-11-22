import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../../api/api";
import EpisodesList from "./EpisodesList";
import Pagination from './Pagination';

const Episode = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setcurrentPage] = useState(1);
  const [episodesPerPage, setepisodesPerPage] = useState(5);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchEpisodes = async () => {
      setLoading(true);

      try {
        const response = await api.get("/episode");
        setEpisodes(response.data.results);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchEpisodes();
  }, []);

  //console.log(episodes);
  const lastEpisode = currentPage * episodesPerPage;
  const firstEpisode = lastEpisode - episodesPerPage;
  const currentEpisode = episodes.slice(
    firstEpisode,
    lastEpisode
  );

  const paginate = (pageNumbers) =>
    setcurrentPage(pageNumbers)
  

  if (loading) {
    return 'Loading';
  }

  return (
    <>
      <EpisodesList items={currentEpisode} />
      <Pagination episodesPerPage={episodesPerPage} total={episodes.length} paginate={paginate}/>
    </>
  );
};

export default Episode;
