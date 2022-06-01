import React, { useState, useContext } from "react";
import { CartContext } from "../../Context/cart-context";
import "./Checkout.css";

export default function Checkout() {
  const { cart } = useContext(CartContext);
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [addAddress, setAddAddress] = useState({
    name: "",
    street: "",
    city: "",
    pincode: "",
    state: "",
    country: "",
    mobile: "",
  });
  const [selectedAddress, setSelectedAddress] = useState({
    name: "Marry Joe",
    street: "01, Palam Vihar Marg",
    city: "Gurgaon",
    pincode: "122017",
    state: "Haryana",
    country: "India",
    mobile: "9876543210",
    selectedAddress: true,
  });
  const [addressList, setAddressList] = useState([
    {
      name: "Marry Joe",
      street: "01, Palam Vihar Marg",
      city: "Gurgaon",
      pincode: "122017",
      state: "Haryana",
      country: "India",
      mobile: "9876543210",
      selectedAddress: true,
    },
    {
      name: "Sherlock Holmes",
      street: "221b, Baker Street",
      city: "London",
      pincode: "000000",
      state: "aaaaa",
      country: "United Kingdom",
      mobile: "+44 20 7224 3688",
      selectedAddress: false,
    },
  ]);

  const totalPrice = cart
    .map((cartItem) => cartItem.price * cartItem.quantity)
    .reduce((acc, value) => acc + value, 0);
  const totalQty = cart
    .map((cartItem) => cartItem.quantity)
    .reduce((acc, value) => acc + value, 0);

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    // const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
    //   t.json()
    // );
    // console.log(data);
    const options = {
      key: "rzp_test_JTpMiaE4ZqOyY7", // Enter the Key ID generated from the Dashboard
      key_id: "rzp_test_JTpMiaE4ZqOyY7",
      key_secret: "dj5fTAWTojnXCzQSNlIKjnQm",
      name: "Blackmole Pvt Ltd",
      currency: "INR",
      amount: totalPrice * 100,
      // order_id: "43434",
      description: "Thankyou for shopping with us",
      // image: "/",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        console.log(response);
        alert(
          ` Your payment is done with order no: 
          ${response.razorpay_payment_id}`
        );
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      prefill: {
        name: "Marry Joe",
        email: "marryjoe@gmail.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="cart checkout">
      <h1 className="cart-Heading">
        {showAddAddress ? <span>Address</span> : <span>Checkout</span>}
      </h1>
      <div className="cart-Container center wrap">
        {!showAddAddress && (
          <div className="address">
            <h2>Select address</h2>
            {addressList.map((address) => {
              return (
                <div key={address.id} className="center">
                  <input
                    type="radio"
                    name="address-select"
                    id="select-address"
                    value={JSON.stringify(address)}
                    onChange={(e) =>
                      setSelectedAddress(JSON.parse(e.target.value))
                    }
                  />

                  <label htmlFor="select-address">
                    <p className="deliver-to">{address.name}</p>
                    <p>{address.street}</p>
                    <p>
                      {address.city} - {address.pincode}
                    </p>
                    <p>{address.country}</p>
                    <p>{address.mobile}</p>
                  </label>
                </div>
              );
            })}
            <section className="txtCard-footer">
              <button
                className="order-btn btn-addAddress"
                onClick={() => setShowAddAddress(true)}
              >
                + Add address
              </button>
            </section>
          </div>
        )}

        {!showAddAddress && (
          <div className="order-Summary">
            <section className="orders">
              <h2 className="card-details">Order Summary</h2>
              <hr />
              {cart.map(({ title, price, quantity }) => {
                return (
                  <div className="break-word">
                    <span>
                      {title} - (₹ {price} x {quantity})
                    </span>
                    <span className="price-qty"> = ₹ {price * quantity}</span>
                  </div>
                );
              })}
            </section>
            <hr />
            <section className="description3">
              <h2 className="card-details">Price Details</h2>
              <hr />
              <p className="space">
                <span>Price:</span>
                <span>₹ {totalPrice}</span>
              </p>
              <p className="space">
                <span>Quantity:</span>
                <span>{totalQty}</span>
              </p>
              <p className="space">
                <span>Discount:</span>
                <span>₹ {totalQty * 100}</span>
              </p>
              <hr />
              <p className="total-price space">
                <span>TOTAL AMOUNT</span>
                <span>₹ {totalPrice - totalQty * 100}</span>
              </p>
            </section>
            <hr />
            <section className="delivery-Address">
              <h2 className="card-details">Deliver To</h2>
              <hr />
              <div>
                <p className="deliver-to">{selectedAddress.name}</p>
                <p>{selectedAddress.street}</p>
                <p>
                  {selectedAddress.city} - {selectedAddress.pincode}
                </p>
                <p>{selectedAddress.country}</p>
                <p>{selectedAddress.mobile}</p>
              </div>
            </section>
            <hr />
            <section className="txtCard-footer">
              <button className="order-btn" onClick={makePayment}>
                PLACE ORDER
              </button>
            </section>
          </div>
        )}

        {showAddAddress && (
          <form className="new-address">
            <h3>New Address</h3>
            <input
              type="text"
              placeholder="Name"
              value={addAddress.name}
              onChange={(e) =>
                setAddAddress({ ...addAddress, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Street"
              value={addAddress.street}
              onChange={(e) =>
                setAddAddress({ ...addAddress, street: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="City"
              value={addAddress.city}
              onChange={(e) =>
                setAddAddress({ ...addAddress, city: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Pincode"
              value={addAddress.pincode}
              onChange={(e) =>
                setAddAddress({ ...addAddress, pincode: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="State"
              value={addAddress.state}
              onChange={(e) =>
                setAddAddress({ ...addAddress, state: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Country"
              value={addAddress.country}
              onChange={(e) =>
                setAddAddress({ ...addAddress, country: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Mobile"
              value={addAddress.mobile}
              onChange={(e) =>
                setAddAddress({ ...addAddress, mobile: e.target.value })
              }
            />
            <div className="btn-address">
              <button
                onClick={() => {
                  setShowAddAddress(false);
                  setAddAddress({
                    name: "",
                    street: "",
                    city: "",
                    pincode: "",
                    state: "",
                    country: "",
                    mobile: "",
                  });
                }}
              >
                Cancel
              </button>
              <button
                className="add-newAddress"
                disabled={
                  !addAddress.name ||
                  !addAddress.street ||
                  !addAddress.city ||
                  !addAddress.pincode ||
                  !addAddress.state ||
                  !addAddress.country ||
                  !addAddress.mobile
                }
                onClick={(e) => {
                  e.preventDefault();
                  setAddressList([...addressList, addAddress]);
                  setAddAddress({
                    name: "",
                    street: "",
                    city: "",
                    pincode: "",
                    state: "",
                    country: "",
                    mobile: "",
                  });
                  setShowAddAddress(false);
                }}
              >
                Add
              </button>
            </div>
            <button
              className="add-dummyAddress"
              onClick={(e) => {
                e.preventDefault();
                setAddAddress({
                  name: "Mukul Desai",
                  street: "03, Avishkar Building",
                  city: "Mumbai",
                  pincode: "401107",
                  state: "Maharashtra",
                  country: "India",
                  mobile: "9143435354",
                });
              }}
            >
              Add Dummy values
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
