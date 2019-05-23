import React, { Component } from "react"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class SignUpModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <div style={{ justifyContent: "space-between" }} >
                            <Modal.Title>Welcome, please enter the following information:</Modal.Title>
                            <Button variant="outline-primary" size="sm" onClick={this.handleClose}>
                                Sign up!
                            </Button>
                        </div>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                                Close
                        </Button>
                            <Button variant="primary" onClick={this.handleClose}>
                                Sign up!
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}


export default SignUpModal