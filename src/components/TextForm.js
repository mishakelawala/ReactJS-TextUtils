import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearTextClick = () => {
    let newText = '';
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div class="container">

        <label for="myBox" class="form-label mt-3">
          <h2>Enter the text to analyze below</h2>
        </label>
        <div class="mb-3">

          <textarea
            class="form-control"
            id="myBox"
            rows="8"
            placeholder="Enter Text Here"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button onClick={handleUpClick} className="btn btn-primary mx-1">
          Convert to upper Case
        </button>
        <button onClick={handleLoClick} className="btn btn-primary mx-1">
          Convert to lower Case
        </button>
        <button onClick={handleClearTextClick} className="btn btn-primary mx-1">
          Clear Text
        </button>
      </div>
      <div class="container m-4"></div>
      <h1>your text summery</h1>
      <p>{text == '' ? 0 : text.split(' ').length} words & {text.length} characters</p>
      <p>{text == '' ? 0 : 0.008 * text.split(' ').length} Minutes Read</p>
      <b>Preview</b>
      <p>{text}</p>
    </div>
  );
}
