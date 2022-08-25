import React, { useState } from "react";
import Send from "./send.svg";
import Pin from "./pin.svg";


function Mainchat() {
  const [TextMsg, SetText] = useState("");
  const [ImageLink, SetImg] = useState("");

  const [Messages, SetMessage] = useState([]);

  const HandleMessage = (e) => {
    e.preventDefault();
    SetText(e.target.value);
  };
  const HandleImage = (e) => {
    SetImg(e.target.value);
    const NewImage = {
      id: new Date().getTime().toString,
      text: TextMsg,
      img: ImageLink,
    };
    SetMessage([NewImage, ...Messages]);

    SetImg("");
  };
  const HandleSend = (e) => {
    e.preventDefault();
    console.log(ImageLink);
    if (!TextMsg) {
      alert("Enter text to send a message");
    } else {
      const Text = {
        id: new Date().getTime().toString,
        text: TextMsg,
        img: ImageLink,
      };
      SetMessage([Text, ...Messages]);
      SetText("");
      SetImg("");
    }
  };
  return (
    <div className="cpage">
      <div className="mainchat">
        <div className="contra">
          <div className="right">
            {Messages.map((Message) => {
              return <div className="msg">{Message.text} </div>;
            })}
          </div>
        </div>
        <div className="inputfield">
          <div class="image-upload">
            <label for="file-input">
              <img src={Pin} id="nova" alt="" />
            </label>
           
            <input id="file-input" onChange={HandleImage} type="file" />
          </div>

          <input
            type="text"
            name="text"
            onChange={HandleMessage}
            value={TextMsg}
            id="tet"
            placeholder="Type here"
          />
          <img src={Send} alt="" onClick={HandleSend} />
        </div>
      </div>
    </div>
  );
}

export default Mainchat;
