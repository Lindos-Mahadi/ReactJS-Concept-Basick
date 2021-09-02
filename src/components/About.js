import React, { Component } from 'react';

class About extends Component {
    constructor()
    {
        super()
        this.state={
            list:[
                {name:'lindos', phone: '123', email:'lindos@gmail.com'},
                {name:'ala', phone: '124', email:'lindos@gmail.com'},
                {name:'kala', phone: '125', email:'lindos@gmail.com'},
                {name:'jala', phone: '126', email:'lindos@gmail.com'},
                {name:'mala', phone: '127', email:'lindos@gmail.com'}
            ]
        }
    }
    render() {
        return (
            <div>
                <h1 className="text-info">List with Map</h1>
                {
                    this.state.list.map((item)=>
                    <div>
                        <span className="lead">Name: {item.name}</span><p className="lead">Email: {item.email} <u>Phone: {item.phone}</u></p>
                    </div>
                    )
                }
                
            </div>
        );
    }
}

export default About;