import React, { useEffect } from "react";
import "./Banner.css";

import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

function Banner() {
  return (
    <div className="banner">
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <Spring
            delay={300}
            to={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0px)" : "translateY(300px)",
            }}
          >
            {(props) => (
              <div className="banner__leftContainer" style={{ ...props }}>
                <h1>Land A Remote Coding Job with Skillsme Rating</h1>

                <h2>10K+ Jobs Overseas</h2>
                <p>
                  Receive your Skillsme rating by completing real portfolios and
                  get validated by the world's top 5% coders
                </p>
                <button>Sign Up Now</button>
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <Spring
            delay={400}
            to={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0px)" : "translateY(300px)",
            }}
          >
            {(props) => (
              <div className="banner__rightContainer" style={{ ...props }}>
                <img
                  loading="lazy"
                  className="img-center wow jackInTheBox"
                  data-wow-delay="2500ms"
                  data-wow-duration="3s"
                  src="https://www.myskillsme.com/images/transparent-head/02.png"
                  alt="images"
                />
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </div>
  );
}

export default Banner;
