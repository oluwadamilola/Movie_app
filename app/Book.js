import React, { Component } from 'react'
function Book(props)
{
      
        const {img,title, author} = props.info;
        return (
            <article className="book">
            <img className="img" src={img}  width="150"alt="book"/>
                <h4>Title: {title}</h4>
                <h6>Author: {author}</h6>
            </article>
        )
    }
export default Book;
