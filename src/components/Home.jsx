import React, { Component } from 'react'
import About from './About'

export default class Home extends Component {
    constructor()
    {
        super()
        this.state={
            toogle:true
    }
    }
    render() {
        return (
            <div>
                <h1>Component will Unmount</h1>
                {
                    this.state.toogle?
                    <About />
                    :null
                }
                <button onClick={()=>{this.setState({toogle:!this.state.toogle})}}>Delete</button>
            </div>
        )
    }
}
