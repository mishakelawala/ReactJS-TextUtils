import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    text.length > 0 && props.showAlert('Converted to Uppercase', 'success')
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    text.length > 0 && props.showAlert('Converted to Lowercase', 'success')
  };

  const handleClearTextClick = () => {
    let newText = '';
    setText(newText);
    text.length > 0 && props.showAlert('Text Cleared', 'success')
  };

  const handleCopy = () => {
    var text = document.getElementById('myBox');
    text.select()
    navigator.clipboard.writeText(text.value)
    text.length > 0 && props.showAlert('Text Copy', 'success')
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    text.length > 0 && props.showAlert('Extra spaces remove', 'success')
  };


  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div className="container" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>

        <label htmlFor="myBox" className="form-label mt-3">
          <h2>Enter the text to analyze below</h2>
        </label>
        <div className="mb-3">

          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            placeholder="Enter Text Here"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? '#042743' : 'white' }}
          ></textarea>
        </div>
        <button onClick={handleUpClick} className="btn btn-primary mx-1">
          Convert to upper Case
        </button>
        <button onClick={handleLoClick} className="btn btn-primary mx-1">
          Convert to lower Case
        </button>
        <button onClick={handleExtraSpaces} className="btn btn-primary mx-1">
          Remove Extra Spaces
        </button>
        <button onClick={handleCopy} className="btn btn-primary mx-1">
          Copy
        </button>
        <button onClick={handleClearTextClick} className="btn btn-primary mx-1">
          Clear Text
        </button>
      </div>
      <div className="container m-4" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
        <h1>your text summery</h1>
        <p>{text == '' ? 0 : text.split(' ').length} words & {text.length} characters</p>
        <p>{text == '' ? 0 : 0.008 * text.split(' ').length} Minutes Read</p>
        <b>Preview</b>
        <p>{text.length > 0 ? text : "Enter something to preview it here.."}</p>
      </div>
    </div>
  );
}
