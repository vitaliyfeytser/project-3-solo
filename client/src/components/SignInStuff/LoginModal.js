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
    error: "null",
    readers: []
  };

  // }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  componentDidMount = () => {
    this.setState({ readers: this.props.readers });
    console.log("????????? - componentDidMount props:", this.props)
  }


  // viewThreePromoted = []
  // handleThreePromoted = () => {
  //   // take promotedBookMonthToDisplay state
  //   // filter through promotedBooks for this date
  //   // set seperate state view branch and pass as prop

  //   for (let i = 0; i < this.state.promotedBooks.length; i++) {
  //     this.state.promotedBooks[i].monthPromoted === this.state.promotedBookMonthToDisplay ? this.viewThreePromoted.push(this.state.promotedBooks[i]) : console.log("not promoted")
  //   }
  //   this.setState({
  //     displayThreePromoted: this.viewThreePromoted,
  //   });
  //   // Empty this array before next nav click
  //   this.viewThreePromoted = []
  // }

  handleCredential = (e) => {
    e.preventDefault();
    console.log("Login handleCredential", this.props)
    
    let email = this.state.email
    let password = this.state.password

    let name
    let dbEmail


    
    for (let i = 0; i < this.props.readers.length; i++) {
      console.log("--- forloop running ---")

      if (email === this.props.readers[i].email && password === this.props.readers[i].pass) {
        // write a func in App.js to set isLoggedIn to true and User name and email to state
        console.log("--- We found a MATCH!!! ---")
        name = this.props.readers[i].firstName + ' ' + this.props.readers[i].lastName
        dbEmail = this.props.readers[i].email
      }
    }
    this.props.handleLogin(name, dbEmail)
    console.log("Login handleCredential props:", this.props)

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
    console.log("!!! ------ handleCredential this.props: ", this.props)
    console.log("!!! ------ this.props.readers[0]: ", this.props.readers[0])
    // console.log("!!! ------ this.props.readers[0]: ", [this][props][readers][0])
    console.log("!!! ------ this.props.readers.length: ", this.props.readers.length)
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
                  onClick={this.handleCredential}
                >Submit
              </Button>
                OR
              <Button
                  style={{ marginLeft: "1em" }}
                  variant="outline-secondary"
                  size="sm"
                  onSubmit={this.handleCredential}
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