import React, {useState} from 'react'
import About from './About';

function Home() {

    // How to create functon in Functional Component
    function tesFun()
    {
        alert("Test Func Call")
    }

    //Echma Script function
    const toggler = () =>{
       alert("Test Func Call")
    }

    return (
        <React.Fragment>
            <h1>Home</h1>
            <button onClick={tesFun}>Home Button Click</button>
            <button onClick={toggler}>toggler Button Click</button>
        </React.Fragment>
    )
}

export default Home
