import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';


function App() {
const [Mode, SetMode] = useState('light');

const [alert, setAlert] = useState(null);
const showAlert = (message, type)=>{
   setAlert({
    msg: message,
    type: type
  
   })
   setTimeout(() => {
    setAlert(null);
   }, 1500);
}


const toogleMode = ()=>{
  if(Mode === 'light'){
    SetMode('dark');
document.body.style.backgroundColor = '#1e3953';
showAlert("dark mode has been enabled", "success");
  }
  else{
    SetMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("light mode has been enabled", "success");

  }
}

  return (
   <>
   <Navbar title="Best Games Ever" mode={Mode} toogleMode={toogleMode}/>
   <Alert alert={alert} />
   <About heading="About Us"/>
   </>
  );
}

export default App;
