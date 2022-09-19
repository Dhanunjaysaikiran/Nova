import React, { useState } from "react";
import FormikControl from "./FormikControl";
import { Form, Formik } from "formik";
import Arrow from "./logos/Arrow.svg";
import * as yup from "yup";
import PaymentMethod from "./PaymentMethod";
import DeliveryMethod from "./DeliveryMethod";
import Cart from "./Cart";
import "../App.css";
function Shipment() {
  const InitialValues = {
    email: "",
    firstname: "",
    lastname: "",
    city: "",
    address: "",
    postal: "",
    phone: "",
    country: "",
  };
  const Validation = yup.object({
    email: yup.string().required("Please enter your email"),
    firstname: yup.string().required("Please enter your first name"),
    lastname: yup.string().required("Please enter your last name"),
    city: yup.string().required("City name required"),
    address: yup.string().required("Enter your address"),
    postal: yup.string().required("please enter your postal zip code"),
    phone: yup
      .string()
      .min(10, "please enter a valid number")
      .max(10, "please enter a valid number")
      .required("Please enter your mobile number"),
    country: yup.string().required("Please enter your country"),
  });

  const [Reco, SetReco] = useState([]);
  const OnSubmit = (values) => {
    SetReco([...Reco, values]);
    if (Reco.length > 0) {
      console.log(Reco);
    }
  };
  return (
    <div className="full pd">
      <div className="flex full">
        <Formik
          initialValues={InitialValues}
          validationSchema={Validation}
          onSubmit={OnSubmit}
        >
          {(Formik) => (
            <div className="full">
              <Form>
                <div className="flex">
                  <div className="quarter ">
                    Shipping Information
                    <div className="flex">
                      <div className="half">
                        <FormikControl
                          control="input"
                          placeholder="Email"
                          type="email"
                          name="email"
                        />
                        <FormikControl
                          control="input"
                          placeholder="First name"
                          type="text"
                          name="firstname"
                        />
                        <FormikControl
                          control="input"
                          placeholder="Last name"
                          type="text"
                          name="lastname"
                        />
                        <FormikControl
                          control="input"
                          placeholder="Phone"
                          type="number"
                          name="phone"
                        />
                      </div>
                      <div className="half gap">
                        <FormikControl
                          control="input"
                          placeholder="Address"
                          type="text"
                          name="address"
                        />
                        <FormikControl
                          control="input"
                          placeholder="City"
                          type="text"
                          name="city"
                        />

                        <FormikControl
                          control="input"
                          placeholder="Postal Code/Zip"
                          type="number"
                          name="postal"
                        />
                        <FormikControl
                          control="input"
                          placeholder="Country"
                          type="text"
                          name="country"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="thir gap">
                    <PaymentMethod />
                    <DeliveryMethod />
                  </div>
                  <div className="thir gap">
                    <Cart />
                  </div>
                </div>
                <div className="btw topm">
                  <div className="tap">
                    <span>
                      {" "}
                      <img src={Arrow} alt="" />
                    </span>
                    <span className="gap">Back</span>
                  </div>
                  <div>
                    <button>CONTINUE SHOPPING</button>
                    <button type="submit" className="green gap">
                      PROCEED TO PAYMENT
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Shipment;
