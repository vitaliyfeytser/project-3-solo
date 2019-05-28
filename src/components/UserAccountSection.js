import React, {Component} from "react"

import UserActiveClub from "./UserActiveClub"
import UserFavBooks from "./UserFavBooks";


class UserAccountSection extends Component {
  state = {
    data: ""
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  // Take in props in the render function or do an API call to the db for filling out these form options (props is more react-y)

  render() {
    return (
      <div className="container-fluid" id="accountSection">
        <div className="row">
          <div className="col-12 col-lg-8">

            <div className="jumbotron jumbotron-profile">
              <h1 className="display-3">My Current Book Clubs</h1>
              <p className="lead">Book clubs I'm interested in joining later down the road:</p>
            </div>

            <UserActiveClub />
            <UserActiveClub />
            <UserActiveClub />

          </div>
          
          <div className="col-12 col-lg-4">
            <div className="jumbotron jumbotron-profile">
              <h1 className="display-3">My Favs</h1>
              <p className="lead">Books I'm considering:</p>
            </div>

            <UserFavBooks />
            
          </div>
        </div>
      </div>

    )
  }
}

export default UserAccountSection

