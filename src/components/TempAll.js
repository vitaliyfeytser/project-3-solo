import React from "react"

// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Button from 'react-bootstrap/Button';

import NavComponent from './OurNavbar'

function TempAll() {
    return (
        <container>

            <NavComponent />

            {/* <!-- ******************** LOG-IN FORM SECTION ******************** --> */}
            <div className="container-fluid collapse" id="formSection">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10" id="card">

                        <div className="jumbotron jumbotron-form front collapse">
                            <h1 className="display-3">Welcome back!</h1>
                            <p className="lead">Join a local book club to meet people, read something new, engage in heathy debate
                              about a
              premise of your favorite book, or just to continue to explore the wonderful world of books.</p>

                            {/* <br> */}

                            <form className="justify-content-center" id="profileForm">

                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-6 col-lg-5">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">Email:</div>
                                            </div>
                                            <input type="email" className="form-control" id="emailInput" placeholder="littleHands@us.gov" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-5">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">Password:</div>
                                            </div>
                                            <input type="text" className="form-control" id="passwordInput" placeholder="NOT 123abc" />
                                        </div>
                                    </div>
                                </div>

                                {/* <br> */}

                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-10">
                                        <div className="lead">
                                            <button type="submit" id="btnLogIn" className="btn btn-light mb-2">Log In</button>
                                            ..or if you are new to us:
                    <button type="button" id="btnSignUp" className="btn btn-light mb-2">Sign Up</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* <!-- </div>
    </div>
  </div> --> */}

                        {/* <!-- ******************** SIGN-UP FORM SECTION ******************** --> */}

                        {/* <!-- <div className="container-fluid collapse" id="formSection">
    <div className="row justify-content-center">
      <div className="col-12 col-md-10"> --> */}

                        <div className="jumbotron jumbotron-form back collapse">
                            <h1 className="display-3">Your next book adventure is calling!</h1>
                            <p className="lead">Join a local book club to meet people, read something new, engage in heathy debate
                              about a
              premise of your favorite book, or just to continue to explore the wonderful world of books.</p>

                            {/* <br> */}

                            <form className="justify-content-center" id="profileForm">

                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-6 col-lg-5">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">First Name:</div>
                                            </div>
                                            <input type="text" className="form-control" id="firstNameInput" placeholder="Donnie" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-5">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">Last Name:</div>
                                            </div>
                                            <input type="text" className="form-control" id="LastNameInput" placeholder="Trumpo" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-6 col-lg-5">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">City:</div>
                                            </div>
                                            <input type="text" className="form-control" id="cityInput" placeholder="Sacramento" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-5">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">State:</div>
                                            </div>
                                            <input type="text" className="form-control" id="stateInput" placeholder="Kalifornia" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-6 col-lg-5">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">Gender:</div>
                                            </div>
                                            <select id="genderInput" className="custom-select">
                                                <option selected>Choose...</option>
                                                <option value="1">Female</option>
                                                <option value="2">Male</option>
                                                <option value="3">Caitlyn Jenner</option>
                                                <option value="4">Not Sure</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-5">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">Age:</div>
                                            </div>
                                            <select id="ageInput" className="custom-select">
                                                <option selected>Choose...</option>
                                                <option value="1">Immature Child (1-19)</option>
                                                <option value="2">Young Blood (20-29)</option>
                                                <option value="3">Midlife Crisis (30-39)</option>
                                                <option value="4">3 Kids and A Mortgage (40-49)</option>
                                                <option value="5">Old (50-69)</option>
                                                <option value="6">Super Old (70-89)</option>
                                                <option value="5">Beef Jerky (90+)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-10">
                                        <div className="form-group">
                                            <textarea className="form-control" id="BioInput" placeholder="How about a short personal bio?"
                                                rows="5"></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-6 col-lg-5">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">Email:</div>
                                            </div>
                                            <input type="email" className="form-control" id="emailInput" placeholder="littleHands@us.gov" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-5">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">Password:</div>
                                            </div>
                                            <input type="text" className="form-control" id="passwordInput" placeholder="NOT 123abc" />
                                        </div>
                                    </div>
                                </div>

                                {/* <br> */}

                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-10">
                                        <button type="submit" id="btnSubmitProfile" className="btn btn-light mb-2">Sign Up</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            {/* <!-- ******************** MAIN SECTION ******************** --> */}
            <div className="container-fluid" id="mainSection">
                <div className="row" id="cardRow">
                    <div className="col">
                        <div className="card-deck">
                            {/* <!-- //////////////////////// --> */}
                            <div className="card" id="book-one" data-promoted-books-id="">
                                <img className="card-img-top promoted-books-at-top" src="./images/hb.jpeg" alt="Holy Bible" />
                                <div className="card-body promoted-books-at-top">
                                    <h5 className="card-title">THE ACTION BIBLE</h5>
                                    <p className="card-text">Finally! From the authors who brought you the "HOLY BIBLE", "SANTA CLAUSE AND
                                      RUDOLPH",
                                      "GHOSTS ARE REAL, NO - I'M SERIOUS!" comes a story of the Bible Heroes and Devotion! Let's meet up and
                                      together
                  color Moses with your favorite set of crayons!</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Join this book club or fav it for later!</small>
                                    <img className="ml-3 promoted-books-at-top joinClub" src="./images/arrow.png" alt="Join This Book Club!" width="20px"
                                        height="20px" data-toggle="tooltip" data-placement="top" title="Join This Book Club!" />
                                    <img className="ml-3 favorInput" data-book="1" src="./images/heart.png" alt="Fav It For Later!" width="20px"
                                        height="20px" data-toggle="tooltip" data-placement="top" title="Fav It For Later!" />
                                </div>
                            </div>
                            {/* <!-- ///////////////////////////// --> */}
                            <div className="card" id="book-two" data-promoted-books-id="">
                                <img className="card-img-top promoted-books-at-top" src="./images/ks.jpeg" alt="Kama Sutra" />
                                <div className="card-body promoted-books-at-top">
                                    <h5 className="card-title">KAMA SUTRA FOR BEGINNERS</h5>
                                    <p className="card-text">Will you just look at the cover page? Does it not make you want to read this book
                                      again and again and again? Yes, we feel the same way! Let's meet up and read it together: bring your
                                      kids, your
                  grandkids, even your neighbor - KAMA SUTRA is for everyone!</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Join this book club or fav it for later!</small>
                                    <img className="ml-3 promoted-books-at-top joinClub" src="./images/arrow.png" alt="Join This Book Club!" width="20px"
                                        height="20px" data-toggle="tooltip" data-placement="top" title="Join This Book Club!" />
                                    <img className="ml-3 favorInput" data-book="2" src="./images/heart.png" alt="Fav It For Later!" width="20px"
                                        height="20px" data-toggle="tooltip" data-placement="top" title="Fav It For Later!" />
                                </div>
                            </div>
                            <div className="card" id="book-three" data-promoted-books-id="">
                                <img className="card-img-top promoted-books-at-top" src="./images/yp.jpeg" alt="Card image cap" />
                                <div className="card-body promoted-books-at-top">
                                    <h5 className="card-title">YELLOW PAGES</h5>
                                    <p className="card-text">This book is not for the light of heart... The New Yorker calls it "Riveting!!!",
                                      The
                                      Guardian says "If there's one book you read your entire life... this is the one!". Let's meet up and
                  flip from page to page together in search for the meaning of life and winning lottery numbers.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Join this book club or fav it for later!</small>
                                    <img className="ml-3 promoted-books-at-top joinClub" src="./images/arrow.png" alt="Join This Book Club!" width="20px"
                                        height="20px" data-toggle="tooltip" data-placement="top" title="Join This Book Club!" />
                                    <img className="ml-3 favorInput" data-book="3" src="./images/heart.png" alt="Fav It For Later!" width="20px"
                                        height="20px" data-toggle="tooltip" data-placement="top" title="Fav It For Later!" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- ******************** BOOK CLUB DETAILS SECTION ******************** --> */}
            <div className="container-fluid collapse" id="detailsSection">
                <div className="row">
                    <div className="col col-md-2 col-lg-3"></div>
                    <div className="col-12 col-md-4 col-lg-3" id="clubDetails">

                        <div className="card clubDetailsCard" id="book-1-clubs" data-promoted-books-id="">
                            <img className="card-img-top" src="./images/hb.jpeg" alt="Holy Bible" />
                            <div className="card-body">
                                <h5 className="card-title">THE ACTION BIBLE</h5>
                                <p className="card-text">Finally! From the authors who brought you the "HOLY BIBLE", "SANTA CLAUSE AND
                                  RUDOLPH",
                                  "GHOSTS ARE REAL, NO - I'M SERIOUS!" comes a story of the Bible Heroes and Devotion! Let's meet up and
                                  together
                color Moses with your favorite set of crayons!</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Join this book club or fav it for later!</small>
                                <img className="ml-3" src="./images/arrow.png" alt="Join This Book Club!" width="20px"
                                    height="20px" data-toggle="tooltip" data-placement="top" title="Join This Book Club!" />
                                <img className="ml-3 favorInput" data-book="1" src="./images/heart.png" alt="Fav It For Later!" width="20px"
                                    height="20px" data-toggle="tooltip" data-placement="top" title="Fav It For Later!" />
                            </div>
                        </div>
                        <div className="card clubDetailsCard" id="book-2-clubs" data-promoted-books-id="">
                            <img className="card-img-top" src="./images/ks.jpeg" alt="Kama Sutra" />
                            <div className="card-body">
                                <h5 className="card-title">KAMA SUTRA FOR BEGINNERS</h5>
                                <p className="card-text">Will you just look at the cover page? Does it not make you want to read this book
                                  again and again and again? Yes, we feel the same way! Let's meet up and read it together: bring your
                                  kids, your
                grandkids, even your neighbor - KAMA SUTRA is for everyone!</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Join this book club or fav it for later!</small>
                                <img className="ml-3" src="./images/arrow.png" alt="Join This Book Club!" width="20px"
                                    height="20px" data-toggle="tooltip" data-placement="top" title="Join This Book Club!" />
                                <img className="ml-3 favorInput" data-book="2" src="./images/heart.png" alt="Fav It For Later!" width="20px"
                                    height="20px" data-toggle="tooltip" data-placement="top" title="Fav It For Later!" />
                            </div>
                        </div>
                        <div className="card clubDetailsCard" id="book-3-clubs" data-promoted-books-id="">
                            <img className="card-img-top" src="./images/yp.jpeg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">YELLOW PAGES</h5>
                                <p className="card-text">This book is not for the light of heart... The New Yorker calls it "Riveting!!!",
                                  The
                                  Guardian says "If there's one book you read your entire life... this is the one!". Let's meet up and
                flip from page to page together in search for the meaning of life and winning lottery numbers.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Join this book club or fav it for later!</small>
                                <img className="ml-3" src="./images/arrow.png" alt="Join This Book Club!" width="20px"
                                    height="20px" data-toggle="tooltip" data-placement="top" title="Join This Book Club!" />
                                <img className="ml-3 favorInput" data-book="3" src="./images/heart.png" alt="Fav It For Later!" width="20px"
                                    height="20px" data-toggle="tooltip" data-placement="top" title="Fav It For Later!" />
                            </div>
                        </div>
                        {/* <!-- <div className="card">
            <img className="card-img-top" src="./images/hb.jpeg" alt="Holy Bible">
            <div className="card-body">
              <h5 className="card-title">THE ACTION BIBLE</h5>
              <p className="card-text">Finally! From the authors who brought you the "HOLY BIBLE", "SANTA CLAUSE AND RUDOLPH",
                "GHOSTS ARE REAL, NO - I'M SERIOUS!" comes a story of the Bible Heroes and Devotion! Let's meet up and
                together
                color Moses with your favorite set of crayons!</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Join this book club or fav it for later!</small>
              <img className="ml-3" src="./images/arrow.png" alt="Join This Book Club!" width="20px" height="20px"
                data-toggle="tooltip" data-placement="top" title="Join This Book Club!">
              <img src="./images/heart.png" alt="Fav It For Later!" width="20px" height="20px" data-toggle="tooltip"
                data-placement="top" title="Fav It For Later!">
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src="./images/hb.jpeg" alt="Holy Bible">
            <div className="card-body">
              <h5 className="card-title">THE ACTION BIBLE</h5>
              <p className="card-text">Finally! From the authors who brought you the "HOLY BIBLE", "SANTA CLAUSE AND RUDOLPH",
                "GHOSTS ARE REAL, NO - I'M SERIOUS!" comes a story of the Bible Heroes and Devotion! Let's meet up and
                together
                color Moses with your favorite set of crayons!</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Join this book club or fav it for later!</small>
              <img className="ml-3" src="./images/arrow.png" alt="Join This Book Club!" width="20px" height="20px"
                data-toggle="tooltip" data-placement="top" title="Join This Book Club!">
              <img src="./images/heart.png" alt="Fav It For Later!" width="20px" height="20px" data-toggle="tooltip"
                data-placement="top" title="Fav It For Later!">
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src="./images/hb.jpeg" alt="Holy Bible">
            <div className="card-body">
              <h5 className="card-title">THE ACTION BIBLE</h5>
              <p className="card-text">Finally! From the authors who brought you the "HOLY BIBLE", "SANTA CLAUSE AND RUDOLPH",
                "GHOSTS ARE REAL, NO - I'M SERIOUS!" comes a story of the Bible Heroes and Devotion! Let's meet up and
                together
                color Moses with your favorite set of crayons!</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Join this book club or fav it for later!</small>
              <img className="ml-3" src="./images/arrow.png" alt="Join This Book Club!" width="20px" height="20px"
                data-toggle="tooltip" data-placement="top" title="Join This Book Club!">
              <img src="./images/heart.png" alt="Fav It For Later!" width="20px" height="20px" data-toggle="tooltip"
                data-placement="top" title="Fav It For Later!">
            </div>
          </div> --> */}

                    </div>

                    <div className="col-12 col-md-4 col-lg-3">

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
                                                        {/* <!-- <option>4</option>
                          <option>5</option> --> */}
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

                    </div>
                    <div className="col col-md-2 col-lg-3"></div>
                </div>
            </div>


            {/* <!-- ******************** ACCOUNT SECTION ******************** --> */}
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
    )
}

export default TempAll
