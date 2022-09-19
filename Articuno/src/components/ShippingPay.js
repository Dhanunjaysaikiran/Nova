import React from "react";
import Truck from "./logos/TruckBig.svg";
import Cart from "./logos/Cart.svg";
function ShippingPay() {
  return (
    <div className="full pad botm">
      Shipping and payment
      <div className="topgap flex btw">
        <div>
          {" "}
          <button className="green xp">Login</button>
          <button className="gap xp">Signup</button>
        </div>
        <div className="log flex">
          <div className="lop">
            <img src={Cart} alt="" />
          </div>
          <div className="poly">
            {" "}
            <img src={Truck} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingPay;
