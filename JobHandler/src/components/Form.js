import React, { useState } from "react";
import Live from "./Live";
import Home from "./Home";
import "../App.css";

function Form() {
  const [data, SetData] = useState({
    title: "",
    introduction: "",
    resp: "",
    qualification: "",
    salary: "",
    desc: "",
    company: "",
    location: "",
    exp: "",
    wfh: "",
    jobtype: "",
  });
  const [display, Setdisp] = useState({
    title: false,
    introduction: false,
    resp: false,
    qualification: false,
    salary: false,
    desc: false,
    company: false,
    location: false,
    exp: false,
    wfh: false,
    jobtype: false,
  });
  const NewObj = { keys: { display, data } };

  const [Submitted, SetSub] = useState(false);
  function Submit(e) {
    e.preventDefault();
    SetSub(true);
  }
  function handle(e) {
    let NewData = { ...data };
    NewData[e.target.id] = e.target.value;
    SetData(NewData);
  }
  const Case = (event: React.ChangeEvent<HTMLInputElement>) => {
    Setdisp({ ...display, [event.target.id]: !display[event.target.id] });
  };

  let head = "Job Handler";
  const parent = (
    <form action="" className="main" onSubmit={(e) => Submit(e)}>
      <div className="part">
        <Home head={head} />
        <div className="flex">
          <div>
            <input
              type="checkbox"
              name="title"
              id="title"
              onChange={Case}
              className=""
            />
          </div>
          <input
            onChange={(e) => handle(e)}
            value={data.title}
            type="text"
            name="title"
            placeholder="Job Title"
            id="title"
          />
        </div>
      </div>
      <div className="main">
        <div className="flex">
          <div>
            <input
              type="checkbox"
              name="introduction"
              id="introduction"
              onChange={Case}
              className=""
            />
          </div>
          <div className="part" id="bd">
            <h2>Introduction</h2>
            <input
              onChange={(e) => handle(e)}
              value={data.introduction}
              type="text"
              name="introduction"
              id="introduction"
            />
          </div>
        </div>
        <div className="flex">
          <div>
            <input
              type="checkbox"
              name="introduction"
              id="resp"
              onChange={Case}
              className=""
            />
          </div>
          <div className="part" id="bd">
            <h2>Roles and responsibilities</h2>
            <input
              onChange={(e) => handle(e)}
              value={data.resp}
              type="text"
              name="resp"
              id="resp"
            />
          </div>
        </div>
        <div className="flex">
          <div>
            <input
              type="checkbox"
              name=""
              id="exp"
              onChange={Case}
              className=""
            />
          </div>
          <div className="flex-centre" id="bd">
            <h2>Exprience Range</h2>
            <div id="bd">
              <select name="min" onChange={(e) => handle(e)} id="min" className="sel">
                <option value="" disabled defaultValue>
                  Min
                </option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              -
              <select name="max" onChange={(e) => handle(e)} id="max" className="sel">
                <option value="" disabled defaultValue>
                  Min
                </option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
          </div>
        </div>
        <div className="part">
          <input
            type="checkbox"
            name="title"
            id="qualification"
            onChange={Case}
            className=""
          />
          <input
            onChange={(e) => handle(e)}
            value={data.qualification}
            type="text"
            name="qualification"
            placeholder="Qualifications"
            id="qualification"
          />
        </div>
        <div className="part">
          <input
            type="checkbox"
            name="title"
            id="salary"
            onChange={Case}
            className=""
          />
          <input
            onChange={(e) => handle(e)}
            value={data.salary}
            type="text"
            name="salary"
            placeholder="Salary range"
            id="salary"
          />
        </div>
        <div className="part">
          <input
            type="checkbox"
            name="title"
            id="desc"
            onChange={Case}
            className=""
          />
          <input
            onChange={(e) => handle(e)}
            value={data.desc}
            type="text"
            name="desc"
            placeholder="Description "
            id="desc"
          />
        </div>
        <div className="part">
          <input
            type="checkbox"
            name="title"
            id="company"
            onChange={Case}
            className=""
          />
          <input
            onChange={(e) => handle(e)}
            value={data.company}
            type="text"
            name="company"
            placeholder="Company"
            id="company"
          />
        </div>
        <div className="part">
          <input
            type="checkbox"
            name=""
            id="location"
            onChange={Case}
            className=""
          />
          <input
            onChange={(e) => handle(e)}
            value={data.location}
            type="text"
            name="location"
            placeholder="Job Location"
            id="location"
          />
        </div>
        <div className="select">
          <div className="s1">
            <input
              type="checkbox"
              name=""
              id="jobtype"
              onChange={Case}
              className=""
            />
            <select name="jobtype" id="jobtype" onChange={(e) => handle(e)}>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          <div className="s1">
            <input
              type="checkbox"
              name=""
              id="wfh"
              onChange={Case}
              className=""
            />
            <select name="wfh" id="wfh" onChange={(e) => handle(e)}>
              <option value="Remote">Is remote</option>
              <option value="5 days a week">5 days a week</option>
            </select>
          </div>
        </div>
      </div>
     <div id="bd-2">
     <input type="submit" value="Post" />
     </div>
    </form>
  );
  return <div>{Submitted ? <Live NewObj={NewObj} /> : parent}</div>;
}
export default Form;
