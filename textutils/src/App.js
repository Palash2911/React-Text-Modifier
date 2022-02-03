import Navbar from "./components/Navbar";
import PropTypes from 'prop-types';
import Textform from "./components/Textform";
import About from "./components/About";
import React, {useState} from "react";
import Alert from "./components/Alert";


function App() {

  const [dm, setdm] = useState('light')
  const [alert, Setalert] = useState(null)

  const showAlert = (message, type)=>{
    Setalert({
      mssg : message,
      type : type
    })
    setTimeout(() => {
      Setalert(null)
    }, 1000);
  }
  const darkclick = ()=>{
    if(dm === 'light'){
      setdm('dark')
      document.body.style.backgroundColor='#495057'
      showAlert("Dark Mode Has been Enabled !!", "success")

      //Set anything every - ___seconds
      // setInterval(() => {
      // Set custom title
      // document.title = "Hello World"
      // }, 1000);
    }
    else{
      setdm('light')
      document.body.style.backgroundColor='white'
      showAlert("Light Mode Has been Enabled !!", "success")
    }
}

  return (
    <>
    {/* when creating components always use captial words */}
    {/* Props(blank paper, write whatever you want) are like class and you have objects in those, also whatever name you pass the same name should be called in Navbar.js */}
      <Navbar title = "Godspeed" about="About Me" mode={dm} darkclick={darkclick}/>
      <Alert alert={alert}/>
      <div className="container my-4">
        <Textform showAlert={showAlert} heading="Enter Text for Analysis" mode={dm}/>
        <About mode={dm}/>
      </div>
    </>
  );
}

export default App;
