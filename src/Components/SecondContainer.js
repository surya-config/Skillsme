import React from "react";
import "./SecondContainer.css";

import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

function SecondContainer() {
  return (
    <div className="secondContainer">
      <div className="secondContainer__firstComponent">
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
                <div className="secondContainer__left" style={{ ...props }}>
                  <h6>CV is cheap. Show me the code.</h6>

                  <h1>
                    Choose a Catalog to build a portfolio and prove your coding
                    capability
                  </h1>
                  <Spring
                    delay={600}
                    to={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateX(0px)"
                        : "translateX(300px)",
                    }}
                  >
                    {(props) => (
                      <div
                        style={{ ...props }}
                        className="secondContainer__para"
                      >
                        <p>
                          Skillsme “Talents Pool” Catalog will get updated every
                          week. This will contain the topic and requirements to
                          complete your portfolio to get rated on. Talent Pool
                          Catalog has a time limit of 48 hours from the time you
                          see the question.
                        </p>

                        <p>
                          Talents Pool Catalog rating is the only rating that
                          will count towards getting recruited by our clients
                          worldwide.
                        </p>
                      </div>
                    )}
                  </Spring>
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
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
                <div className="secondContainer__right" style={{ ...props }}>
                  <div className="secondContainer__firstComponentCard">
                    <img
                      src="https://www.myskillsme.com/images/catalog/c-1.jpg"
                      alt=""
                    />
                    <div className="secondContainer__firstComponentCard__firstContent">
                      <div className="secondContainer__firstComponentCard__name__content__name">
                        <img
                          src="https://www.myskillsme.com/images/random_photos/16.png"
                          alt=""
                        />
                        <h5>Mark T.</h5>
                      </div>
                      <div className="secondContainer__firstComponentCard__name__type">
                        Frontend
                      </div>
                    </div>
                    <h2>Loading animation with React LifeCycle</h2>
                    <h6>Easy</h6>
                    <div className="secondContainer__firstComponentCard__button">
                      <h5>
                        Try This
                        {/* <img
                          src="https://www.flaticon.com/svg/static/icons/svg/545/545682.svg"
                          alt=""
                        /> */}
                      </h5>
                    </div>
                  </div>
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </div>

      <div className="secondContainer__secondComponent">
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring
              delay={300}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0px)" : "translateY(200px)",
              }}
            >
              {(props) => (
                <div className="secondContainer__right" style={{ ...props }}>
                  <div className="secondContainer__secondComponentCard">
                    <div className="secondContainer__secondComponentCardHeader">
                      <img
                        src="https://www.myskillsme.com/images/random_photos/25.png"
                        alt=""
                      />
                      <div className="secondContainer__secondComponentCardHeaderContent">
                        <div className="secondContainer__secondComponentCardHeaderTopContent">
                          <h5>Jason M. </h5>
                          <img
                            src="https://www.myskillsme.com/images/medals/l-1.jpg"
                            alt=""
                          />
                          <div className="secondContainer__secondComponentRating">
                            4.10/5.00
                          </div>
                          <div className="secondContainer__secondComponentFeedback">
                            Positive Feedback
                          </div>
                        </div>
                        <div className="secondContainer__secondComponentTime">
                          14/Jul/2020, 10:51:05 AM
                        </div>
                      </div>
                    </div>

                    <p>
                      This portfolio has completed the all the goals given.
                      Obviously this person's capability is beyond the catalog
                      selected. I believe the creator is pretty familiar with
                      those functionalities and can handle the whole development
                      process easily.
                    </p>
                    <p>
                      Meanwhile, I think more comments or a more detailed
                      documentation could help other coders to understand this
                      portfolio better.
                    </p>

                    <div className="secondContainer__secondComponentCardTags">
                      <h6>Completeness 5.0 / 5</h6>
                      <h6>Functionality 5.0 / 5</h6>
                      <h6>Readability 3.5 / 5</h6>
                      <h6>Size 3.0 / 5</h6>
                      <h6>Professional 4.0 / 5</h6>
                    </div>
                  </div>
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>

        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring
              delay={300}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0px)" : "translateY(-20px)",
              }}
            >
              {(props) => (
                <div className="secondContainer__left" style={{ ...props }}>
                  <h6>Let the world's top 5% coders to endorse your skills.</h6>

                  <h1>
                    Get your portfolio validated and rated by world's top 5%
                    coders
                  </h1>
                  <Spring
                    delay={300}
                    to={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateX(0px)"
                        : "translateX(10px)",
                    }}
                  >
                    {(props) => (
                      <p style={{ ...props }}>
                        On Skillsme, only the world's top 5% coders that are
                        fully verified by Skillsme can be invited to become a
                        Skillsme Judge. Skillsme Judges are the only qualified
                        people to rate your portfolios. Through this, we ensure
                        that every rating on Skillsme is credible and trusted by
                        various companies and recruiters worldwide.
                      </p>
                    )}
                  </Spring>
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </div>

      <div className="secondContainer__thirdComponent">
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring
              delay={300}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0px)" : "translateY(-20px)",
              }}
            >
              {(props) => (
                <div className="secondContainer__left" style={{ ...props }}>
                  <h6>
                    Skillsme will help you engage up to 10K+ companies weekly
                  </h6>

                  <h1>
                    Make your portfolios and ratings visible to talent-seeking
                    companies
                  </h1>
                  <p>
                    Skillsme users with the best rated portfolio in the current
                    week will be visible to the companies which are seeking for
                    tech talents. If your skill set matches any of our clients'
                    requirements, your profile will be visible to them on
                    Skillsme. There is no need to put any effort on your CV
                    anymore to display your capability.
                  </p>
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>

        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring
              delay={300}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0px)" : "translateY(200px)",
              }}
            >
              {(props) => (
                <div className="secondContainer__right" style={{ ...props }}>
                  <div className="secondContainer__thirdComponentCard">
                    <div className="secondContainer__thirdComponentSubCard">
                      <img
                        src="https://www.myskillsme.com/images/avatars/github_TCEy18gH8V.jpg"
                        alt=""
                      />
                      <div>
                        <div className="secondContainer__thirdComponentSubCardHeader">
                          <div className="secondContainer__thirdComponentSubCardHeaderTop">
                            <h3>David M.</h3>
                            <h4>Weekly Recommended</h4>
                            <img
                              src="https://www.myskillsme.com/images/medals/l-1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="secondContainer__thirdComponentSubCardHeaderBottom">
                            <h4>React JS: 3.9/5.0 , Top 25%</h4>
                            <h4>Node JS: 3.7/5.0 , Top 30%</h4>
                          </div>
                        </div>
                        <div className="secondContainer__thirdComponentLocation">
                          <h4>Desired location: </h4>
                          <h4>No Preference</h4>
                        </div>
                        <div className="secondContainer__thirdComponentSalary">
                          <h4>Desired location: </h4>
                          <h4>No Preference</h4>
                          <h4>Job Preference: </h4>
                          <h4>No Preference</h4>
                        </div>
                      </div>
                    </div>

                    <div className="secondContainer__thirdComponentSubCard">
                      <img
                        src="https://www.myskillsme.com/images/avatars/clipart1585910.jpg"
                        alt=""
                      />
                      <div>
                        <div className="secondContainer__thirdComponentSubCardHeader">
                          <div className="secondContainer__thirdComponentSubCardHeaderTop">
                            <h3>Tim J.</h3>
                            <h4>Weekly Recommended</h4>
                            <img
                              src="https://www.myskillsme.com/images/medals/a-15.jpg"
                              alt=""
                            />
                            <img
                              src="https://www.myskillsme.com/images/medals/a-23.jpg"
                              alt=""
                            />
                          </div>
                          <div className="secondContainer__thirdComponentSubCardHeaderBottom">
                            <h4>Vue JS: 4.0/5.0 , Top 15%</h4>
                            <h4>MySQL: 3.9/5.0 , Top 25%</h4>
                          </div>
                        </div>
                        <div className="secondContainer__thirdComponentLocation">
                          <h4>Desired location: </h4>
                          <h4>Mt Albert, Auckland, Auckland, New Zealand</h4>
                        </div>
                        <div className="secondContainer__thirdComponentSalary">
                          <h4>Desired salary: </h4>
                          <h4>&gt; 60,000 NZD/yr</h4>
                          <h4>Job Preference: </h4>
                          <h4>Full-time</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </div>

      <div className="secondContainer__fourthComponent">
        <div className="secondContainer__right">
          <img
            className="secondContainer__fourthComponentImage"
            src="https://www.myskillsme.com/images/misc/email.jpg"
            alt=""
          />
        </div>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring
              delay={300}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0px)" : "translateY(-10px)",
              }}
            >
              {(props) => (
                <div className="secondContainer__left" style={{ ...props }}>
                  <h6>Much more efficient than traditional CV recruiting</h6>

                  <h1>
                    Skillsme Ratings will give you a higher chance of an
                    interview invitation
                  </h1>
                  <Spring
                    delay={300}
                    to={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateX(0px)"
                        : "translateX(10px)",
                    }}
                  >
                    {(props) => (
                      <div
                        style={{ ...props }}
                        className="secondContainer__para"
                      >
                        <p>
                          Complete our Talent Pool Catalog to have a higher
                          chance of a job interview invitation. With Skillsme,
                          companies are constantly searching for candidates with
                          high ratings or show ability to improve.
                        </p>
                        <p>
                          On Skillsme, you can also accept multiple interviews
                          from companies worldwide and also manage your upcoming
                          interview on Skillsme.
                        </p>
                      </div>
                    )}
                  </Spring>
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </div>
    </div>
  );
}

export default SecondContainer;
