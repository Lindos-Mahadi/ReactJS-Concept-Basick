import React from 'react'

function About(props) {
    const red=()=>{
        alert("red function called.");
    }
    return (
        <div>
            <h1 onClick={red}>{props.text}</h1>
        </div>
    )
}

export default About
