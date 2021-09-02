import React, { Component } from 'react';

class About extends Component {

    // How to create functon in Class Component

    testFunction(){
        alert("test func call");
    }

    render() {
        return (
            <div>
                <button onClick={()=>{this.testFunction()}}>Click Me</button>
                <button onClick={this.testFunction.bind()}>Bind Me</button>
            </div>
            )
        }
}

export default About;