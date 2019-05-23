import React from "react"

function SignUpForm () {
    return (

        <div className="jumbotron jumbotron-form back">
            <h1 className="display-3">Your next book adventure is calling!</h1>
            <p className="lead">Join a local book club to meet people, read something new, engage in heathy debate
              about a
  premise of your favorite book, or just to continue to explore the wonderful world of books.</p>

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

                <div className="row justify-content-center">
                    <div className="col-12 col-md-10">
                        <button type="submit" id="btnSubmitProfile" className="btn btn-light mb-2">Sign Up</button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default SignUpForm

