import React, { useState } from "react";
import Draggable from "react-draggable";
import "../styles/container.css";

export default function MovingText() {
  const [InputText, setInputText] = useState("");
  const [showButton, setShowButton] = useState(true);

  function HandleChange(e) {
    console.log(e);
    setInputText(e.target.value);
    setShowButton(false);
  }
  return (
    <div className="movingTextContainer">
      <Draggable>
        <input
          type="text"
          value={InputText}
          onChange={(e) => setInputText(e.target.value)}
          className="movingTextInputBox"
          placeholder={InputText === "" ? "Enter your Text here" : InputText}
          onClick={() => setShowButton(true)}
        />
      </Draggable>
      {showButton && <button onClick={HandleChange}>Add Text</button>}
    </div>
  );
}
