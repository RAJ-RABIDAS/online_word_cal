import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";
import About from "./components/About";

import React, { useState } from "react";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Alert from "./components/Alert";
function App() {
  const [mode, setMode] = useState("light"); //weather dard mode is enable or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#031940";
      showAlert("dark mode has been enabled", "success");
      document.title = "Text analyser |HR - Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "Text analyzer | HR - Light mode";
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
<<<<<<< HEAD
        title="HR Text Analyzer"
=======
        title=" Text analyzer"
>>>>>>> 863fc580b9229d109f117353461c37c642e231ef
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      
        <div className="container">
          <TextForm showAlert={showAlert}heading= "Enter the text to analyse"  mode={mode}/>

          {/* <Switch>
            <Route exact path="/about">
              <About  />
            </Route>

            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyse"
                mode={mode}
              />
            </Route>
          </Switch>
        
      </Router>

      <About/> */}
      </div>
    </>
  );
}

export default App;
