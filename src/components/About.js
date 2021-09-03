import React, { Component } from 'react';

class ControlledCom extends Component {

    constructor() {
        super();
        this.state={
            name: "",
            password: ""
        }
    }
    submit()
    {
        console.warn(this.state);
    }
    render() {
        return (
            <div>
                <h1>Controlled Component</h1>
                <input type="text" placeholder= "Enter Name" 
                onChange={(event)=>{this.setState({name: event.target.value})}} /><br/><br/>
                <input type="password" placeholder= "Enter Password" 
                onChange ={(event)=>{this.setState({name: event.target.value})}} /><br/><br/>
                <button onClick={()=>this.submit()}>Submit</button>
            </div>
        );
    }
}

export default ControlledCom;