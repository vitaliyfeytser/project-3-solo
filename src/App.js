import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './styles/styles.css';

// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Button from 'react-bootstrap/Button';

import NavComponent from './components/NavComponent'
import SignUpForm from './components/SignUpForm'
import Vitaliy from './components/SignInForm'
import PromotedSection from './components/PromotedSection'
import JoinClubSection from './components/JoinClubSection'


function App() {
  return (
    <div className="App">
      <container>

        <NavComponent />
        <SignUpForm />
        <Vitaliy />
        <PromotedSection />
        <JoinClubSection />

        {/* <!-- ******************** LOG-IN FORM SECTION ******************** --> */}
        

        {/* <!-- ******************** USER ACCOUNT SECTION ******************** --> */}
        <div className="container-fluid" id="accountSection">
          <div className="row">
            <div className="col-12 col-lg-8">

              <div className="jumbotron jumbotron-profile">
                <h1 className="display-3">My Current Book Clubs</h1>
                <p className="lead">Book clubs I'm interested in joining later down the road:</p>
              </div>

              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="./images/hb.jpeg" className="card-img" alt="Action Bible" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title mb-0">THE ACTION BIBLE
        <img className="ml-3" src="./images/check.png" alt="You're A Member Of This Book Club" width="20px"
                          height="20px" data-toggle="tooltip" data-placement="top"
                          title="You're A Member Of This Book Club!" />
                        <img className="ml-3" src="./images/flame.png" alt="LEAVE This Book Club!" width="20px" height="20px"
                          data-toggle="tooltip" data-placement="top" title="LEAVE This Book Club!" />
                        <img className="ml-3" src="./images/heart.png" alt="Fav It For Later!" width="20px" height="20px"
                          data-toggle="tooltip" data-placement="top" title="Fav It For Later!" />
                      </h5>
                    </div>

                    <div className="row">
                      <div className="col-4">
                        <h5 className="day">DAY:</h5>
                      </div>
                      <div className="col-8">
                        <h6 className="day-content">Fridays @ 7pm</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <h5 className="location">LOCATION:</h5>
                      </div>
                      <div className="col-8">
                        <h6 className="location-content">Starbucks on 5th</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <h5 className="members">IN THE CLUB:</h5>
                      </div>
                      <div className="col-8">
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
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="./images/yp.jpeg" className="card-img" alt="Yellow Pages" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title mb-0">YELLOW PAGES
        <img className="ml-3" src="./images/check.png" alt="You're A Member Of This Book Club" width="20px"
                          height="20px" data-toggle="tooltip" data-placement="top"
                          title="You're A Member Of This Book Club!" />
                        <img className="ml-3" src="./images/flame.png" alt="LEAVE This Book Club!" width="20px" height="20px"
                          data-toggle="tooltip" data-placement="top" title="LEAVE This Book Club!" />
                        <img className="ml-3" src="./images/heart.png" alt="Fav It For Later!" width="20px" height="20px"
                          data-toggle="tooltip" data-placement="top" title="Fav It For Later!" />
                      </h5>
                    </div>

                    <div className="row">
                      <div className="col-4">
                        <h5 className="day">DAY:</h5>
                      </div>
                      <div className="col-8">
                        <h6 className="day-content">Sundays after church</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <h5 className="location">LOCATION:</h5>
                      </div>
                      <div className="col-8">
                        <h6 className="location-content">Dark Alley behind the church</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <h5 className="members">IN THE CLUB:</h5>
                      </div>
                      <div className="col-8">
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
            </div>
            <div className="col-12 col-lg-4">
              <div className="jumbotron jumbotron-profile">
                <h1 className="display-3">My Favs</h1>
                <p className="lead">Books I'm considering:</p>
              </div>

              <div className="list-group" id="booksLiked">
                <a
                  href="#"
                  className="list-group-item list-group-item-action"
                >Awesome book 1
                    <img
                    className="ml-3"
                    src="./images/flame.png"
                    style={{ float: 'right' }}
                    alt="Leave this Club!"
                    width="20px"

                    height="20px"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="REMOVE From Favorites"
                  />
                </a>
                <a href="#" className="list-group-item list-group-item-action">Awesome book 2
  <img className="ml-3" src="./images/flame.png" style={{ float: 'right' }} alt="Leave this Club!" width="20px"
                    height="20px" data-toggle="tooltip" data-placement="top" title="REMOVE From Favorites" />
                </a>
                <a href="#" className="list-group-item list-group-item-action">Awesome book 3
  <img className="ml-3" src="./images/flame.png" style={{ float: 'right' }} alt="Leave this Club!" width="20px"
                    height="20px" data-toggle="tooltip" data-placement="top" title="REMOVE From Favorites" />
                </a>
                <a href="#" className="list-group-item list-group-item-action disabled">Awesome book 4
  <img className="ml-3" src="./images/flame.png" style={{ float: 'right' }} alt="Leave this Club!" width="20px"
                    height="20px" data-toggle="tooltip" data-placement="top" title="REMOVE From Favorites" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </container>
    </div>
  );
}

export default App;
