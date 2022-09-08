import React, { useState } from "react";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import * as yup from "yup";
function Main() {
  const ValidationSchema = yup.object({
    title: yup.string().required("Required"),
    desc: yup.string().required("Required"),
    type: yup.string().required("Required"),
  });
  const [SearchItem, SetSearch] = useState("");
  const [Reco, SetReco] = useState([]);
  const onSubmit = (values, { resetForm }) => {
    let y = JSON.parse(JSON.stringify(values));
    SetReco([...Reco, y]);
    console.log("hello");
    resetForm({ values: "" });
    document.getElementById("vis").style.display = "block";
  };
  const Sel = [
    { key: "Select type", value: "" },
    { key: "Tech", value: "Tech" },
    { key: "Entertainment", value: "Entertainment" },
    { key: "Community", value: "Community" },
  ];
  const initialValues = {
    title: "",
    desc: "",
    type: "",
  };

  function HandleTech(value) {
    const result = Reco.filter((cur) => {
      return cur.type === value;
    });
    SetReco(result);
  }
  return (
    <div className="full">
      <div className="f">
        <div className="flex">
          <div className="ce">
            <div className="dot" id="o"></div>
            <div className="dot" id="n"></div>
            <div className="dot" id="e"></div>
          </div>
          <b>Filter</b>
        </div>
        <div>
          <div>
            <button id="nova" onClick={() => HandleTech("Tech")}>
              Tech
            </button>
          </div>
          <div>
            <button id="nova" onClick={() => HandleTech("Entertainment")}>
              Entertainment
            </button>
          </div>
          <div>
            <button id="nova" onClick={() => HandleTech("Community")}>
              Community
            </button>
          </div>
        </div>
      </div>
      <div className="half">
        <div className="cap">
          <h1>Create a blog</h1>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={ValidationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <div className="card">
              <Form>
                <FormikControl
                  control="input"
                  label="Blog title"
                  name="title"
                  placeholder="Give a Title for your blog"
                />
                <FormikControl
                  control="input"
                  label="Blog description"
                  name="desc"
                  placeholder="Type description about your blog"
                />
                <FormikControl
                  control="select"
                  label="Type"
                  options={Sel}
                  name="type"
                />
                <button
                  disabled={!(formik.isValid && formik.dirty)}
                  type="submit"
                >
                  <h1>+</h1>
                </button>
              </Form>
            </div>
          )}
        </Formik>
        <div className="head" id="vis">
          <h1>Blogs</h1>
          <label >
            <b>Search blog</b>
          </label>
          <input
            type="text"
            id="cod"
            onChange={(event) => SetSearch(event.target.value)}
          />
        </div>
        {Reco.filter((val) => {
          if (SearchItem === "") {
            return val;
          } else if (
            val.title.toLowerCase().includes(SearchItem.toLocaleLowerCase()) ||
            val.desc.toLowerCase().includes(SearchItem.toLocaleLowerCase()) ||
            val.type.toLowerCase().includes(SearchItem.toLocaleLowerCase())
          ) {
            return val;
          }
        }).map((reco) => {
          return (
            <div key={reco.title} className="pop">
              <h1>{reco.title}</h1>
              <p>{reco.desc}</p>
              <h3>{reco.type}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
