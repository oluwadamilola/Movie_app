import React from 'react'
function Book(props)
{
    //handleClick(){console.log("you click me")}
        const {img,title, author} = props.info;
        return (
            <div>
            <article className="book">
            <img className="img" src={img}  width="150"alt="book"/>
                <h4>Title: {title}</h4>
                <h6>Author: {author}</h6>
                
            </article>
            </div>
        );
        
    }
export default Book;
