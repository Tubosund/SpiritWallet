import React from 'react'

function login() {
  return (
    
    <>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
     <title>SpiritWallet</title>
  <link
    href="//fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
  <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EQh7TCQayCWfBqbwAWiGsOYvljEJqcnzwWN5WT6x3ywQbt4YmPW+hPBP7Ju" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="assets/css/style-starter.css" />
    <div className="container-fluid ">
      <div className="container ">
        <div className="row cdvfdfd">
          <div className="col-lg-10 col-md-12 login-box">
            <div className="row">
              <div className="col-lg-6 col-md-6 log-det">
                <div className="small-logo">
                  <a className="navbar-brand gold-text" href="/home" style={{color: 'blue'}}>
                <i className="fa-solid fa-bible mr-1" aria-hidden="true" />
                SpiritWallet
              </a>
                </div>
                <p className="dfmn">
                  Track, Manage, Thrive. Simplified finances for your business!
                </p>
                <div className="text-box-cont">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fas fa-user" />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email Address"
                      aria-label="Email Address"
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
                      type="text"
                      className="form-control"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group center">
                    <button className="btn btn-danger btn-round">SIGN IN</button>
                  </div>
                  <div className="row">
                    <p className="forget-p">
                      Don't have an account?{" "}
                      <span>
                        <a className="signup" href="/signup">
                          Sign Up!
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="forgot-password">
                  <p>
                    Forgot Password?
                    <a href="/forgotpassword" className="forgot-link">
                      Click Here
                    </a>
                  </p>
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

export default login