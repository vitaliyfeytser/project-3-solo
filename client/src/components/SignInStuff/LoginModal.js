import React, { Component } from "react"

import API from "../../utils/API";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';



class LoginModal extends Component {
  // constructor(props, context) {
  //   super(props, context);

  //   this.handleShow = this.handleShow.bind(this);
  //   this.handleClose = this.handleClose.bind(this);

  state = {
    show: false,
    message: "Welcome back!",
    email: "email",
    password: "password",
    error: "null"
  };

  // }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  componentDidMount = () => {
    // const token = localStorage.getItem("current_user_token");

    // if (token) {
    //   API.validateToken(token)
    //     .then(() => this.props.history.push("/Dashboard"))
    //     .catch(() => localStorage.removeItem("current_user_token"));
    // }
  }

  onSubmit = e => {
    e.preventDefault();

    let email = [this.state.email ]
    let password = [this.state.password]
    
    for (let i = 0; i < this.props.readers.length; i++) {
      if (email === this.props.readers[i].email && password === this.props.readers[i].password) {
        // write a func in App.js to set isLoggedIn to true and User name and email to state
      }
    }
    // console.log("resData", resData)

    // this.setState({
    //   promotedBooks: resData,
    // });
    // API.login(this.state)
    //   .then(res => {
    //     localStorage.setItem("current_user_token", res.data.token);
    //     this.props.update(res.data);
    //   })
    //   .then(() => this.props.history.push("/Dashboard"))
    //   .catch(err => console.log(err));
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <>
        <Button
          className="NavBtns"
          // href="/login"
          variant="light"
          onClick={this.handleShow}
        >LOG IN
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }} >
              <Modal.Title>{this.state.message}</Modal.Title>
              {/* <Modal.Title>New to the club?</Modal.Title>
              <Button
                style={{ float: "right" }}
                variant="outline-primary"
                size="sm"
                onClick={this.handleClose}
              >
                Sign up!
            </Button> */}
            </div>
          </Modal.Header>
          <Modal.Body>

            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={this.onChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.onChange}
                />
              </Form.Group>

              <Form.Text className="text-muted">
                State:
                </Form.Text>
              <Form.Text className="text-muted">
                {this.state.show}
              </Form.Text>
              <Form.Text className="text-muted">
                {this.state.email}
              </Form.Text>
              <Form.Text className="text-muted">
                {this.state.password}
              </Form.Text>
              <Form.Text className="text-muted">
                {this.state.error}
              </Form.Text>
              <Form.Text>
                <Button
                  style={{ marginRight: "1em" }}
                  variant="secondary"
                  type="submit"
                  size="sm"
                  onChange={this.onChange}
                >Submit
              </Button>
                OR
              <Button
                  style={{ marginLeft: "1em" }}
                  variant="outline-secondary"
                  size="sm"
                  onSubmit={this.onSubmit}
                >
                  Sign up!
            </Button>
              </Form.Text>
            </Form>

          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
        </Modal>
      </>
    );
  }
}


export default LoginModal