import React, {useState} from 'react';
import "./Home.css"
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import BestSeller from '../../Components/BestSeller/BestSeller';

export default function Home() {

  const [bestSeller, setBestSeller] = useState([{
    _id: uuid(),
    title: "Wooden Puzzle Toy for Vegetables Identification with Cute Picture for Kids. First Learning Toy. ",
    price: "349",
    discount: "22% off",
    minAge: "2 years",
    maxAge: "5 years",
    categoryName: "Puzzles",
    imgUrl: "/public/assets/images/bg7.jpg",
  },
  {
    _id: uuid(),
    title: "India Map Wooden Puzzle, State wise Cut, Easy to Hold knobs, Beautiful Illustration with Major Attractions.",
    price: "449",
    discount: "18% off",
    minAge: "2 years",
    maxAge: "5 years",
    categoryName: "Puzzles",
    imgUrl: "/public/assets/images/bg7.jpg",
  },
  {
    _id: uuid(),
    title: "Quizine: India Map Poster Activity Kit. Have Fun answering The Questions with Stickers on India's Poster! ",
    price: "499",
    discount: "23% off",
    minAge: "4 years",
    maxAge: "above",
    categoryName: "Puzzles",
    imgUrl: "/public/assets/images/bg7.jpg",
  },
  {
    _id: uuid(),
    title: 'Solar System Puzzle, 60 Pc, 12"x18", Age 4+, Designed and Made in India. The Best Floor Puzzles for Your Kids! ',
    price: "499",
    discount: "9% off",
    minAge: "4 years",
    maxAge: "above",
    categoryName: "Puzzles",
    imgUrl: "/public/assets/images/bg7.jpg",
  },
]);
  
  return (
    <div>
     <section className="main-content">
                        <div className="home__page--img">
                            {/* <img className="home-bg" src="/assets/images/bg2.jpg" alt="Background image"/> */}
                            <h1 className="company-Info first-heading">Create. Play. Learn.</h1>
                            <div className="welcomeMsg">
                                <h2 className="discount-para">upto 70% off</h2>
                                <button className="shopNow-btn"><Link to="/ProductListing">Shop Now</Link></button>
                            </div>
                        </div>
                        <hr/>


                        <div class="home__page--categories">

                            <h1 class="second-heading">Best Selling</h1>
                            <div class="bestSelling">

                              <p>Note: I will add later</p>
                              {/* <BestSeller products={bestSeller}/> */}

                            </div>

                            <h1 class="second-heading">Top Categories</h1>
                            <div class="top-categories">

                              <span className="categories categories-puzzles">
                                <img className="image-puzzle" src="/assets/images/puzzlesImg.jpg" alt="puzzle" srcset="" />
                                <div className="category-puzzle">Puzzles</div>
                              </span>
                              <span className="categories categories-creative">
                                <img className="image-creative" src="/assets/images/christmas.jpg" alt="Christmas-decoration" srcset="" />
                                <div className="category-creative">Creative</div>
                              </span>
                                                                                        
                            </div>

                            <h1 class="second-heading">Benefits of Puzzles</h1>
                            <div class="puzzle-benefits">
                            <img className="image-skills" src="/assets/images/emotionalSkills.jpg" alt="Emotional Skills" srcset="" />
                            <img className="image-skills" src="/assets/images/cognitiveSkills.jpg" alt="Cognitive Skills" srcset="" />
                            <img className="image-skills" src="/assets/images/physicalSkills.jpg" alt="Physical Skills" srcset="" />
                            </div>

                            <h1 class="second-heading">About Blackmole</h1>
                            <div class="puzzle-benefits">
                            <img className="about-company" src="/assets/images/about.jpg" alt="Emotional Skills" srcset="" />
                            </div>


                        </div>

       </section>
    </div>
  )
}
