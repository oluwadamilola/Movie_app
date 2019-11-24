import React from "react";
import PropTypes from 'prop-types';
import "./table.css"

const EpisodesList = ({ items }) => {


  return (
    <table className='episodeTable'>
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
        {  items.map( (item) => {
           return (
            <tr key={item.id}>
              <td>{ item.name }</td>
              <td>{item.air_date}</td>
              <td>{ item.created}</td>
              <td>{ item.episode }</td>
              <td>{item.url}</td>
             
              
            </tr>
          )
         }) }
      </tbody>
    </table>
  );
}

EpisodesList.propTypes ={
name: PropTypes.string,
air_date: PropTypes.string,
created: PropTypes.string,
episode: PropTypes.string,
url: PropTypes.string
}
export default EpisodesList;
