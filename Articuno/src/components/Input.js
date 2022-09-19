import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
function Input(props) {
  const { label, name, className, ...rest } = props;
  return (
    <div className="max">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} className={className} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;
