import React from "react";
import "./pagination.css";

const Pagination = ({ episodesPerPage, total, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / episodesPerPage); i++) {
    pageNumbers.push(i);
  }

  const numbers = pageNumbers.map(number => {
    return <a key={number} onClick={()=> paginate(number)}>{number}</a>;
  });

  return <div className="pagination">{numbers}</div>;
};

export default Pagination;
