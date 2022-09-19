import React from "react";
import "../App.css";
import Truck from "./logos/Truck.svg";
function Cart() {
  const CartItems = [
    {
      value: "T-Shirt",
      link:
        "https://media.istockphoto.com/photos/plain-white-tshirt-on-a-grey-background-picture-id470725592?k=20&m=470725592&s=170667a&w=0&h=tStfiKQpxAt0GSX0B4UodlPmUEB9xKEM9yffisaemfw=",
      cost: 89.99,
      desc: "Summer vibes",
    },
    {
      value: "Basic Slim",
      link:
        "https://5.imimg.com/data5/GX/XW/MY-67450080/mens-black-plain-t-shirt-500x500.jpg",
      cost: 69.99,
      desc: "Fit T-Shirt",
    },
  ];
  const sum = CartItems[0].cost + CartItems[1].cost;
  return (
    <div className="full center flex col">
      <div className="flex center">
        <div className=" dp"> Your Cart</div>
      </div>
      {CartItems.map((item, key) => {
        return (
          <div key={key} className="flex wd full center gp">
            <div className="dp flex  ">
              <img src={item.link} alt="" />
              <div className="gap par">
                <p>{item.value}</p>
                <div className="flex full btw">
                  <p>{item.desc}</p>
                  <p>${item.cost}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="full center flex ">
        <div className="hi">
          <p className="a">Total cost</p>
          <p>${sum}</p>
        </div>
      </div>
      <div className="full center flex">
        <img src={Truck} alt="" />
        <p className="gap a">
          You are <b>$30.02</b> away <br /> from free shipping.
        </p>
      </div>
    </div>
  );
}

export default Cart;
