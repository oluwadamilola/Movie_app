import React, { Component } from 'react';
import Book from './Book';
import booksData from './BookData';
export default class Booklist extends Component {
constructor(props){
    super(props)
this.state = {
    books:booksData  
}
}


 
    render() {
        
    //const books = this.state.books.map((item)=>item.book);
    //filter
    //foreEach
    //map
    //reduce
        return (
            <section>
                <h3>This is our Booklist</h3>
                {this.state.books.map((item,index) => <Book key={index.index} info={item}/>
                )}
             
            </section>
        )
    }
}
