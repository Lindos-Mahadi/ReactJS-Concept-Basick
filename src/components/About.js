import React, { Component } from 'react';

class About extends Component {

    // Life Cycle
    constructor(){
        super()
        this.state = {
            data:null
        }
        console.warn("constructor")
    }
    componentDidMount()
    {
        this.setState({data: "updated"})
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