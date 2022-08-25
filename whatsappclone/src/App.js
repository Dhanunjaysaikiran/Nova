import React,{useState} from "react";
import ChatPage from "./components/ChatPage";

import "./App.css";
import Head from "./components/Head";
import Chats from "./components/Chats";
import Mainchat from "./components/Mainchat";
function App() {
 const [Getdata,SetData]=useState(false);
 const ChildtoParent =(childdata)=>{
  SetData(childdata);
  
 }
  return (
    <div className="App" id="full">
      <Head GetData={Getdata} />
     <div className="fly">
     <Chats ChildtoParent={ChildtoParent} />
    {Getdata?<Mainchat/>:<ChatPage/>}
     </div>
    </div>
  );
}

export default App;
