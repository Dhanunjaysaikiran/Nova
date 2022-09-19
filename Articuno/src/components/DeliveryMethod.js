import React from "react";

function DeliveryMethod() {
  const data = [
    {
      link:
        "https://seeklogo.com/images/I/inpost-logo-F04BCA29D0-seeklogo.com.png",
      cost: "$20.00",
    },
    {
      link:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/DPD_logo_%282015%29.svg/2560px-DPD_logo_%282015%29.svg.png",
      cost: "$12.00",
    },
    {
      link: "https://logos-world.net/wp-content/uploads/2020/08/DHL-Emblem.png",
      cost: "$15.00",
    },
    {
      link:
        "https://logos-download.com/wp-content/uploads/2016/06/FedEx_logo_orange-purple.png",
      cost: "$10.00",
    },
  ];
  return (
    <div className="full">
      Delivery method
      <div className="grid2">
        {data.map((data, key) => {
          return (
            <div className="bd" key={key}>
              <img src={data.link} alt="" />
              <span className="gap">{data.cost}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DeliveryMethod;
