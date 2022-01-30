import Navbar from "./components/Navbar";
import PropTypes from 'prop-types';
import Textform from "./components/Textform";
import About from "./components/About";
import React, {useState} from "react";


function App() {

  const [dm, setdm] = useState(false)
  return (
    <>
    {/* when creating components always use captial words */}
    {/* Props(blank paper, write whatever you want) are like class and you have objects in those, also whatever name you pass the same name should be called in Navbar.js */}
      <Navbar title = "Godspeed" about="About Me"/>
      <div className="container my-4">
        <Textform heading="Enter Text for Analysis "/>
      <About/>
      </div>
    </>
  );
}

export default App;
