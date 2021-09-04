import React, { Component } from 'react';
import PropTypes from "prop-types"
import { propTypes } from 'react-bootstrap/esm/Image';
class About extends Component {

    render() {
        return (
            <div>
                <h1>About Component Upload File</h1>
                <h2>{this.props.age}</h2>
            </div>
        );
    }
}
About.propTypes={
    age:PropTypes.number
}
export default About;