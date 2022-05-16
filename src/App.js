import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import React, {useState} from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


// Run 'npm run build' to run live sserver or host website, it basically creates a new folder called build that has the website

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

  const remvoebodyclass =()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
  }
  const darkclick = (cls)=>{
    remvoebodyclass()
    document.body.classList.add('bg-'+cls)
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
    <Router>
    <Navbar title = "Godspeed" about="About Me" mode={dm} darkclick={darkclick}/>
    <Alert alert={alert}/>
    <div className="container my-4">
      <Routes>
        {/* Use exact if making big website so when user click / only that part opens */}
          <Route exact path="/about" element={<About mode={dm}/>    }>
          </Route>
          <Route exact path="/"  element={<Textform showAlert={showAlert} heading="Enter Text for Analysis" mode={dm}/>}>
          </Route>
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
