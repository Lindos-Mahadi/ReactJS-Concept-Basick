import React, { Component } from 'react'

export default class About extends Component {
    constructor() {
        super();
        this.userRef = React.createRef();
    }

    editVal()
    {
        console.warn(this.userRef);
        this.userRef.current.focus();
        this.userRef.current.value="1000";
    }
    render() {
        return (
            <div>
                <h1>I am Ref In React</h1>
                <input ref={this.userRef} type="text" name="user" />
                <button onClick={()=>this.editVal()}>Click Me</button>
            </div>
        )
    }
}
