import React, { Component } from 'react';
import reactDOM from 'react-dom'
class About extends Component {
    render() {
        return (
            reactDOM.createPortal(
                <h1>Portal Component</h1>,
                document.getElementById('other-root')
            )
        );
    }
}

export default About;