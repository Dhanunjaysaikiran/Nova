import React from "react";
import "../App.css";

function Home(props){
    return(
        <div className="home">
            <h1>{props.head}</h1>
        </div>
    )
}
export default Home;