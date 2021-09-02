import React, { Component } from 'react';

class About extends Component {
    constructor()
    {
        super()
        this.state={
            name: "",
            password: "",
            nameError: "",
            passwordError: ""
        }
    }
    valid(){
        if(!this.state.name.includes("@") && this.state.password.length<5){
            this.setState({nameError: "Invalid Name", passwordError: "Password length should be more than 5"})
        }
        if(!this.state.name.includes("@")){
            this.setState({nameError: "Invalid Name"})
        }
        if(this.state.password.length<5){
            this.setState({passwordError: "Password length should be more than 5"})
        }
        else{
            return true
        }
    }
    submit(){
        this.setState(
            {nameError: "", passwordError: ""}
            )
        // console.warn(this.state)
        if(this.valid()){
            alert("Form has been submited.")
        }
    }
    render() {
        return (
            <div>
                <h1>Form Handling use state</h1>
                <input 
                type="text" 
                name="name"
                onChange={(e)=>{this.setState({name: e.target.value})}}
                />
                <p style={{color: "red"}}>{this.state.nameError}</p>
                <br />
                <br />
                <input 
                type="password" 
                name="password"
                onChange={(e)=>{this.setState({password: e.target.value})}}
                />
                <p style={{color: "red"}}>{this.state.passwordError}</p>
                <br />
                <br />
                <button onClick={()=>this.submit()}>Submit</button>
            </div>
        );
    }
}

export default About;