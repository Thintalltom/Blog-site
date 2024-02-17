import { useState } from 'react'
import './App.css'
import Create from './Components/Create/Create'
import Nabar from './Components/Navbar/Nabar'
import Mainbody from './Components/Mainbody/Mainbody'
import Signup from './Components/Signup/Signup'
import { Routes, Route } from "react-router-dom";
function App() {
  

  return (
    <>
      <Nabar />
      <Routes>
        <Route path='/' element={<Mainbody />} />
        <Route path='/create' element={<Create />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      
      
    </>
  )
}

export default App
