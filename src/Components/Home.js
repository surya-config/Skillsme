import React, { useEffect } from "react";
import "./Home.css";
import Header from "./Header";
import Banner from "./Banner";
import FirstContainer from "./FirstContainer";
import SecondContainer from "./SecondContainer";
import ThirdContainer from "./ThirdContainer";
import FourthContainer from "./FourthContainer";
import FifthContainer from "./FifthContainer";
import Footer from "./Footer";

function Home() {
  useEffect(() => {
    window.scrollTo(-50, -50);
  }, []);
  return (
    <div className="home">
      <div className="header__component">
        <Header />
        <Banner />
      </div>

      <FirstContainer />
      <SecondContainer />
      <ThirdContainer />
      <FourthContainer />
      <FifthContainer />
    </div>
  );
}

export default Home;
