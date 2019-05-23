import React from "react"

function SignInForm () {
    return (
        <div className="container-fluid " id="formSection">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10" id="card">

              <div className="jumbotron jumbotron-form front">
                <h1 className="display-3">Welcome back!</h1>
                <p className="lead">Join a local book club to meet people, read something new, engage in heathy debate
                  about a
  premise of your favorite book, or just to continue to explore the wonderful world of books.</p>

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
              
             </div>
           </div>
         </div>

    )
}

export default SignInForm

