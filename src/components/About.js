import React, { Component } from 'react';

class About extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.text.name} <br /> {this.props.data}</h1>
            </div>
            )
        }
}

export default About;