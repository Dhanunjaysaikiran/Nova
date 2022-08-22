import "./App.css";
import FormContainer from "./components/FormContainer";
import React, { createContext,useState } from "react";
import ReactSwitch from "react-switch";
export const ThemeContext = createContext(null);
function App() {
  const [Theme,SetTheme]=useState("light");
  const ToggleTheme=()=>{
    SetTheme((curr)=>(curr==="light"?"dark":"light"))
  }
  return (
    <ThemeContext.Provider value={{Theme,ToggleTheme}}>
      <div className="App" id={Theme}>
        <div className="long">
          <div></div>
          <ReactSwitch onChange={ToggleTheme} checked={Theme==="dark"}/>
        </div>
        <FormContainer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
