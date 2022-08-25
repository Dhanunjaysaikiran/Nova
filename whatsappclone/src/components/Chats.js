
import React from "react";

function Chats({ChildtoParent}) {

 
  function Open(){
    document.getElementById('cng').style.backgroundColor="#2a3942"
    ChildtoParent(true);
  }
  return (
    <div className="chats">
      <div className="inp">
        <input type="text" id="srch" placeholder="Search" />
       
      </div>
      <div className="contact" onClick={Open} id="cng">
        <div className="flex" >
            <div className="dp"></div><h4>Nitya</h4>
         
        </div>
      </div>
    </div>
  );
}

export default Chats;
