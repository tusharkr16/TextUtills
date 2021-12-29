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
    const handleLowclick = () => {
        let newText=text.toLowerCase();
        setText(newText)
}
const CopyText = () => {
    var text = document.getElementById("exampleFormControlTextarea1")
    text.select();
    navigator.clipboard.writeText(text.value);
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
        <button type="button" onClick={handleUpclick} className="btn mt-4 mx-3 btn-dark">
        Uppercase
        </button>
        <button type="button" onClick={handleLowclick} className="btn mt-4 mx-3 btn-dark">
        Lowercase
        </button>
        <button type="button" onClick={CopyText} className="btn mt-4 mx-3 btn-dark">
        Copy
        </button>
      </div>
      <div className="container">
          <h3>Your Text Summary</h3>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} minute read </p>
          <h4>Preview</h4>
          <p>{text}</p>
      </div>

    </div>
  );
}

export default Textform;
