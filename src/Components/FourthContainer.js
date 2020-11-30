import React, { useState } from "react";
import "./FourthContainer.css";

import { faq } from "./Faq";
import Footer from "./Footer";

function FourthContainer() {
  const [faqQns, setFaqQns] = useState(faq);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="fourthContainer">
      <div className="fourthContainer__cards">
        <div className="fourthContainer__card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            viewBox="0 0 24 24"
            fill="#1264a3"
            width="57.6"
            height="57.6"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
          </svg>
          <h3>Worldwide Coding Jobs</h3>
          <p>
            Get job interview opportunities from any conutry you wish to work
            in.
          </p>
        </div>
        <div className="fourthContainer__card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            viewBox="0 0 24 24"
            fill="#1264a3"
            width="57.6"
            height="57.6"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
          </svg>
          <h3>Set Desired Salary</h3>
          <p>
            Show your capability and desired salary to filter out companies not
            in your range.
          </p>
        </div>
        <div className="fourthContainer__card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            viewBox="0 0 24 24"
            fill="#1264a3"
            width="57.6"
            height="57.6"
          >
            <g>
              <rect fill="none" height="24" width="24"></rect>
            </g>
            <g>
              <g>
                <path d="M6.05,8.05c-2.73,2.73-2.73,7.15-0.02,9.88c1.47-3.4,4.09-6.24,7.36-7.93c-2.77,2.34-4.71,5.61-5.39,9.32 c2.6,1.23,5.8,0.78,7.95-1.37C19.43,14.47,20,4,20,4S9.53,4.57,6.05,8.05z"></path>
              </g>
            </g>
          </svg>
          <h3>Transparent Platform</h3>
          <p>
            Your rating will only be decided by your portfolios, not your title
            or experience.
          </p>
        </div>
      </div>

      <div className="fourthContainer__reviewSection">
        <div className="fourthContainer__rectangle4"></div>
        <div className="fourthContainer__rectangle5"></div>
        <div className="fourthContainer__rectangle6"></div>
        <h1>Skillsme makes coders expertise intelligible. </h1>
        <div className="scrollable__reviews">
          <div className="testimonial-box">
            <div className="avatar">
              <img
                src="https://www.myskillsme.com/images/testimonial/avatar1.jpg"
                alt=""
              />
            </div>
            <div className="polygon">
              <img
                src="https://www.myskillsme.com/images/testimonial/07.png"
                alt=""
              />
            </div>
            <p>
              I've known the CTO and CEO for more than 3 years. And they really
              have strong passion on creating something new and valuable for
              customers. So I believe they will make this product great in the
              near future.
            </p>
            <h4>Rick Luo</h4>
            <h6>Former Oracle PMTS</h6>
          </div>

          <div className="testimonial-box">
            <div className="avatar">
              <img
                src="https://www.myskillsme.com/images/testimonial/avatar1.jpg"
                alt=""
              />
            </div>
            <div className="polygon">
              <img
                src="https://www.myskillsme.com/images/testimonial/07.png"
                alt=""
              />
            </div>
            <p>
              I've known the CTO and CEO for more than 3 years. And they really
              have strong passion on creating something new and valuable for
              customers. So I believe they will make this product great in the
              near future.
            </p>
            <h4>Rick Luo</h4>
            <h6>Former Oracle PMTS</h6>
          </div>
        </div>
      </div>

      <div className="judgeUsers">
        <h4>60+ Users With Our Judge Badge</h4>
        <h2>Meet Our Judge Users</h2>
        <div className="judgeUsers__headerAnimation"></div>
        <div className="judgeUsers__users">
          <div className="judgeUsers__usersRow">
            <div className="judgeUsers__user">
              <img
                alt="Kyle Martin"
                src="https://www.myskillsme.com/images/judges/kyle_martin_1.jpg"
              />
              <div className="judgeUsers__userCard">
                <h3>Kyle Martin</h3>
                <h4>
                  Site Reliability engineer based in wellington, New Zealand
                </h4>
              </div>
            </div>

            <div className="judgeUsers__user">
              <img
                alt="Aziz Ahmed"
                src="https://www.myskillsme.com/images/judges/aziz_ahmed_1.jpg"
              />
              <div className="judgeUsers__userCard">
                <h3>Aziz Ahmed</h3>
                <h4>Former Scala/Java Developer at Potentia ITD Recruitment</h4>
              </div>
            </div>

            <div className="judgeUsers__user">
              <img
                alt="Richard Hpa"
                src="https://www.myskillsme.com/images/judges/richard_hpa_1.jpg"
              />
              <div className="judgeUsers__userCard">
                <h3>Richard Hpa</h3>
                <h4>Front End Developer at GS1 New Zealand</h4>
              </div>
            </div>

            <div className="judgeUsers__user">
              <img
                alt="Grayson Orr"
                src="https://www.myskillsme.com/images/judges/grayson_orr_1.jpg"
              />
              <div className="judgeUsers__userCard">
                <h3>Grayson Orr</h3>
                <h4>Software Developer at Otago Polytechnic</h4>
              </div>
            </div>

            <div className="judgeUsers__user">
              <img
                alt="Rushabh Master"
                src="https://www.myskillsme.com/images/judges/rushabh_master_1.jpg"
              />
              <div className="judgeUsers__userCard">
                <h3>Rushabh Master</h3>
                <h4>.NET Web Developer at Tomahawk Tourism</h4>
              </div>
            </div>

            <div className="judgeUsers__user">
              <img
                alt="Sherif Gayed"
                src="https://www.myskillsme.com/images/judges/sherif_gayed_1.jpg"
              />
              <div className="judgeUsers__userCard">
                <h3>Sherif Gayed</h3>
                <h4>Former Software Engineer at 2degrees</h4>
              </div>
            </div>

            <div className="judgeUsers__user">
              <img
                alt="Giles Thompson"
                src="https://www.myskillsme.com/images/judges/giles_thompson_1.jpg"
              />
              <div className="judgeUsers__userCard">
                <h3>Giles Thompson</h3>
                <h4>Former Co-Founder and CTO at Glory League</h4>
              </div>
            </div>

            <div className="judgeUsers__user">
              <img
                alt="Tony Liu"
                src="https://www.myskillsme.com/images/judges/tony_liu_1.jpg"
              />
              <div className="judgeUsers__userCard">
                <h3>Tony Liu</h3>
                <h4>Senior Software Engineer at Gentrack Ltd.</h4>
              </div>
            </div>
          </div>

          <div className="judgeUsers__usersRow">
            <div className="judgeUsers__user">
              <img
                alt="Sam Alhambra"
                src="https://www.myskillsme.com/images/judges/sam_alhambra_1.jpg"
              />
              <div className="judgeUsers__userCard">
                <h3>Sam Alhambra</h3>
                <h4>Software Engineer at LPS New Zealand</h4>
              </div>
            </div>

            <div className="judgeUsers__user">
              <img
                alt="DARSHIT PANDYA"
                src="https://www.myskillsme.com/images/judges/darshit_pandya_1.jpg"
              />
              <div className="judgeUsers__userCard">
                <h3>DARSHIT PANDYA</h3>
                <h4>Senior Software Engineer at Serko Ltd.</h4>
              </div>
            </div>

            <div className="judgeUsers__user">
              <img
                alt="Charu Matta"
                src="https://www.myskillsme.com/images/judges/charu_matta_1.jpg"
              />
              <div className="judgeUsers__userCard">
                <h3>Charu Matta</h3>
                <h4>Former Senior Software Engineer at Orange</h4>
              </div>
            </div>

            <div className="judgeUsers__user">
              <img
                alt="Walaa Elzayady"
                src="https://www.myskillsme.com/images/judges/walaa_elzayady_1.jpg"
              />
              <div className="judgeUsers__userCard">
                <h3>Walaa Elzayady</h3>
                <h4>Technology Product Lead</h4>
              </div>
            </div>

            <div className="judgeUsers__user">
              <img
                alt="Tien Nguyen Khac"
                src="https://www.myskillsme.com/images/judges/tien_nguyen_khac_1.jpg"
              />
              <div className="judgeUsers__userCard">
                <h3>Tien Nguyen Khac</h3>
                <h4>Software Engineer at Plexure</h4>
              </div>
            </div>

            <div className="judgeUsers__user">
              <img
                alt="Akshay Raj Gollahalli"
                src="https://www.myskillsme.com/images/judges/akshay_raj_gollahalli_1.jpg"
              />
              <div className="judgeUsers__userCard">
                <h3>Akshay Raj Gollahalli</h3>
                <h4>Teaching Assistant at Auckland University of Technology</h4>
              </div>
            </div>

            <div className="judgeUsers__user">
              <img
                alt="Feng Guo"
                src="https://www.myskillsme.com/images/judges/feng_guo_1.jpg"
              />
              <div className="judgeUsers__userCard">
                <h3>Feng Guo</h3>
                <h4>Software Developer at Oracle</h4>
              </div>
            </div>

            <div className="judgeUsers__user">
              <img
                alt="Ayush Narula"
                src="https://www.myskillsme.com/images/judges/ayush_narula_1.jpg"
              />
              <div className="judgeUsers__userCard">
                <h3>Ayush Narula</h3>
                <h4>Senior Javascript Programmer at Upwork</h4>
              </div>
            </div>
          </div>

          <div className="judgeUsers__usersRow">
            <div className="judgeUsers__user">
              <img
                alt="Divay Shrivastav"
                src="https://www.myskillsme.com/images/judges/divay_shrivastav_1.jpg"
              />
              <div className="judgeUsers__userCard">
                <h3>Divay Shrivastav</h3>
                <h4>Senior Test Engineer</h4>
              </div>
            </div>

            <div className="judgeUsers__user">
              <img
                alt="Daniel Munn"
                src="https://www.myskillsme.com/images/judges/daniel_munn_1.jpg"
              />
              <div className="judgeUsers__userCard">
                <h3>Daniel Munn</h3>
                <h4>2020 Skillsme Hackathon Winner</h4>
              </div>
            </div>

            <div className="judgeUsers__user">
              <img
                alt="Cheng-Zhen Yang"
                src="https://www.myskillsme.com/images/judges/cheng_zhen_yang_1.jpg"
              />
              <div className="judgeUsers__userCard">
                <h3>Cheng-Zhen Yang</h3>
                <h4>2020 Skillsme Hackathon Winner</h4>
              </div>
            </div>

            <div className="judgeUsers__user">
              <img
                alt="Hiruna Jayamanne"
                src="https://www.myskillsme.com/images/judges/hiruna_jayamanne_1.jpg"
              />
              <div className="judgeUsers__userCard">
                <h3>Hiruna Jayamanne</h3>
                <h4>2020 Skillsme Hackathon Winner</h4>
              </div>
            </div>

            <div className="judgeUsers__user">
              <img
                alt="Philip Dolbel"
                src="https://www.myskillsme.com/images/judges/philip_dolbel_1.jpg"
              />
              <div className="judgeUsers__userCard">
                <h3>Philip Dolbel</h3>
                <h4>2020 Skillsme Hackathon Winner</h4>
              </div>
            </div>

            <div className="judgeUsers__user">
              <img
                alt="Ratha Long"
                src="https://www.myskillsme.com/images/judges/ratha_long_1.jpg"
              />
              <div className="judgeUsers__userCard">
                <h3>Ratha Long</h3>
                <h4>Lead Engineer at Frenzy / Optiki</h4>
              </div>
            </div>

            <div className="judgeUsers__user">
              <img
                alt="Rey Vincent Babilonia"
                src="https://www.myskillsme.com/images/judges/rey_vincent_babilonia_1.jpg"
              />
              <div className="judgeUsers__userCard">
                <h3>Rey Vincent Babilonia</h3>
                <h4>Senior Software Developer at Air New Zealand</h4>
              </div>
            </div>

            <div className="judgeUsers__user">
              <img
                alt="Jianbin Chen"
                src="https://www.myskillsme.com/images/judges/jianbin_chen_1.jpg"
              />
              <div className="judgeUsers__userCard">
                <h3>Jianbin Chen</h3>
                <h4>Full Stack Developer at Brave New Coin</h4>
              </div>
            </div>

            <div className="judgeUsers__user">
              <img
                alt="Patrick Tan"
                src="https://www.myskillsme.com/images/judges/patrick_tan_1.jpg"
              />
              <div className="judgeUsers__userCard">
                <h3>Patrick Tan</h3>
                <h4>Former Full Stack Developer at TVNZ</h4>
              </div>
            </div>

            <div className="judgeUsers__user">
              <img
                alt="45+ more"
                src="https://www.myskillsme.com/images/judges/more_1.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="faqContainer">
        <div className="faq__left">
          <img src="https://www.myskillsme.com/images/faq/01.png" alt="" />
        </div>
        <div className="faq__right">
          <small>FAQ</small>
          <h1>Frequently Asked Question</h1>
          <div className="judgeUsers__headerAnimation"></div>
          <div className="faq__questions">
            {faqQns?.map((item, idx) => (
              <div className="faq__question" key={idx}>
                <button key={idx} onClick={() => setShowAnswer(idx)}>
                  {idx + 1}. {item.qn}
                </button>
                {showAnswer === idx
                  ? item.answer?.map((ans) => <p>{ans}</p>)
                  : null}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FourthContainer;
