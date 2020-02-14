import React from "react";
import PropTypes from "prop-types";
import usePagedEpisodes from "../../hooks/usePagedEpisodes";
import { StyledButton,Buttoncontainer,Table, Td, Tr, Th} from '../../styles/style'

const EpisodesList = () => {
  const { episodes, previous, next } = usePagedEpisodes();

  
  return (
    <div>
      <Table className="episodeTable">
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Air Date</Th>
            <Th>Created</Th>
            <Th>Episode</Th>
            <Th>Url</Th>
          </Tr>
        </thead>
        <tbody>
          {episodes.map(item => {
            const { id, name, air_date, created, episode, url } = item;
            return (
              <tr key={id}>
                <Td>{name}</Td>
                <Td>{air_date}</Td>
                <Td>{created}</Td>
                <Td>{episode}</Td>
                <Td>{url}</Td>
              </tr>
            );
          })}
        </tbody>
      </Table> 
      <Buttoncontainer>
      <StyledButton onClick={previous}>Prev</StyledButton>
      <StyledButton onClick={next}>Next</StyledButton>
      </Buttoncontainer>
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
