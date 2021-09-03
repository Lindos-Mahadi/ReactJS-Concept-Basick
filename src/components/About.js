import React, { Component } from 'react';

class UncontrolledCom extends Component {

    constructor() {
        super();
        this.name = React.createRef();
        this.password = React.createRef();
    }


    submitHandle(event)
    {
        event.preventDefault();
        console.warn(this.name.current.value, this.password.current.value);
    }
    render() {
        return (
            <div>
                <h1>Uncontrolled Component</h1>
                <form onSubmit={(event)=>{this.submitHandle(event)}}>
                    <input type="text" placeholder= "Enter Name" ref={this.name} /><br/><br/>
                    <input type="password" placeholder= "Enter Password" ref={this.password} /><br/><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default UncontrolledCom;