import React from "react";
import Search from "./logos/Search.svg";
import Cart from "./logos/Cart.svg";
import Profile from "./logos/Profile.svg";
import Logo from "./logos/Logo.svg";
function Nav() {
  return (
    <div className="nav">
      <div className="flex tir">
        <img src={Logo} alt="" />
        <div className="gap">
          <span className="cs">E-</span>
          Shop
        </div>
      </div>
      <div className="part">
        <div className="click">Men</div>
        <div className="click">Women</div>
        <div className="click">kids</div>
      </div>
      <div className="middle">
        <img src={Search} alt="" />
        <img src={Cart} alt="" />
        <img src={Profile} alt="" />
      </div>
    </div>
  );
}

export default Nav;
