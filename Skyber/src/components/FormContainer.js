import React, { useState } from "react";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import * as yup from "yup";

function FormContainer() {
  const today = new Date();
  const [dis, setdis] = useState(true);

  const initialValues = {
    buyorsell: "",
    tradeprice: "",
    stop: "",
    stoploss: "",
    exchangename: "",
    quantity: "",
    instrument: "",
    recomendationvalidity: null,
  };

  const ValidationSchema = yup.object({
    buyorsell: yup.string().required("Required"),
    tradeprice: yup.number("must be a number").required("Required"),
    stop: yup.string().required("Required"),
    stoploss: yup.number("must be a number").required("Required"),
    exchangename: yup.string().required("Required"),
    quantity: yup.number("must be a number").required("Required"),
    instrument: yup.string().required("Required"),
    recomendationvalidity: yup
      .date()
      .min(today, "Date must not be from the past")
      .required("Required")
      .nullable(),
  });
  console.log(initialValues.exchangename.length);

  const [Reco, SetReco] = useState([]);
  const onSubmit = (values) => {
    let y = JSON.parse(JSON.stringify(values));
    SetReco([...Reco, y]);
    console.log(y);

    console.log("hello");
  };
  const inst = [
    { key: "Pick exchage name first", value: "" },
    { key: "NFO9UBDIFNIKAI", value: "NFO9UBDIFNIKAI" },
    { key: "JDUFHRYWE64YSH", value: "JDUFHRYWE64YSH" },
    { key: "JFIHDUSYETGD54", value: "JFIHDUSYETGD54" },
    { key: "HSGDYFBHETS65E", value: "HSGDYFBHETS65E" },
    { key: "HDUJEHYSGTE56G", value: "HDUJEHYSGTE56G" },
    { key: "HDUJFHSYGE56GS", value: "HDUJFHSYGE56GS" },
  ];
  const hi = [
    { key: "Buy or sell?", value: "" },
    { key: "Buy", value: "Buy" },
    { key: "Sell", value: "Sell" },
  ];
  const bye = [
    { key: "Select one", value: "" },
    { key: "Moving", value: "Moving" },
    { key: "Closing", value: "Closing" },
  ];
  const exc = [
    { key: "Select one", value: "" },
    { key: "COM", value: "COM" },
    { key: "NFT", value: "CNFTS" },
    { key: "IGD", value: "IGD" },
    { key: "FNG", value: "FNG" },
    { key: "AFT", value: "AFT" },
    { key: "HDF", value: "HDF" },
  ];
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <div>
            <p>Fill the following details to send recommendations to your subscribers.</p>
            <Form>
              <div className="flex">
                <div className="child">
                  <FormikControl
                    control="select"
                    label="Is it buy call or sell call?"
                    name="buyorsell"
                    options={hi}
                  />
                  <FormikControl
                    control="select"
                    label="Is it moving stop ot closing stop?"
                    name="stop"
                    options={bye}
                  />
                  <FormikControl
                    control="select"
                    label="Exchange name"
                    name="exchangename"
                    options={exc}
                    onClick={() => {
                      setdis(false);
                    }}
                  />{" "}
                  <FormikControl
                    control="select"
                    label="Instrument type"
                    name="instrument"
                    options={inst}
                    disabled={dis}
                  />
                </div>
                <div className="child">
                  <FormikControl
                    control="input"
                    label="Trade price"
                    name="tradeprice"
                    type="number"
                  />

                  <FormikControl
                    control="input"
                    label="Stop loss"
                    name="stoploss"
                  />

                  <FormikControl
                    control="input"
                    label="Quantity"
                    name="quantity"
                  />

                  <FormikControl
                    control="date"
                    label="pick a date"
                    name="recomendationvalidity"
                  />
                </div>
              </div>
              <div className="center">
                <button
                  disabled={!(formik.isValid && formik.dirty)}
                  type="submit"
                >
                  Add Recommendation
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
      <div>
        {Reco.map((Reco) => {
          return (
            <div key={Reco.tradeprice} className="reco">
              <div className="rec">
                <div className="square">
                  <div className="up">
                    <h4>{Reco.buyorsell}</h4>
                  </div>
                  <div className="low"><p>{Reco.tradeprice}</p></div>
                </div>
                <div className="gap">
                  <div className="name"><p>{Reco.instrument}</p></div>
                  <div className="date"><p>{Reco.recomendationvalidity.substring(0,10)}</p></div>
                </div>
              </div>
              <div className="rec" id="wt">
                  <div>
                    <p>Quantity</p>
                    <h4>{Reco.quantity}</h4>
                  </div>
                  <div>
                    <p>Stop Loss</p>
                    <h4>{Reco.stop}</h4>
                  </div>
                  <div>
                    <p>Stop Loss Type</p>
                    <h4>{Reco.stoploss}</h4>
                  </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FormContainer;
