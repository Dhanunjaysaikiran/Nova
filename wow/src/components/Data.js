import React, { useState, useEffect } from "react";
import down from "./down1.svg";
import active from  './active.svg';
import circle from "./circle.svg";
import danger from "./danger.svg";
import person from "./person.svg";
import activechurn from "./activechurn.svg";
function Data() {
  const [Data, setData] = useState("");
  useEffect(() => {
    fetch(
      "https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticcount?fromdate=2022-07-01&todate=2022-07-14"
    ).then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);
  const file = Data;
  console.log(file);

  

  return (
    <div className="half">
      {file
        ? Object.values(file).map((x) => {
            return (
              <div className="grid" key={x.churn}>
                <div className="item">
                  <div className="sub">
                    <div className="white" id="down">
                      <img src={down} alt="" />
                    </div>
                    <div>
                      <h2>{x.totalInstall}</h2>
                      <p>App Installed</p>
                    </div>
                   
                  </div>
                </div>
                <div className="item">
                  <div className="sub">
                    <div className="white">
                    <img src={active} alt="" />
                    </div>
                    <div>
                      <h2>{x.activeinstall}</h2>
                      <p>Active Installs</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="sub">
                    <div className="white">
                    <img src={circle} alt="" />
                    </div>
                    <div>
                      <h2>{x.churn}</h2>
                      <p>Churn Rate</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="sub">
                    <div className="white">
                    <img src={danger} alt="" />
                    </div>
                    <div>
                      <h2>{x.totaluninstall}</h2>
                      <p>App Un-Installed</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="sub">
                    <div className="white">
                    <img src={person} alt="" />
                    </div>
                    <div>
                      <h2>{x.aliveappusers}</h2>
                      <p>Alive Apps users</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="sub">
                    <div className="white">
                    <img src={activechurn} alt="" />
                    </div>
                    <div>
                      <h2>{x.alivechurn}</h2>
                      <p>Alive Churn Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Data;
