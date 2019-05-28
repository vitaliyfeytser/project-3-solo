import React, { Component } from "react"

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

    render() {
        return (
            <div>

                <div className="jumbotron jumbotron-details">
                    <h1 className="display-3">Join us!</h1>
                    <p className="lead">Choose club details:</p>
                    <div className="accordion" id="accordion">
                        <div className="card">
                            <div className="card-header" id="headingOne">
                                <h2 className="mb-0">
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
                                        aria-expanded="false" aria-controls="collapseOne">
                                        TIME:
        </button>
                                </h2>
                            </div>
                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <select className="form-control" id="FormControlSelect1">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingTwo">
                                <h2 className="mb-0">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse"
                                        data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        LOCATION:
        </button>
                                </h2>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <select className="form-control" id="FormControlSelect2">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingThree">
                                <h2 className="mb-0">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse"
                                        data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        CURRENT MEMBERS:
        </button>
                                </h2>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <div className="card-body">
                                    <ul className="list-inline">
                                        <li className="list-inline-item members-content">Bobbie Joe</li>
                                        <li className="list-inline-item members-content">Mary Sue</li>
                                        <li className="list-inline-item members-content">John Smith</li>
                                        <li className="list-inline-item members-content">Carry Smith</li>
                                        <li className="list-inline-item members-content">Michael Bolton</li>
                                        <li className="list-inline-item members-content">Yo Momma</li>
                                        <li className="list-inline-item members-content">Jesus Himself</li>
                                        <li className="list-inline-item members-content">LeBron James</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <form onSubmit={this.handleSubmit}>
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
                    {/* Formik */}
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
                </form>

            </div>
        )
    }
}

export default JoinClubForm
