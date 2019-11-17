import React from "react";

const EpisodesList = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
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
            <td>{item.id}</td>
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
export default EpisodesList;
