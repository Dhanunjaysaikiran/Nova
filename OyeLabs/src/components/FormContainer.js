import React, { useState } from "react";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import * as yup from "yup";
import "../App.css";
function FormContainer({ChildtoParent}) {
  const initialValues = {
    voter: "",
    points: "",
    option: "",
  };
  const allOptions = [
    { key:"Select a series or a movie",value:""},
   { key:"The Office",value: "The Office"},
   { key:"Trailer Park Boys",value: "Trailer Park Boys"},
   { key:"Shrek",value: "Shrek"},
   { key:"Rick And Morty",value: "Rick And Morty"},
    
   { key:"Brokylyn99",value: "Brokylyn99"},
   { key: "Parks and Recreation",value:  "Parks and Recreation"},,
   { key:"F.R.I.E.N.D.S",value: "F.R.I.E.N.D.S"},
   { key:"Bojack Horseman",value:"Bojack Horseman"},
  ];
  const [allVotes,SetVotes] = useState([
    {
     
      voter: "Ricky",
      points: 95,
      option: "Trailer Park Boys",
    },
    {  voter: "", points: 90, option: "The Office" },
    {  voter: "Donkey", points: 100, option: "Shrek" },
    {  voter: "Donkey", points: 100, option: "Shrek" },
  ]);
  const onSubmit=(values)=>{
     SetVotes([...allVotes,values]);
     console.log(allVotes)
     ChildtoParent(allVotes);
  }
  const validationschema = yup.object({
    option:yup.string().min(2,"Please select one").required("please Select one"),
    voter: yup
      .string()
      .max(20, "Must be 35 characters or less")
      .required("Required"),
    points: yup
      .number().max(100,"100 is the maximum")
      .required("Required"),
  });

  return (
    <Formik initialValues={initialValues}
    validationSchema={validationschema}
    onSubmit={onSubmit}>
      {(formik) => (
        <div className="form">
          <div className="full">
            <h2>Voting Booth</h2>
          </div>
          <Form>
            <FormikControl
              type="text"
              label="Your name"
              name="voter"
              control="input"
            />
            <FormikControl
              type="number"
              label="Points"
              name="points"
              control="input"
            />
            <FormikControl label="Options" name="option" control="select"options={allOptions}/>
            <button type="submit">Give Points</button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default FormContainer;
