import React, { Component } from 'react';
import Enes from './content/enes.png'
import Song from './content/song_enes.mp3'
class Home extends Component{
    render () {
        return (
            <div className="App">
                <p>Artiste numéro 1 d'el bagnador et de la chancla</p>
                <img src={Enes} /><br />
                <audio controls src={Song}></audio>
            </div>
        )
    }}

    export default Home;