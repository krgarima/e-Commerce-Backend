import React, { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import BestSeller from "../../Components/BestSeller/BestSeller";

export default function Home() {
  useEffect(() => {
    document.title = "Home | Blackmole";
  }, []);

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

            <Link to="/ProductListing">
              <button className="shopNow-btn">Shop Now</button>
            </Link>
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
                />
                <div className="category-puzzle">Puzzles</div>
              </span>
              <span className="categories categories-creative">
                <img
                  className="image-creative"
                  src="/assets/images/christmas.jpg"
                  alt="Christmas-decoration"
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
            />
            <img
              className="image-skills"
              src="/assets/images/cognitiveSkills.jpg"
              alt="Cognitive Skills"
            />
            <img
              className="image-skills"
              src="/assets/images/physicalSkills.jpg"
              alt="Physical Skills"
            />
          </div>

          <h1 className="second-heading">About Blackmole</h1>
          <div className="puzzle-benefits">
            <img
              className="about-company"
              src="/assets/images/about.jpg"
              alt="Emotional Skills"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
