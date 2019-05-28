import React from "react"

import JoinClubBook from "./JoinClubBook"
import JoinClubForm from "./JoinClubForm"

function JoinClubSection(props) {
  return (

    <div className="container-fluid" id="detailsSection">
      <div className="row">
        <div className="col col-md-2 col-lg-3"></div>
        <div className="col-12 col-md-4 col-lg-3" id="clubDetails">

          <JoinClubBook
            key={props.id}
            id={props.id}
            cover={props.cover}
            title={props.titles}
            caption={props.caption}
          />

        </div>

        <div className="col-12 col-md-4 col-lg-3">

          <JoinClubForm />

          {/* <div className="jumbotron jumbotron-details">
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
          </div> */}

        </div>
        <div className="col col-md-2 col-lg-3"></div>
      </div>
    </div>


  )
}

export default JoinClubSection
