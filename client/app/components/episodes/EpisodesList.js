import React from "react";
import PropTypes from "prop-types";
import "./table.css";
import usePagedEpisodes from "../../hooks/usePagedEpisodes";
import { StyledButton} from '../../styles/style'

const EpisodesList = () => {
  const { episodes, previous, next } = usePagedEpisodes();

  
  return (
    <div>
      <table className="episodeTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Air Date</th>
            <th>Created</th>
            <th>Episode</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {episodes.map(item => {
            const { id, name, air_date, created, episode, url } = item;
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{air_date}</td>
                <td>{created}</td>
                <td>{episode}</td>
                <td>{url}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <StyledButton onClick={previous}>Prev</StyledButton>
      <StyledButton onClick={next}>Next</StyledButton>
    </div>
  );
};

EpisodesList.propTypes = {
  name: PropTypes.string,
  air_date: PropTypes.string,
  created: PropTypes.string,
  episode: PropTypes.string,
  url: PropTypes.string
};

export default EpisodesList;
