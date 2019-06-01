import React, { Component } from "react"

import DeleteButton from '../Buttons/DeleteButton'


class UserActiveClub extends Component {

    render() {
        const data = this.props.members
        const clubMembers = data.map(member => <li key={member} className="list-inline-item members-content">{member}</li>)

        return (
            <div>

                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={this.props.cover} className="card-img" alt="Action Bible" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title mb-0">{this.props.title}
                                    
                                    <DeleteButton />
                                    
                                </h5>
                            </div>

                            <div className="row">
                                <div className="col-4">
                                    <h5 className="day">DAY:</h5>
                                </div>
                                <div className="col-8">
                                    <h6 className="day-content">{this.props.time}</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <h5 className="location">LOCATION:</h5>
                                </div>
                                <div className="col-8">
                                    <h6 className="location-content">{this.props.location}</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <h5 className="members">IN THE CLUB:</h5>
                                </div>
                                <div className="col-8">
                                    <ul className="list-inline">

                                        {clubMembers}

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
            // {/* Formik */}
            // </Form>
        )
    }
}

export default UserActiveClub
