import React, { useState, useEffect } from "react";
import "../App.css";
import App from "../App";
function Details(props) {
  const Info = props.Det[0];
 const [GoBack,SetBack] = useState(false);
  const Data = Info;
 function Back(){
    SetBack(true);
 }

 const Table = (
    <div className="page">
    <div className="item">
      <table className="tab" id="tab1">
        <tbody>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
          <tr className="data">
            <th>First Name</th>
            <td className="text">{Data.first_name}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td className="text">{Data.last_name}</td>
          </tr>
          <tr className="data">
            <th>Date of birth</th>
            <td className="text">{Data.date_of_birth}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td className="text">{Data.address}</td>
          </tr>
          <tr className="data">
            <th>Date of joining</th>
            <td className="text">{Data.date_of_joining}</td>
          </tr>
          <tr>
            <th>Salary</th>
            <td className="text">{Data.salary}</td>
          </tr>
          <tr className="data">
            <th>Desidnation</th>
            <td className="text">{Data.designation}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex">
        <button onClick={Back}>Go Back</button>
      </div>
    </div>
  </div>
 );
  return (
  <>{GoBack?<App/>:Table}</>
  );
}
export default Details;
