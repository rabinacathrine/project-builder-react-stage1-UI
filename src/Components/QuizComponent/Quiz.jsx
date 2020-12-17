import React, { Component } from 'react';
import '../QuizComponent/Quiz.css'
class Quiz extends Component {
    render() {
        return (
            <div className="container">
                <div className="in">
                    <h1>Question</h1>
                    <p>4 of 15</p>
                    <p>Which is the only mammal that cant jump?</p>
                    <div  id="answer">
                        <div className="frow">
                    <button>1</button>
                    <button>2</button>
                    </div>
                    <div className="srow">
                    <button>3</button>
                    <button>4</button>
                    </div>
                    </div>
                </div>
                <div>
                    <button id="blue">Previous</button>
                    <button id="green">next</button>
                    <button id="red">Quit</button>
                </div>
                
            </div>
        );
    }
}

export default Quiz;