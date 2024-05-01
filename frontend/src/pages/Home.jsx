import React, { useEffect } from 'react'
import CollapsibleMenu from '../components/CollapsibleMenu'

function Home(){ 
return (
  <div>
  <>
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
            <a className="btn btn-style-white" href="/signup">
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
              Tithing in the New & Old Testament
              <p className="small">written by Bob Lotich, CEPF® </p>
              </h3>
              <h4 className="leadd">
              What is tithing?      
            </h4>
            <p className="lead text-white">
            Wikipedia defines the tithe:
            “A tithe is a one-tenth part of something, paid as a contribution to a religious organization or compulsory tax to government. Today, tithes are normally voluntary and paid in cash, cheques, or stocks, whereas historically tithes were required and paid in kind, such as agricultural products.”      
            </p>
            <h5 className="leadd">
            Tithing Isn’t A Means Of Salvation     
            </h5>
            <p className="lead text-white">
            This is incredibly important to understand. Our salvation is based on Jesus” finished work on the cross, not on works.

            You can’t earn your way to Heaven by giving, and you won’t be excluded from Heaven by your lack of tithing.

            “For it is by grace you have been saved, through faith–and this not from yourselves, it is the gift of God– not by works, so that no one can boast.”

            EPHESIANS 2:8-9 NIV.
            </p>
            <h5 className="leadd">
            What Did Jesus Say About Tithing?    
            </h5>
            <p className="lead text-white">
            Jesus Endorsed The Tithe
            </p>
            <p className="lead text-white">
            In Matthew 23:23 and Luke 11:42 Jesus referred to tithing as something that should not be neglected…

           “Woe to you, teachers of the law and Pharisees, you hypocrites! You give a tenth of your spices–mint, dill and cummin. But you have neglected the more important matters of the law–justice, mercy and faithfulness. You should have practiced the latter, without neglecting the former.”

            So if you have been wondering what Jesus said about tithing or if “tithe” is in the New Testament, you have it right there in Luke 11:42.</p>
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
                <a className="call-style-w3" href="tel:+2348109999383">
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
</>
</div>
  )
}

export default Home