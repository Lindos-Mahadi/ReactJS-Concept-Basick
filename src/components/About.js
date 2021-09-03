import React, { Component } from 'react'

export default function About(prop)
    
 {
    const h1={
        color: "green",
        fontSize: "36px"
    }
    const h2={
        color: "red",
        fontSize: "36px"
    }
    return (
        <div>
            <h1>React Style</h1>
            <h2 style={prop.data=='aply'? h1:h2}>React Style</h2>
        </div>
    )
}
