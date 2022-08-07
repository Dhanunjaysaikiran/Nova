import React,{useState} from "react";
import Home from "./Home";
import Form from "./Form";

function Live(props) {
    const [GoBack,SetBack]=useState(false);
  let head = "Live Preview";
  console.log(props.NewObj.keys.display.title);
  const title = props.NewObj.keys.display.title;
  const intoduction = props.NewObj.keys.display.introduction;
  const resp = props.NewObj.keys.display.resp;
  const qualification = props.NewObj.keys.display.qualification;
  const salary = props.NewObj.keys.display.salary;
  const desc = props.NewObj.keys.display.desc;
  const company = props.NewObj.keys.display.company;
  const location = props.NewObj.keys.display.location;
  const exp = props.NewObj.keys.display.exp;
  const wfh = props.NewObj.keys.display.wfh;
  const jobtype = props.NewObj.keys.display.jobtype;

  const Preview = (
    <div id="bd">
         
      <div className="build" id="bd">
      <Home head={head} />
        <div className="flex2">
          <div id="bd">
          {title ? <h1>{props.NewObj.keys.data.title}</h1> : <div id="bd"></div>}
          </div>
        
         {wfh? <div className="oval">{props.NewObj.keys.data.wfh}</div>:<div id="bd"></div>}
       
        </div>
        <div>
        {desc ? (
          <p>
            <b>Job Description :</b>
            {props.NewObj.keys.data.desc}
          </p>
        ) : (
            <div id="bd"></div>
        )}
        </div>
        <div>
        {salary ? (
          <p>
            <b>Salary :</b>
            {props.NewObj.keys.data.salary}
          </p>
        ) : (
            <div id="bd"></div>
        )}
        </div>
        <div>
          {intoduction ? (
            <p>
              <b>Introduction:</b> {props.NewObj.keys.data.introduction}
            </p>
          ) : (
            <div id="bd"></div>
          )}
        </div>
        {resp ? (
          <div>
            <p><b> Roles and resposibilities:</b></p>{" "}
            <p>{props.NewObj.keys.data.resp}</p>
          </div>
        ) : (
            <div id="bd"></div>
        )}
        <div>
          {exp ? (
            <p>
              {" "}
              <b> Preferred experience:</b> {props.NewObj.keys.data.min} to{" "}
              {props.NewObj.keys.data.max} yrs
            </p>
          ) : (
            <div id="bd"></div>
          )}
        </div>
        {qualification ? (
          <div>
            <p><b> Qualifications:</b></p>{" "}
            <p>{props.NewObj.keys.data.qualifications}</p>
          </div>
        ) : (
            <div id="bd"></div>
        )}
        <div>
          {company ? (
            <p>
              <b>Company:</b> {props.NewObj.keys.data.company}
            </p>
          ) : (
            <div id="bd"></div>
          )}
        </div>
        <div>
          {location ? (
            <p>
              <b>Location:</b> {props.NewObj.keys.data.location}
            </p>
          ) : (
            <div id="bd"></div>
          )}
        </div>
        <div>
          {jobtype ? (
            <p>
              <b>Job type:</b> {props.NewObj.keys.data.jobtype}
            </p>
          ) : (
            <div id="bd"></div>
          )}
        </div>
        <div id="bd">
            <input type="button" value="Post a new job" onClick={()=>{SetBack(true);}} />
        </div>
      </div>
    </div>
  )
  return (
    <div className="live" id="bd">
      {GoBack?<Form/>:Preview}
    </div>
  );
}
export default Live;
