import React from 'react';
import './Main.css';
import arrow from "../../images/arrow-down.png";

const Main = () => {
    return (
        <div className="main" id="slide1">
            <img src="https://cdn.discordapp.com/attachments/798763577850462218/798773691994341408/pplogo.png" alt="noobs"/>
            <h1>What's up,<br/><span>Noob</span> Coders?</h1>

            <img onClick={function(){scroll()}} src={arrow} alt="Arrow" className="arrow1"/>
        </div>
    )
}

const scroll = () => {
    document.querySelector('#slide2').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

export default Main;
