import React from 'react'

function login() {
  return (
    <div>
{/* inner banner */}
<div className="inner-banner">
  <section className="w3l-breadcrumb">
    <div className="container">
      <h4 className="inner-text-title font-weight-bold text-white mb-sm-3 mb-2">
      Sign In
      </h4>
      <ul className="breadcrumbs-custom-path">
        <li>
          <a href="/home">Home</a>
        </li>
        <li className="active">
          <span className="fa fa-chevron-right mx-2" aria-hidden="true" />{" "}
          Sign In
        </li>
      </ul>
    </div>
  </section>
</div>
    <div className="container-fluid ">
      <div className="container ">
        <div className="row cdvfdfd">
          <div className="col-lg-11 col-md-12 login-box">
            <div className="row">
              <div className="col-lg-12 col-md-12 log-det">
                <div className="small-logo">
                  <a className="navbar-brand gold-text" href="/home" style={{color: 'blue'}}>
                <i className="fa-solid fa-bible mr-1" aria-hidden="true" />
                SpiritWallet
              </a>
                </div>
                <p className="dfmn">
                Nurture your spirit and practice faithful giving!
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
    </div> 
  )
}

export default login