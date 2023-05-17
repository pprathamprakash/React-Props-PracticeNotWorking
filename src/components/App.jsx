import React, { useState } from "react";

const textArray = [];
let a = 0;

function List(props) {
  return <li> {props.listText} </li>;
}

function App() {
  const [inputText, setInputText] = useState("");
  const [buttonState, setButtonState] = useState("");

  function setInput(event) {
    const textEvent = event.target.value;

    setInputText(textEvent);
    console.log("INput text -" + inputText);
  }

  function setButton() {
    setButtonState(inputText);
    console.log("ButtonState - " + buttonState);

    textArray.push(buttonState);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={setInput} type="text" value={inputText} />
        <button onClick={setButton}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {textArray.map((text) => {
            console.log(text);
            console.log(textArray);

            a++;
            return <List key={a} listText={text} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
