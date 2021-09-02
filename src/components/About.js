import React, { Component } from 'react';

class About extends Component {
    componentWillUnmount()
    {
        alert("About has been Deleted!")
    }
    render() {
        return (
            <div>
                <ul>
                    <li>Name : Lindos</li>
                    <li>Email : lindos@gmail.com</li>
                    <li>Contact : 65321654</li>
                </ul>
            </div>
        );
    }
}

export default About;