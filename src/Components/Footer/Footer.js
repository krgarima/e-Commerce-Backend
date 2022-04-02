import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="siteInfo">
        <p>Copyright © 2022 Blackmole</p>
        <p className="footer--icons">
          <span>
            <a href="https://github.com/krgarima" target="_blank">
              <i className="fab fa-2x fa-github"></i>
            </a>
          </span>
          <span>
            <a href="https://twitter.com/GarimaK29063577" target="_blank">
              <i className="fab fa-2x fa-twitter"></i>
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/garima-469878175"
              target="_blank"
            >
              <i className="fab fa-2x fa-linkedin"></i>
            </a>
          </span>
        </p>
      </footer>
    </div>
  );
}
