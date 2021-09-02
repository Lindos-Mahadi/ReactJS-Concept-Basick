import React, { Component } from 'react';

class About extends Component {

    // Life Cycle
    constructor(){
        super()
        this.state = {
            active: null,
            who: null
        }
        console.warn("constructor")
    }
    componentDidUpdate()
    {
        // this.setState({data: "updated"})
        console.warn("componentDidMount")
        if(this.state.who==null)
        {
            this.setState({who:"Hello Lindos !"})
        }
    }
    render() {
        return (
            <div>
                <h1>componentDidUpdate{this.state.who}</h1>
                <button onClick={()=>{this.setState({active:"Yes"})}}>componentDidUpdate()</button>
            </div>
            )
        }
}

export default About;