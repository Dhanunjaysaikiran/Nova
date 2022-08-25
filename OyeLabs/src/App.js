import React,{useState} from "react";
import "./App.css";
import FormContainer from "./components/FormContainer";
import Nav from "./components/Nav";
import LeaderBoard from "./components/LeaderBoard";
import AllVotes from "./components/AllVotes";
function App() {
const [Votes,SetVotes]=useState("");
function ChildtoParent(childdata){
  SetVotes(childdata);
  console.log(Votes);
}
  return (
    <div className="App">
      <Nav />
      <div className="task">
        <span>---Task starts below this line---</span>
      </div>
      <div className="flex">
        <FormContainer ChildtoParent={ChildtoParent}/>
        <LeaderBoard ChildtoParent={ChildtoParent}/>
      </div>
      <AllVotes Votes={Votes}/>
    </div>
  );
}

export default App;
