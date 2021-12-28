import React, { useState } from "react";

function Textform() {
    const [text,setText]= useState("")
    const handleUpclick = () => {
            let newText=text.toUpperCase();
            setText(newText)
    }
    const handleOnchange = (event) => {
        setText(event.target.value)
    }
  return (
    <div className="container mt-4">
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          <h1>Input Text here</h1>
        </label>
        <textarea
         onChange={handleOnchange}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
        ></textarea>
        <button type="button" onClick={handleUpclick} className="btn mt-4 btn-primary">
        Uppercase
        </button>
        <button type="button" className="btn mt-4 mx-3 btn-secondary">
          Secondary
        </button>
      </div>
      <div className="container">
          <h3>Your Text Summary</h3>
          <p>{text.split(" ").length} words and {text.length} characters</p>
      </div>

    </div>
  );
}

export default Textform;
