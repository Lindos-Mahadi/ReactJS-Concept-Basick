import React, { Component } from 'react';

class About extends Component {
constructor(){
    super();
    this.state={
        show:true
    }
}

    render() {
        return (
            <div>
                {
                    this.state.show?
                        <h1>Hide and Show</h1>
                    :null
                }
                <button onClick={()=>{this.setState({show:false})}}>Update</button>
                <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle</button>
            </div>
            )
        }
}

export default About;