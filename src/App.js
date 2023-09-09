import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Games from './components/Games'

import About from './components/About';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {

  const pageSize = 12;
  const apiKey = process.env.REACT_APP_GAME_API

  const [progress, setProgress] = useState(0);
  const [Mode, SetMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  const toogleMode = () => {
    if (Mode === 'light') {
      SetMode('dark');
      document.body.style.backgroundColor = '#212e54';
      showAlert("dark mode has been enabled", "success");
    }
    else {
      SetMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");

    }
  }

  return (
    <>



      <Router>

        <Navbar title="Best Games Ever" mode={Mode} toogleMode={toogleMode} />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Games setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} mode={Mode} />}>
          </Route>
          <Route path="/about" element={<About mode={Mode} />}>
          </Route>
       </Routes>

      </Router>

    </>
  );
}

export default App;
