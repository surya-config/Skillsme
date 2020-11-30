import React from "react";
import "./FirstContainer.css";

import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

function FirstContainer() {
  return (
    <div className="firstContainer">
      <div className="firstContainer__left">
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring
              delay={300}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0px)" : "translateX(-100px)",
              }}
            >
              {(props) => (
                <div
                  className="company-wall block-hide-mobile"
                  style={{ ...props }}
                >
                  <div className="companies__row1">
                    <img
                      loading="lazy"
                      src="https://www.myskillsme.com/images/company-logo/airbnb.jpg"
                      srcset="https://www.myskillsme.com/images/company-logo/airbnb.jpg 1x, https://www.myskillsme.com/images/company-logo/airbnb_2x.jpg 2x"
                    />
                    <span className="divider"></span>
                    <img
                      loading="lazy"
                      src="https://www.myskillsme.com/images/company-logo/air-nz.jpg"
                      srcset="https://www.myskillsme.com/images/company-logo/air-nz.jpg 1x, https://www.myskillsme.com/images/company-logo/air-nz_2x.jpg 2x"
                    />
                    <span className="divider"></span>
                    <img
                      loading="lazy"
                      src="https://www.myskillsme.com/images/company-logo/amazon.jpg"
                      srcset="https://www.myskillsme.com/images/company-logo/amazon.jpg 1x, https://www.myskillsme.com/images/company-logo/amazon_2x.jpg 2x"
                    />
                    <span className="divider"></span>
                    <img
                      loading="lazy"
                      src="https://www.myskillsme.com/images/company-logo/datacom.jpg"
                      srcset="https://www.myskillsme.com/images/company-logo/datacom.jpg 1x, https://www.myskillsme.com/images/company-logo/datacom_2x.jpg 2x"
                    />
                    <span className="divider"></span>
                    <img
                      loading="lazy"
                      src="https://www.myskillsme.com/images/company-logo/facebook.jpg"
                      srcset="https://www.myskillsme.com/images/company-logo/facebook.jpg 1x, https://www.myskillsme.com/images/company-logo/facebook_2x.jpg 2x"
                    />
                  </div>

                  <div className="companies__row2">
                    <img
                      loading="lazy"
                      src="https://www.myskillsme.com/images/company-logo/geo.jpg"
                      srcset="https://www.myskillsme.com/images/company-logo/geo.jpg 1x, https://www.myskillsme.com/images/company-logo/geo_2x.jpg 2x"
                    />
                    <span className="divider"></span>
                    <img
                      loading="lazy"
                      src="https://www.myskillsme.com/images/company-logo/github.jpg"
                      srcset="https://www.myskillsme.com/images/company-logo/github.jpg 1x, https://www.myskillsme.com/images/company-logo/github_2x.jpg 2x"
                    />
                    <span className="divider"></span>
                    <img
                      loading="lazy"
                      src="https://www.myskillsme.com/images/company-logo/jira.jpg"
                      srcset="https://www.myskillsme.com/images/company-logo/jira.jpg 1x, https://www.myskillsme.com/images/company-logo/jira_2x.jpg 2x"
                    />
                    <span className="divider"></span>
                    <img
                      loading="lazy"
                      src="https://www.myskillsme.com/images/company-logo/linkedin.jpg"
                      srcset="https://www.myskillsme.com/images/company-logo/linkedin.jpg 1x, https://www.myskillsme.com/images/company-logo/linkedin_2x.jpg 2x"
                    />
                  </div>

                  <div className="companies__row3">
                    <img
                      loading="lazy"
                      src="https://www.myskillsme.com/images/company-logo/lyft.jpg"
                      srcset="https://www.myskillsme.com/images/company-logo/lyft.jpg 1x, https://www.myskillsme.com/images/company-logo/lyft_2x.jpg 2x"
                    />
                    <span className="divider"></span>
                    <img
                      loading="lazy"
                      src="https://www.myskillsme.com/images/company-logo/microsoft.jpg"
                      srcset="https://www.myskillsme.com/images/company-logo/microsoft.jpg 1x, https://www.myskillsme.com/images/company-logo/microsoft_2x.jpg 2x"
                    />
                    <span className="divider"></span>
                    <img
                      loading="lazy"
                      src="https://www.myskillsme.com/images/company-logo/myob.jpg"
                      srcset="https://www.myskillsme.com/images/company-logo/myob.jpg 1x, https://www.myskillsme.com/images/company-logo/myob_2x.jpg 2x"
                    />
                    <span className="divider"></span>
                    <img
                      loading="lazy"
                      src="https://www.myskillsme.com/images/company-logo/redash.jpg"
                      srcset="https://www.myskillsme.com/images/company-logo/redash.jpg 1x, https://www.myskillsme.com/images/company-logo/redash_2x.jpg 2x"
                    />
                    <span className="divider"></span>
                    <img
                      loading="lazy"
                      src="https://www.myskillsme.com/images/company-logo/salesforce.jpg"
                      srcset="https://www.myskillsme.com/images/company-logo/salesforce.jpg 1x, https://www.myskillsme.com/images/company-logo/salesforce_2x.jpg 2x"
                    />
                  </div>

                  <div className="companies__row4">
                    <img
                      loading="lazy"
                      src="https://www.myskillsme.com/images/company-logo/serko.jpg"
                      srcset="https://www.myskillsme.com/images/company-logo/serko.jpg 1x, https://www.myskillsme.com/images/company-logo/serko_2x.jpg 2x"
                    />
                    <span className="divider"></span>
                    <img
                      loading="lazy"
                      src="https://www.myskillsme.com/images/company-logo/slack.jpg"
                      srcset="https://www.myskillsme.com/images/company-logo/slack.jpg 1x, https://www.myskillsme.com/images/company-logo/slack_2x.jpg 2x"
                    />
                    <span className="divider"></span>
                    <img
                      loading="lazy"
                      src="https://www.myskillsme.com/images/company-logo/survey-monkey.jpg"
                      srcset="https://www.myskillsme.com/images/company-logo/survey-monkey.jpg 1x, https://www.myskillsme.com/images/company-logo/survey-monkey_2x.jpg 2x"
                    />
                    <span className="divider"></span>
                    <img
                      loading="lazy"
                      src="https://www.myskillsme.com/images/company-logo/todoist.jpg"
                      srcset="https://www.myskillsme.com/images/company-logo/todoist.jpg 1x, https://www.myskillsme.com/images/company-logo/todoist_2x.jpg 2x"
                    />
                  </div>

                  <div className="companies__row5">
                    <img
                      loading="lazy"
                      src="https://www.myskillsme.com/images/company-logo/transcribe-me.jpg"
                      srcset="https://www.myskillsme.com/images/company-logo/transcribe-me.jpg 1x, https://www.myskillsme.com/images/company-logo/transcribe-me_2x.jpg 2x"
                    />
                    <span className="divider"></span>
                    <img
                      loading="lazy"
                      src="https://www.myskillsme.com/images/company-logo/twilio.jpg"
                      srcset="https://www.myskillsme.com/images/company-logo/twilio.jpg 1x, https://www.myskillsme.com/images/company-logo/twilio_2x.jpg 2x"
                    />
                    <span className="divider"></span>
                    <img
                      loading="lazy"
                      src="https://www.myskillsme.com/images/company-logo/vend.jpg"
                      srcset="https://www.myskillsme.com/images/company-logo/vend.jpg 1x, https://www.myskillsme.com/images/company-logo/vend_2x.jpg 2x"
                    />
                    <span className="divider"></span>
                    <img
                      loading="lazy"
                      src="https://www.myskillsme.com/images/company-logo/xero.jpg"
                      srcset="https://www.myskillsme.com/images/company-logo/xero.jpg 1x, https://www.myskillsme.com/images/company-logo/xero_2x.jpg 2x"
                    />
                    <span className="divider"></span>
                    <img
                      loading="lazy"
                      src="https://www.myskillsme.com/images/company-logo/zendesk.jpg"
                      srcset="https://www.myskillsme.com/images/company-logo/zendesk.jpg 1x, https://www.myskillsme.com/images/company-logo/zendesk_2x.jpg 2x"
                    />
                  </div>
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </div>

      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <Spring
            delay={300}
            to={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0px)" : "translateY(-100px)",
            }}
          >
            {(props) => (
              <div className="firstContainer__right" style={{ ...props }}>
                <h6>Find a Job worldwide without a resume.</h6>

                <h1>
                  Referred to over 10k companies overseas with your ratings
                </h1>
                <div className="firstContainer__rightAnimation"></div>
                <Spring
                  delay={600}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateX(0px)"
                      : "translateX(100px)",
                  }}
                >
                  {(props) => (
                    <p style={{ ...props }}>
                      With Skillsme, your portfolios has the potential to reach
                      over 10,000 companies worldwide that are interested in
                      recruiting remote tech talents like you. Validate your
                      portfolios with ratings only on Skillsme.
                    </p>
                  )}
                </Spring>

                <div className="firstContainer__rightCards">
                  <div className="firstContainer__rightCard">
                    <img
                      width="40px"
                      height="40px"
                      src="https://www.flaticon.com/svg/static/icons/svg/1067/1067566.svg"
                      alt=""
                    />
                    <h2>
                      <span>6</span>K+
                    </h2>
                    <h5>Skillsme Users</h5>
                  </div>
                  <div className="firstContainer__rightCard">
                    <img
                      width="40px"
                      height="40px"
                      src="https://www.flaticon.com/svg/static/icons/svg/1589/1589599.svg"
                      alt=""
                    />
                    <h2>
                      <span>10</span>K+
                    </h2>
                    <h5>Companies</h5>
                  </div>
                </div>
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </div>
  );
}

export default FirstContainer;
