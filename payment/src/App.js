import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Shipment from "./components/Shipment";
import ShippingPay from "./components/ShippingPay";
function App() {
  return (
    <div className="App">
      <Nav />
      <ShippingPay />
      <div className="full">
        <Shipment />
      </div>
    </div>
  );
}

export default App;
