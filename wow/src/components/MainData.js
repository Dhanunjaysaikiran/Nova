import React, { useState, useEffect } from "react";

function MainData() {
  const [Data, setData] = useState("");
  const [filter, SetFilter] = useState(10);
  useEffect(() => {
    fetch(
      "https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=2022-06-01&todate=2022-07-01"
    ).then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);
  function OnChange(e) {
    e.preventDefault();
    let num = e.target.value;
    SetFilter(num);
    console.log(num);
  }
  const NewData = Data.data;

  return (
    <div className="bg " id="full">
      <div className="top">
        <div>
          <label htmlFor="">Show</label>
          <select name="filter" id="" onChange={(e) => OnChange(e)}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
          </select>
        </div>
        <p>Entries</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Day Installs</th>
            <th>Platform</th>
            <th>Day Uninstalls</th>
            <th>Platform</th>
            <th>Churn Rate</th>
            <th>Churn Platform</th>
          </tr>
        </thead>
        <tbody>
          {NewData
            ? NewData.slice(0,filter).map((data) => {
                return (
                  <tr key={data.created_At} id="hv">
                    <td>{data.created_At.slice(0,10)}</td>
                    <td>{data.totalinstall}</td>
                    <td>
                      <div>
                        <p>{data.android_install}</p>
                        <p>{data.ios_install}</p>
                      </div>
                    </td>
                    <td>{data.totaluninstall}</td>
                    <td>
                      <div>
                        <p>{data.android_uninstall}</p>
                        <p>{data.ios_uninstall}</p>
                      </div>
                    </td>
                    <td>{data.totalchurn}</td>
                    <td>
                      <div>
                        <p>{data.android_churn}</p>
                        <p>{data.ios_churn}</p>
                      </div>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default MainData;
