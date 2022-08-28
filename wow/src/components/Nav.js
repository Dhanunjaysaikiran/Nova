import React from "react";
import "../App.css";
function Nav() {
  function toggle() {
    const x = document.getElementById("jy");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  return (
    <div className="nav" id="button" onClick={toggle}>
      <div className="toggle">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
      <h1>
        <span>WoW-</span>Talent
      </h1>
    </div>
  );
}

export default Nav;
