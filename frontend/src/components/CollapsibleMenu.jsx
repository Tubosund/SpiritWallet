import React from 'react'


function CollapsibleMenu() {
  return (
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-lg-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/home">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/bible">
                Bible
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Sign In
              </a>
            </li>
            {/* search button */}
            <div className="search-right">
              <a href="#search" className="btn" title="search">
                <span className="fa fa-search" aria-hidden="true" />
              </a>
              {/* search popup */}
              <div id="search" className="pop-overlay">
                <div className="popup">
                  <h4 className="search-pop-text-w3 text-white text-center mb-4">
                    Search Now
                  </h4>
                  <form action="#error" method="GET" className="search-box">
                    <div className="input-search">
                      {" "}
                      <span className="fa fa-search mr-2" aria-hidden="true" />
                      <input
                        type="search"
                        placeholder="Enter Keyword"
                        name="search"
                        required="required"
                        autofocus=""
                        className="search-popup"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-style-white search-btn"
                    >
                      Search
                    </button>
                  </form>
                </div>
                <a className="close" href="/close">
                  ×
                </a>
              </div>
              {/* //search popup */}
            </div>
            {/* //search button */}
          </ul>
        </div>
  );
}

export default CollapsibleMenu
