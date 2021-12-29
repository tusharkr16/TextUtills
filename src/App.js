
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import AboutUs from './Components/AboutUs';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
function App() {
  const[mode,setMode]=useState('dark')
  const toggleMode = () => {
    if(mode ==='light'){
      setMode('dark')
    }
    else{
      setMode('light')
    }
  }
  return (
<>
<Navbar title="TextUtils" AboutText="AboutUs" mode={mode} />
<Routes> 
  <Route path='/about' element={<AboutUs/>}/>
  <Route path='/' element={<Textform mode={mode} toggleMode={toggleMode}/>}/>
</Routes>

</>
  )
}

export default App;
