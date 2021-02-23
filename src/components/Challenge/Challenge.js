import React from 'react';
import './Challenge.css';
import arrow from "../../images/arrow-up.png";

import writeData from "../../firebase/write/firebaseWrite";

const Challenge= () => {
    return (
        <div className="challenge" id="slide3">
            <h1>Task of the day</h1>
            <h2>Build a website with the topic: <span>Samuel Miller</span></h2>
            <h2>There are <span>2</span> rules:</h2>
            <h2>1) Has to be hosted online (GitHub Pages, Heroku, Firebase, etc.)</h2>
            <h2>2) You have to include the hosting link in the README file</h2>
        
            <input placeholder="Link to GitHub Repo" id="linkInput"/><br/>
            <button id="btnSubmit" onClick={function(){ validate() }}>Submit</button>

            <img onClick={function(){scroll()}} src={arrow} alt="Arrow" className="arrow3"/>
        </div>
    )
}

const scroll = () => {
    document.querySelector('#slide1').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

const validate = async () => {
    let input = document.getElementById("linkInput");
    let link = input.value.toLowerCase();

    if(link.includes("github.com")){
        const response = await writeData(link);
        if(response){
            alert("Your link was posted! Thank you, nerd")
        }
    }
    else{
        alert("You ain't trolling me this time, you little b*tch. Include a valid GitHub link");
    }

    input.value = "";
}

export default Challenge;
