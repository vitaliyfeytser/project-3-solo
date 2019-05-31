import React, { Component } from "react"

import UserActiveClub from "./UserActiveClub"
import UserFavBooks from "./UserFavBooks";


class UserAccountSection extends Component {

  // Take in props in the render function or do an API call to the db for filling out these form options (props is more react-y)

  render() {
    // Get active clubs data from the props object
    const data = this.props
    console.log("data = this.props: ", data)
    // Generate the active Clubs section
    const activeClubs = data.activeClubs.map(club => <UserActiveClub
      key={club.id}
      id={club.id}
      cover={club.cover}
      title={club.title}
      time={club.time}
      location={club.location}
      members={club.members}
      // pass the toggler function as a prop
      // onToggleClick={this.onToggleClickStatus}
    />)

    return (
      <div className="container-fluid" id="accountSection">
        <div className="row">
          <div className="col-12 col-lg-8">

            <div className="jumbotron jumbotron-profile">
              <h1 className="display-3">My Current Book Clubs</h1>
              <p className="lead">Book clubs I'm interested in joining later down the road:</p>
            </div>

            {activeClubs}

          </div>

          <div className="col-12 col-lg-4">
            <div className="jumbotron jumbotron-profile">
              <h1 className="display-3">My Favs</h1>
              <p className="lead">Books I'm considering:</p>
            </div>

            <UserFavBooks favedBooks={data.favedBooks}/>

          </div>
        </div>
      </div>

    )
  }
}

export default UserAccountSection

