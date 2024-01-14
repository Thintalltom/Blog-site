import { useState } from 'react'
import './App.css'
import Create from './Components/Create/Create'
import Nabar from './Components/Navbar/Nabar'
import Mainbody from './Components/Mainbody/Mainbody'
import { Routes, Route } from "react-router-dom";
function App() {
  

  return (
    <>
      <Nabar />
      <Routes>
        <Route path='/' element={<Mainbody />} />
        <Route path='/create' element={<Create />} />
      </Routes>
      
      
    </>
  )
}

export default App
