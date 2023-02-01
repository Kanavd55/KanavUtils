import React,{ useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

function App() {

  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      mssg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#102d46';
      showAlert("Dark Mode has been enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light Mode has been enabled","success");
    }
  }
  return (
    <><Router>
      <Navbar title="KanavUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className='container my-3' >
      <Switch>
      <Route exact path="/" ><TextForm mode={mode} showAlert={showAlert} heading="Enter the text to analyze below"/></Route>
      <Route exact path="/about" ><About mode={mode} /></Route>
      </Switch>
      </div>
      </Router>
      </>
  );
}

export default App;
