import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (msg, type) => {
    setAlert({ msg: msg, type: type })
    setTimeout(() => {
      setAlert('')
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode successfully set", 'success')
      document.title = "TextUtils - Dark Mode"
      setTimeout(() => {
        document.title = "TextUtils"
      }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode successfully set", 'success')
      document.title = "TextUtils - Light Mode"
      setTimeout(() => {
        document.title = "TextUtils"
      }, 1500);
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
