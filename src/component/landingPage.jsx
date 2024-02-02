import "./style.css";
import { Navbar } from "./navbar";
import { Mywork } from "./works";
import { myPreviosWork } from "../data/data";
import Me from "../img/me.PNG";
import { useState } from "react";
import SassIcon from "../img/sass_icon.png";
import {
  ReactIcon,
  JsIcon,
  Html,
  Css,
  Sass,
  TypscriptIcon,
  NodeJs,
  GitIcon,
} from "../icon/icons";

export function LandingPagr() {
  const [myWork, setMywork] = useState(myPreviosWork);
  // console.log(Icons);
  return (
    <div
      className="landingPage"
      style={{ background: "#fef7f7", width: "100vw", height: "100vh" }}>
      <Navbar />
      <div className="landingWrapper">
        <div className="leftLanding">
          <h1>
            Hi, my <br /> name is <span> Nikki </span>{" "}
          </h1>
          <h3>I'm a junior web developer</h3>
        </div>
        <div className="rightLanding">
          <div className="imgShadow">
            <img className="myPhoto" src={Me} alt="my photo" />
          </div>
        </div>
      </div>

      <div className="scroll">
        <h5 className="scrollText">SCROLL</h5>
        <div className="scrollLine" />
      </div>
      <div className="myworkZone">
        {myWork?.map((work, i) => {
          return <Mywork data={work} key={i} />;
        })}
      </div>
      <div className="techStack">
        <h4 className="techStackHeader">Tech Stack </h4>

        <div className="icons">
          <Html className="techIcon" />
          <Css />
          <JsIcon />
          <ReactIcon />
          <TypscriptIcon />
          <img src={SassIcon} alt="Sass Icon" className="techIcon" />
          <NodeJs />
        </div>
      </div>
    </div>
  );
}
