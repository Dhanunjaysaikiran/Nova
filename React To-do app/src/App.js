
import './App.css';
import React, { useState } from 'react';
import SideNav from './components/nav';
import HomeBar from './components/homeBar';
import ToDo from './components/todo';
import Progress from './components/progress';
import Complete from './components/complete';
import logo from './images/login.svg';

function App() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    var { uname, pass } = document.forms[0];


    const userData = database.find((user) => user.username === uname.value);


    if (userData) {
      if (userData.password !== pass.value) {

        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {

      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };


  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  const renderForm = (
    <div className="form">
      <img src={logo} className="logo" />
      <div className='style-box'>
        <div id='log'><h1>Login</h1></div>
        <div className='bottom'>
          <div className='sub-bot'>
            <h2 className='cont'>To Continue</h2>
            <span>To continue enter your username and password.</span>
            <form onSubmit={handleSubmit}>
              <div className="input-container">

                <input type="text" placeholder='Username' name="uname" required />
                {renderErrorMessage("uname")}
              </div>
              <div className="input-container">

                <input type="password" placeholder='Password' name="pass" required />
                {renderErrorMessage("pass")}
              </div>
              <div className="button-container">
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="app">

      {isSubmitted ? <div className='container'>
        <SideNav />
        <div className='part2'>
          <HomeBar />
          <div className='data'>
            <div className='heading'><h1>Projects</h1></div>
            <div className='box'>
              <ToDo />
              <Progress />
              <Complete />
            </div>
          </div>
        </div>

      </div> : renderForm}

    </div>
  );
}


export default App;
