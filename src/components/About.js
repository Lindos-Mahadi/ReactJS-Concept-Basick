import React, { Component } from 'react';

class About extends Component {
    constructor() {
    super()
    //STATE
    this.state = {
      pigeons: []
    }
  }
  componentDidMount(){
      console.warn("Called Life")
  }
  
    render() {
        return (
            <div>
                <h1>Hello I am class component</h1>
                <p>Look at all the pigeons spotted today!</p>
            </div>
        );
    }
}

export default About;