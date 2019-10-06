import React from 'react'
import books from './BookData';

function Book(){
    return (
        <div>
           <div className="booklist">
            {books.map(function(item){
                return(
                    <div key={item.id}>
                        <img src={item.img} alt=""/>
                        <h2>{item.title}</h2>
                        <span>{item.author}</span>
                    </div>
                )
            })}
        </div> 
        </div>
    )
}

export default Book

