import React, { Component } from 'react'
const API = 'https://rickandmortyapi.com/api/character';

 class Characters extends Component {
    state = {
        results: []
    }

    componentDidMount(){
        fetch(API)
        .then(res =>res.json())
        .then(data=>{
            this.setState({results:data.results})
            console.log(this.state.results)
        })
        .catch(console.log)
    }
    render() {
        return (
            <div>
                <h1>Characters</h1>
                {this.state.results.map((item)=>
                <div key={item.id}>
                <img src={item.image} alt=""/>
                <h2>Name: {item.name}</h2>
                <h4>Url: {item.url}</h4>
                <h3>Status: {item.status}</h3>
                </div>
              
            )}
            </div>
        )
    }
}

export default Characters;
