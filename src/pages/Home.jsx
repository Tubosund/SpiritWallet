import React, { useEffect } from 'react'
import $ from 'jquery'
import CollapsibleMenu from '../components/CollapsibleMenu'

function Home(){ 
return (
  <div>
  <>
  {/* Required meta tags */}
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
    {/* banner section */}
  <section className="w3l-banner pt-5">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 banner-left">
          <h3 className="text-white mb-3 title">
            Grow your faith
            <br />
            and manage
            <span className="type-js">
              <span className="text-js"> your giving! </span>
            </span>
          </h3>
          <p className="lead text-white">
            Nurture your spirit and practice faithful giving.
          </p>
          <div className="mt-5">
            <a className="btn btn-style-white" href="about.html">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* //banner section */}
  {/* about */}
  <section className="w3l-features-photo-7 py-5">
    <div className="container py-md-5 py-4">
      <div className="row w3l-features-photo-7_top">
        <div className="col-lg-6 w3l-features-photo-7_top-left pr-lg-5">
          <h4 className="title-style mb-2">About Us</h4>
          <p>
            SpiritWallet is more than just a Bible app. It's a place where you can
            nurture your faith, deepen your understanding of scripture, and
            practice faithful giving – all in one convenient location. Carry the
            Bible with you wherever you go. Read scripture, reflect on passages,
            and find daily inspiration. SpiritWallet makes it simple to manage your
            financial commitment to your church or place of worship.
          </p>
          <div className="row feat_top mt-4 pt-lg-3">
            <div className="col-6 w3l-features-photo-7-box">
              <i className="fa fa-thumbs-o-up" aria-hidden="true" />
              <h5 className="w3l-feature-text my-2">Our Mission</h5>
              <p>
                SpiritWallet is on a mission to empower individuals to deepen their
                faith by providing accessible Bible study tools and fostering a
                culture of faithful giving.
              </p>
            </div>
            <div className="col-6 w3l-features-photo-7-box">
              <i className="fa fa-angellist" aria-hidden="true" />
              <h5 className="w3l-feature-text my-2">Our Vision</h5>
              <p>
                We envision a world where SpiritWallet becomes the trusted companion
                for every believer, helping them grow in their faith journey and
                contribute meaningfully to their faith communities.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 w3l-features-photo-7_top-right mt-lg-0 mt-sm-5 mt-4">
          <img
            src="assets/images/about.jpg"
            className="img-responsive"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  {/* //about */}
  {/* stats */}
  <section className="w3_stats py-5" id="stats">
    <div className="container py-md-5 py-4">
      <div className="w3-stats text-center py-md-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="section-heading text-center mb-sm-5 mb-4">
              <h3 className="title-style text-white mb-2">
                Short Exhortation
              </h3>
              <p className="lead text-white">
            Let us nourish both our souls and our faith! Open and study the Bible, a wellspring of wisdom and guidance. As we delve into its verses, we deepen our connection with God.
            Remember, with blessings come responsibility. Tithing, the act of giving a portion back, is a way to express gratitude and support our church's mission. By giving, we sow seeds that will flourish in our community and strengthen our connection to God's work.
            Let us commit to both – studying the word and faithful giving. Together, they build a strong foundation for our spiritual journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* //stats */}
  {/* call section */}
  <section className="w3l-call-to-action-6">
    <div className="call-sec-style py-5">
      <div className="container py-md-4 py-3">
        <div className="row align-items-center">
          <div className="col-md-5 col-float-lt">
            <h3 className="title-big">Contact us now!</h3>
            <p>For Online queries, please call us today</p>
          </div>
          <div className="col-md-7 float-rt text-md-right align-items-center mt-md-0 mt-4">
            <ul className="buttons">
              <li className="phone-sec">
                <span
                  className="fa fa-volume-control-phone mr-1"
                  aria-hidden="true"
                />
                <a className="call-style-w3" href="tel:+1(23) 456 789 0000">
                  +2348109999383
                </a>
              </li>
              <li className="green">Or</li>
              <li>
                <a
                  href="/contact"
                  className="btn btn-style-white btn-style-primary"
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <button onclick="topFunction()" id="movetop" title="Go to top">
  <span className="fa fa-level-up" aria-hidden="true" />
</button>

  {/* //call section */}
  {/* footer */}
  {/* //footer */}
  {/* Js scripts */}
  {/* move top */}
  {/* common jquery plugin */}
  {/* //common jquery plugin */}
  {/* theme switch js (light and dark)*/}
  {/* //theme switch js (light and dark)*/}
  {/* magnific popup */}
  {/* //magnific popup */}
  {/* MENU-JS */}
  {/* //MENU-JS */}
  {/* counter for stats */}
  {/* //counter for stats */}
  {/* disable body scroll which navbar is in active */}
  {/* //disable body scroll which navbar is in active */}
  {/*bootstrap*/}
  {/* //bootstrap*/}
  {/* //Js scripts */}
</>
</div>
  )
}

export default Home