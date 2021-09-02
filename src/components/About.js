import React, { Component } from 'react';

class About extends Component {

    // Life Cycle
    constructor(){
        super()
        console.warn("constructor")
    }
    componentDidMount()
    {
        console.warn("componentDidMount")
    }
    render() {
        console.warn("render")
        return (
            <div>
            </div>
            )
        }
}

export default About;