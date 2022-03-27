import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import BestSeller from "../../Components/BestSeller/BestSeller";

export default function Home() {
  return (
    <div>
      <section className="main-content">
        <div className="home__page--img">
          <img
            className="home-bg"
            src="/assets/images/homeBG.jpg"
            alt="Background image"
          />
          <h1 className="company-Info first-heading">Create. Play. Learn.</h1>
          <div className="welcomeMsg">
            <h2 className="discount-para">upto 70% off</h2>
            <button className="shopNow-btn">
              <Link to="/ProductListing">Shop Now</Link>
            </button>
          </div>
        </div>
        <hr />

        <div className="home__page--categories">
          <h1 className="second-heading">Best Selling</h1>
          <Link to="/ProductListing">
            <div className="bestSelling">
              <BestSeller />
            </div>
          </Link>

          <h1 className="second-heading">Top Categories</h1>
          <Link to="/ProductListing">
            <div className="top-categories">
              <span className="categories categories-puzzles">
                <img
                  className="image-puzzle"
                  src="/assets/images/puzzlesImg.jpg"
                  alt="puzzle"
                  srcset=""
                />
                <div className="category-puzzle">Puzzles</div>
              </span>
              <span className="categories categories-creative">
                <img
                  className="image-creative"
                  src="/assets/images/christmas.jpg"
                  alt="Christmas-decoration"
                  srcset=""
                />
                <div className="category-creative">Creative</div>
              </span>
            </div>
          </Link>

          <h1 className="second-heading">Benefits of Puzzles</h1>
          <div className="puzzle-benefits">
            <img
              className="image-skills"
              src="/assets/images/emotionalSkills.jpg"
              alt="Emotional Skills"
              srcset=""
            />
            <img
              className="image-skills"
              src="/assets/images/cognitiveSkills.jpg"
              alt="Cognitive Skills"
              srcset=""
            />
            <img
              className="image-skills"
              src="/assets/images/physicalSkills.jpg"
              alt="Physical Skills"
              srcset=""
            />
          </div>

          <h1 className="second-heading">About Blackmole</h1>
          <div className="puzzle-benefits">
            <img
              className="about-company"
              src="/assets/images/about.jpg"
              alt="Emotional Skills"
              srcset=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
