import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import { FacebookRounded } from "@mui/icons-material";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQG2WCpax6X2ig/profile-displayphoto-scale_200_200/B56ZpdmCliJsAY-/0/1762506849419?e=1766016000&v=beta&t=GWytMUArYHJrqWBeayNKPIVA7-xvTrTIxm-caP418aA"
            alt="Avatar"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/QDuyPhan"
              target="_blhttps://www.linkedin.com/in/phan-quang-duy/ank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>

            <a
              href="https://www.facebook.com/duy.phan.812527"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookRounded />
            </a>
          </div>
          <h1>Phan Quang Duy</h1>
          <p>Mobile Engineer</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/QDuyPhan"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/phan-quang-duy/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
