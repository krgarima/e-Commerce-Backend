import React from 'react';
import "./Cart.css";

export default function Cart() {
  return (
    <div className="cart">
                        <h1 className="cart-Heading"><span>My Cart</span><span>(1)</span></h1>
                        <div className="cart-Container center wrap">
                        <div className="card2 horizontal-Card">
                            <aside className="float-cardLeft">
                                    <div className="background-Image">
                                            <img className="card-img2" src="/assets/images/bg5.jpg" alt="photo" />
                                    </div>
                            </aside>
                            <aside>
                                    <div className="card-title2">
                                            <h2>BlackMole India Map Wooden Puzzle, Statewise Cut, Easy to Hold knobs, Beautiful.
                                                    Illustration with Major Attractions. </h2>
                                    </div>
                                    <div className="description1">
                                            <p className="item-price">₹ 3500</p>
                                            <p>
                                                    <label for="quantity">Quantity:</label>
                                                    <input className="itemQuantity" type="number" id="quantity" name="quantity" min="1"
                                                            max="5"/>
                                            </p>
                                    </div>
                                    <div className="horizontalCard-footer">
                                            <button className="horizontal-btn removeItem-btn">Remove from Cart</button>
                                            <button className="horizontal-btn moveItem-btn">Move to Wishlist</button>
                                    </div>
                            </aside>
                        </div>

                        <div className="card3 text-Card">
                            <div className="card3-title">
                                    <h2 className="card-details">Price Details</h2>
                                    <hr/>
                            </div>
                            <div className="description3">
                                    <p className="space"><span>Price:</span><span>₹ 1500</span></p>
                                    <p className="space"><span>Quantity:</span><span>2</span></p>
                                    <p className="space"><span>Discount:</span><span>₹ 200</span></p>
                                    <hr/>
                                    <p className="total-price space"><span>TOTAL AMOUNT</span><span>₹ 2800</span></p>
                                    <hr/>
                                    <p>You will save ₹ 200 on this order.</p>
                            </div>
                            <div className="txtCard-footer">
                                    <button className="order-btn">PLACE ORDER</button>
                            </div>
                        </div>
                    </div>
                    </div>
  )
}
