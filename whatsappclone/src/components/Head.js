import React from "react";

function Head(GetData) {
  
  return (
    <div className="nav">
      <div className="tir">
        <div className="dp1"></div>
      </div>
      {GetData?<div className="flex" id="gap">
        <div className="dp"></div>
        <h4>Nitya</h4>
      </div>:<></>}
    </div>
  );
}

export default Head;
