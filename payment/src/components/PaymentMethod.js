import React from "react";
import "../App.css";
function PaymentMethod() {
  const data = [
    {
      link:
        "https://logos-download.com/wp-content/uploads/2016/03/PayPal_horizontally_Logo_2014.svg",
    },
    {
      link:
        "https://logos-world.net/wp-content/uploads/2020/05/Visa-Logo-700x394.png",
    },
    {
      link:
        "https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo-700x394.png",
    },
    {
      link:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Maestro_logo.svg/1200px-Maestro_logo.svg.png",
    },
    {
      link:
        "https://1000logos.net/wp-content/uploads/2021/05/Discover-logo.png",
    },
    {
      link:
        "https://img.favpng.com/14/25/0/ideal-e-commerce-payment-system-bank-logo-png-favpng-LWeKBUGhE8EtBk1SpVNRH23bP.jpg",
    },
  ];
  return (
    <div className="full">
      Payment method
      <div className="grid">
        {data.map((data, key) => {
          return (
            <div key={key} className="bd">
              <img src={data.link} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PaymentMethod;
