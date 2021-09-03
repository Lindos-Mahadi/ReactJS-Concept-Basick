import React, { Component } from 'react'
import { Button, Modal} from 'react-bootstrap';
export default class About extends Component {
    constructor(){
        super();
        this.state={
            show:false
        }
    }
    handleShow(){
        this.setState({show:!this.state.show})
    }
    render() {
        return (
            <div>
                <Button onClick={()=>this.handleShow()}>Click Here</Button>
                <Modal show={this.state.show} onHide={()=>this.handleShow()}>
                    <Modal.Header closeButton>Modal Header</Modal.Header>
                    <Modal.Body>Hello Lindos</Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>this.handleShow()}>Close</Button>
                        <Button onClick={()=>this.handleShow()}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
