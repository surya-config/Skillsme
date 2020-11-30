import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="spinning_circle1"></div>
      {/* <div className="spinning_circle2"></div> */}
      <div className="contact__container">
        <div className="contact__leftContainer">
          <h1>Contact Us</h1>
          <div className="contact__headerAnimation"></div>
          <div className="contact__subheadings">
            <div className="contact__subheading">
              {/* phone icon */}
              <div className="contact__subcontent">
                <h4>Phone</h4>
                <h5>+64 21 040 2457</h5>
              </div>
            </div>

            <div className="contact__subheading">
              {/* email icon */}
              <div className="contact__subcontent">
                <h4>Email</h4>
                <h5>info@skillsme.co.nz</h5>
              </div>
            </div>

            <div className="contact__subheading">
              {/* address icon */}
              <div className="contact__subcontent">
                <h4>Address</h4>
                <h5>20 Symond Street</h5>
                <h5>Auckland CBD</h5>
                <h5>Auckland, New Zealand</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="contact__middleContainer">
          <input type="text" placeholder="Name:" />
          <input type="text" placeholder="Subject:" />
          <input type="text" placeholder="Message:" />
          <button>We'll Be There For You</button>
        </div>
        <div className="contact__rightContainer">
          <input type="email" placeholder="Email:" />
          <input type="text" placeholder="Phone:" />
        </div>
      </div>
      <div className="footer__container">
        <div className="footer__top">
          <h5>Powered By</h5>
          <div className="footer__topContainer">
            <img
              src="https://www.myskillsme.com/images/partners/aws.png"
              alt=""
            />
            <img
              src="https://www.myskillsme.com/images/partners/aws-active.png"
              alt=""
            />
            <img
              src="https://www.myskillsme.com/images/partners/github.png"
              alt=""
            />
            <img
              src="https://www.myskillsme.com/images/partners/gitlab.png"
              alt=""
            />
            <img
              src="https://www.myskillsme.com/images/partners/nz-tech.png"
              alt=""
            />
            <img
              src="https://www.myskillsme.com/images/partners/unleash-space.png"
              alt=""
            />
          </div>
        </div>
        <div className="footer__middle">
          <div className="footer__middleFirstContainer">
            <h1>Subscribe us with your email to keep yourself updated!</h1>
            <div className="email__subscription">
              <input type="email" placeholder="youremail@mail.com" />
              <button>Join Now</button>
            </div>
            <p>*Subscribe today for update.</p>
          </div>
          <div className="footer__middleSecondContainer">
            <h4 className="footer__middleContainerHeading">Our Work</h4>
            <p>Log In</p>
            <p>Sign Up</p>
            <p>Privacy</p>
            <p>Code of Conduct</p>
          </div>
          <div className="footer__middleThirdContainer">
            <h4 className="footer__middleContainerHeading">About Us</h4>
            <p>Hire Coders</p>
            <p>Practice Coding</p>
            <p>Be Our Judge</p>
            <p>CV Rediscovery</p>
            <p>Press</p>
          </div>
          <div className="footer__middleFourthContainer">
            <h4 className="footer__middleContainerHeading">Social Media</h4>
            {/* Icons */}
          </div>
        </div>
        <div className="footer__bottom">
          <h4>Copyright Skillsme Ltd. 2020. All Rights Reserved</h4>
          <h4>
            125 Saint Georges Bay Rd., Parnell, Auckland, New Zealand 1502
          </h4>
          <img
            width="135"
            src="https://www.myskillsme.com/images/logo/logo.png"
            alt="Skillsme"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
