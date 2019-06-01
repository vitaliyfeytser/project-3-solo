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
        <Button
          className="NavBtns"
          // href="/login"
          variant="light"
          onClick={this.handleShow}
        >SIGN UP
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <div style={{ justifyContent: "space-between" }} >
              <Modal.Title>Welcome to the club!</Modal.Title>
            </div>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}


export default SignUpModal