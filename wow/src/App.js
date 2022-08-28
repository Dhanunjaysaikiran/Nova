import { React } from "react";
import './App.css';
import Toggle from './components/Toggle';
import Data from "./components/Data";
import MainData from "./components/MainData";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <Nav/>
     <Toggle/>
     <div className="w">
      <Data/>
     <MainData/>
     </div>
    </div>
  );
}

export default App;
