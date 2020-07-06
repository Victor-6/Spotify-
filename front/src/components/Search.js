import React, { Component } from 'react';

class Search extends Component{
    render () {
        return (
            <div className="App">
                <p>Ceci est la page de recherche</p>
                <input type="text" className="input" onChange={this.handleChange} placeholder="albums, artists, genres..." />
            </div>
        )
    }}

    export default Search;