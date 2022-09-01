import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Forms from './Components/Forms';
//  import About from './Components/About';
import Alert from './Components/Alert';
import React, { useState } from 'react'

import {BrowserRouter as Router, Routes , Route, Link} from 'react-router-dom'


function App() {
const [mode,setMode]=useState('light');
const[alert,setAlert] = useState(null);

 const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    ty:type
  }) 
  setTimeout(()=>{
    setAlert(null);

  },1500)
 }
const toggleMode=()=>{
  if(mode ==='light'){
  setMode('dark');
  document.body.style.backgroundColor='#00001a';
  showAlert("Darkmode has been enabled","success");
  }
else{
  setMode('light');
  document.body.style.backgroundColor='white';
  showAlert("Lightmode has been enabled","success");
}
}
// const togmode=()=>{
//   if(mode==='light'){
//     setMode('dark');
//     document.body.style.backgroundColor='#005ea6';
//     showAlert("bluemode has been enabled","success");
//   }
//   else{
//     setMode('light');
//     document.body.style.backgroundColor='white';
//     showAlert("Lightmode has been enabled","success");
//   }
// }
  return (

   <>
   {/* <Router> */}
   <Navbar title="TexTer" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <br></br>
   <div className='container my-3'>
   <div className="container">
          {/* <Routes> */}
            {/* <Route exact path="/About" element={<About/>}></Route> */}
            {/* <Route exact path="/"  */}
            {/* element={ */}
            <Forms titlehead="Enter text " mode={mode} 
              showAlert={showAlert} />
              {/* } */}
              {/* ></Route> */}
          {/* </Routes> */}
        </div>
   </div>
   {/* </Router> */}
   </>
  );
}

export default App;
