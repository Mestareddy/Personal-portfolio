import { React, useRef, useEffect } from "react";
import "./intro.scss";
import { init } from "ityped";

const Intro = () => {
  const textRef = useRef(null);

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web Developer", "Web Designer", "IT Specialist", "Content Manager"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="man" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Edikan Bassey</h1>
          <h3>
            A Freelance <span ref={textRef}></span>
          </h3>
        </div>

        <a href="#portfolio">
          <i className="fas fa-chevron-down arrowDown"></i>
        </a>
      </div>
    </div>
  );
};

export default Intro;
