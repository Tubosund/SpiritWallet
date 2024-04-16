import React from 'react'

function signup() {
  return (
<>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <title>Sign Up</title>
  <link rel="shortcut icon" href="assets/images/fav.jpg" />
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/css/fontawsom-all.min.css" />
  <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
  <div className="container-fluid ">
    <div className="container ">
      <div className="row cdvfdfd">
        <div className="col-lg-10 col-md-12 login-box">
          <div className="row">
            <div className="col-lg-6 col-md-6 log-det">
              <div className="small-logo" href='/home'>
                <i className="fab fa-asymmetrik" /> AccoTrac
              </div>
              <p className="dfmn">
                Track, Manage, Thrive. Simplified finances for your business!
              </p>
              <div className="text-box-cont">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fas fa-building" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company Name"
                    aria-label="Company Name"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fas fa-envelope" />
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    aria-label="Email Address"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fas fa-phone" />
                    </span>
                  </div>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                    aria-label="Phone Number"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fas fa-lock" />
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group center">
                  <button className="btn btn-danger btn-round">SIGN UP</button>
                </div>
                <div className="row">
                  <p className="forget-p">
                    Already have an account?{" "}
                    <span>
                      <a className="signup" href="/login">
                        Sign In!
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 box-de">
              <div className="inn-cover">
                <div className="ditk-inf">
                  <div className="small-logo">
                    <i className="fab fa-asymmetrik" /> AccoTrac
                  </div>
                  <p>
                    AccoTrac is your one stop shop for managing your finances
                    and making your accounts healthy.
                  </p>
                  <a href="#"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default signup