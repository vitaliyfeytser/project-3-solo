import React, { Component } from "react"

import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button';


class JoinClubForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        isFriendly: false,
        gender: "",
        favColor: "blue"
    }

    handleChange = (event) => {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    // Take in props in the render function or do an API call to the db for filling out these form options (props is more react-y)

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>

                <div className="jumbotron jumbotron-details">
                    <h1 className="display-3">Join us!</h1>
                    <p className="lead">Choose club details:</p>
                    <div className="accordion" id="accordion">
                        <div className="card">

                            <div className="card-body">
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label className="joinLabel">Locations</Form.Label>
                                    <Form.Control as="select">
                                        <option>-- Please Select One --</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>



                                <Form.Group controlId="exampleForm.ControlSelect2">
                                    <Form.Label className="joinLabel">Meetup Times</Form.Label>
                                    <Form.Control as="select" multiple>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>

                                <ListGroup>
                                    <Form.Label className="joinLabel">Current Members</Form.Label>
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                </ListGroup>

                                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <Button
                                        style={{ marginTop: "1em", alignSelf: "right" }}
                                        variant="outline-light"
                                        size="sm"
                                        onClick={this.handleClose}
                                    >Join!
                                    </Button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                {/* <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.firstName}
                        name="firstName"
                        placeholder="First Name"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        name="lastName"
                        placeholder="Last Name"
                        onChange={this.handleChange}
                    />

                    <textarea
                        value={"Some default value"}
                        onChange={this.handleChange}
                    />

                    <br />

                    <label>
                        <input
                            type="checkbox"
                            name="isFriendly"
                            checked={this.state.isFriendly}
                            onChange={this.handleChange}
                        /> Is friendly?
                </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> Male
                </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> Female
                </label>

                    <br />

                    <label>Favorite Color:</label>
                    <select
                        value={this.state.favColor}
                        onChange={this.handleChange}
                        name="favColor"
                    >
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                    </select>

                    <h1>{this.state.firstName} {this.state.lastName}</h1>
                    <h2>You are a {this.state.gender}</h2>
                    <h2>Your favorite color is {this.state.favColor}</h2>
                    <button>Submit</button>
                </form> */}


                {
                    /**
                     * Other useful form elements:
                     * 
                     *  <textarea /> element
                     *  <input type="checkbox" />
                     *  <input type="radio" />
                     *  <select> and <option> elements
                     */
                }
                {/* Formik */}
            </Form>
        )
    }
}

export default JoinClubForm
