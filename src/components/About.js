import React, { Component } from 'react';

class About extends Component {
constructor(){
    super();
    this.state={
        name : "lindos",
        email : "lindos@gmail.com",
        count : 0
    }
}
updateState(){
    this.setState({
        name: "mahadi",
        count: this.state.count+1
    })
}
    render() {
        return (
            <div>
                <h1>{this.props.text.name} <br /> {this.props.data}</h1>
                <h1>{this.state.name}</h1>
                <h1>{this.state.email} </h1>
                <h1>{this.state.count} </h1>
                <button onClick={()=>{this.updateState()}}>Update</button>
            </div>
            )
        }
}

export default About;