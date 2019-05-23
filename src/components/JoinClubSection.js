import React from "react"

function JoinClubSection() {
    return (

        <div className="container-fluid" id="detailsSection">
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


    )
}

export default JoinClubSection
