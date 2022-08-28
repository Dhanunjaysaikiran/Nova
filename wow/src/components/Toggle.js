import React from 'react'

function Toggle() {
  function toggle() {
    const x = document.getElementById("jy");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  return (
    <div className='tog' id='jy'>
        <div onClick={toggle} className="but">X</div>
      <div className="prof">
        <h4>Dashboard</h4>
      </div>
      <div className="prof">
        <h4>Categories</h4>
      </div>
      <div className="prof">
        <h4>FAQ's</h4>
      </div>
      <div className="prof">
        <h4>Personal User </h4>
      </div>
      <div className="prof">
        <h4>Push Notifications</h4>
      </div>
      <div className="prof">
        <h4>Help Page</h4>
      </div>
      <div className="prof">
        <h4>Contact Us</h4>
      </div>
    </div>
  )
}

export default Toggle
