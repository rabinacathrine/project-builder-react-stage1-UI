import React, { Component } from 'react';
import '../HomeComponent/Home.css'
class Home extends Component {
    render() {
        return (
            <div className="container">
                <h1>Quiz App</h1>
                <button className="play">Play</button>
            </div>
        );
    }
}

export default Home;