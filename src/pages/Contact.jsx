import React from 'react'

function contact() {
  return (
    <div>
      <>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <title>
    SpiritWallet
  </title>
  {/* google-fonts */}
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
  {/* inner banner */}
  <div className="inner-banner">
    <section className="w3l-breadcrumb">
      <div className="container">
        <h4 className="inner-text-title font-weight-bold text-white mb-sm-3 mb-2">
          Contact Us
        </h4>
        <ul className="breadcrumbs-custom-path">
          <li>
            <a href="/home">Home</a>
          </li>
          <li className="active">
            <span className="fa fa-chevron-right mx-2" aria-hidden="true" />{" "}
            Contact Us
          </li>
        </ul>
      </div>
    </section>
  </div>
  {/* //inner banner */}
  {/* contact page */}
  <div className="contact-form py-5">
    <div className="container py-lg-5 py-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="section-heading text-center mb-sm-5 mb-4">
            <h3 className="title-style mb-2">Contact Us</h3>
            <p className="lead">
            We'd love to hear from you! Whether you have a question, a comment, or just want to say hello, feel free to reach out using one of the methods below:
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto" style={{ maxWidth: 1100 }}>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="contact-address p-4">
              <div className="contact-icon d-flex align-items-center">
                <i className="fa fa-map-marker" aria-hidden="true" />
                <div className="ml-3">
                  <h5 className="contact-text">Our Location:</h5>
                  <p>Beside Royal Court International School, Hallelujah Estate, Osogbo.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
            <div className="contact-address p-4">
              <div className="contact-icon d-flex align-items-center">
                <i className="fa fa-phone" aria-hidden="true" />
                <div className="ml-3">
                  <h5 className="contact-text">Call Us:</h5>
                  <a href="tel:+2348109999383">+2348109999383</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
            <div className="contact-address p-4">
              <div className="contact-icon d-flex align-items-center">
                <i className="fa fa-envelope" aria-hidden="true" />
                <div className="ml-3">
                  <h5 className="contact-text">Mail Us:</h5>
                  <a href="mailto:SpiritWallet@gmail.com"> SpiritWallet@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form pt-5 mt-2">
          <form
            action="https://sendmail.w3layouts.com/submitForm"
            method="post"
            className="cont-form p-sm-5"
          >
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  name="w3lName"
                  id="w3lName"
                  placeholder="Your Name"
                  className="contact-input"
                />
                <input
                  type="text"
                  name="w3lPhone"
                  id="w3lPhone"
                  placeholder="Phone Number"
                  className="contact-input"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  name="w3lSender"
                  id="w3lSender"
                  placeholder="Your Email id"
                  className="contact-input"
                  required=""
                />
                <input
                  type="text"
                  name="w3lSubject"
                  id="w3lSubject"
                  placeholder="Subject"
                  className="contact-input"
                />
              </div>
            </div>
            <textarea
              className="contact-textarea"
              name="w3lMessage"
              id="w3lMessage"
              placeholder="Type your message here"
              required=""
              defaultValue={""}
            />
            <div className="text-right">
              <button className="btn btn-style-white btn-style-primary">
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* //contact page */}
  {/* Js scripts */}
  {/* move top */}
  <button onclick="topFunction()" id="movetop" title="Go to top">
    <span className="fa fa-level-up" aria-hidden="true" />
  </button>
  {/* //move top */}
  {/* common jquery plugin */}
  {/* //common jquery plugin */}
  {/* theme switch js (light and dark)*/}
  {/* //theme switch js (light and dark)*/}
  {/* MENU-JS */}
  {/* //MENU-JS */}
  {/* disable body scroll which navbar is in active */}
  {/* //disable body scroll which navbar is in active */}
  {/*bootstrap*/}
  {/* //bootstrap*/}
  {/* //Js scripts */}
</>

    </div>
  )
}

export default contact