import React from 'react'

function forgotpassword() {
  return (
    <div>
{/* inner banner */}
<div className="inner-banner">
<section className="w3l-breadcrumb">
  <div className="container">
    <h4 className="inner-text-title font-weight-bold text-white mb-sm-3 mb-2">
    Reset Password
    </h4>
    <ul className="breadcrumbs-custom-path">
      <li>
        <a href="/home">Home</a>
      </li>
      <li className="active">
        <span className="fa fa-chevron-right mx-2" aria-hidden="true" />{" "}
        Reset Password
      </li>
    </ul>
  </div>
</section>
</div>
<div>
    <div className="container-fluid ">
      <div className="container ">
        <div className="row cdvfdfd">
          <div className="col-lg-11 col-md-12 login-box">
            <div className="row">
              <div className="col-lg-12 col-md-12 log-det">
                <div className="small-logo">
                  <i className="fa-Solid fa-Bible" /> Reset Password
                </div>
                <div className="text-box-cont">
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
                  <div className="input-group center">
                    <button className="btn btn-danger btn-round">
                      RESET PASSWORD
                    </button>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default forgotpassword