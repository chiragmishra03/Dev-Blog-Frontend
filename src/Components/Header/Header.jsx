import React from "react";
import "./Header.scss";
import TypeWriter from "../TypeWrite.js";
import developer from '../../images/developer.png'


const Header = () => {
  const typeWriter = ["Blogs", "Programmers", "Community"];
  return (
    <div className="header">
      <div className="intro">
        <div className="typewriter-holder">
          <h1>DEVELOPER-HUB</h1>
          <p>
            Perfect Place for <TypeWriter  data={typeWriter} />
          </p>
        </div>
      </div>
        <img className="introImg" src={developer} alt="" />
    </div>
  );
};

export default Header;
