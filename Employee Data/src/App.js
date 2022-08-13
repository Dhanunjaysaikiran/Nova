import React, { useState, useEffect } from "react";
import "./App.css";
import Details from "./components/details";

function App() {
  const [Data, SetData] = useState([]);
  const [Det,SetLink] = useState([])
  const [EmployeeData,SetValue]=useState(false);

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees"
    ).then((result) => {
      result.json().then((resp) => {
        SetData(resp);
      });
    });
  }, []);

  function OpenData(id){
   let filteredInfo =Data.filter(Data=>Data.id == id);
   SetLink(filteredInfo);
   SetValue(true);
   console.log(filteredInfo);
  
  }

  const Parent = (
    <div className="App">
    <div className="box">
      <table className="tab">
       <thead>
       <tr>
        <th><p>Id</p></th>
        <th>Fist name</th>
        <th>Last name</th>
        <th>Date of birth</th>
        <th>Address</th>
        <th>Date of joining</th>
        <th>Salary</th>
        <th>Designation</th>
        </tr>
       </thead>
        {Data.map((Data) => {
          return (
            <tbody key={Data.id}>
              <tr className="data" key={Data.id}>
              <td onClick={(e)=>OpenData(Data.id)}><p  className="click"><a >{Data.id}</a></p></td>
              <td className="text" >{Data.first_name}</td>
              <td className="text">{Data.last_name}</td>
              <td className="text">{Data.date_of_birth}</td>
              <td className="text">{Data.address}</td>
              <td className="text">{Data.date_of_joining}</td>
              <td className="text">$ {Data.salary}</td>
              <td className="text">{Data.designation}</td>
            </tr>
            </tbody>
          );
        })}
        
      </table>
    </div>
    
  </div>
  )
  return <div>{EmployeeData?<Details Det={Det}/>:Parent}</div>
}

export default App;
