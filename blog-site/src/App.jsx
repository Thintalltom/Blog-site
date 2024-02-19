import { useState, useContext } from 'react'
import './App.css'
import Create from './Components/Create/Create'
import Nabar from './Components/Navbar/Nabar'
import Mainbody from './Components/Mainbody/Mainbody'
import Signup from './Components/Signup/Signup'
import Login from './Components/Signup/Login'
import { Routes, Route } from "react-router-dom";
import { UserProvider } from './Components/Context/Context'
import ProtectedRoute from './Components/ProtectedRoute'
import { userContext } from './Components/Context/Context'
function App() {
  const { user } = useContext(userContext)

  return (
    <UserProvider>
     {user ? <p>User is logged in</p> : <p>User is logged out</p>}
      <Nabar />
      <Routes>
        <Route path='/' element={<Mainbody />} />
        <Route path='/create' element={
        <ProtectedRoute>
          <Create />
        </ProtectedRoute>
        } />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      
      
    </UserProvider>
  )
}

export default App
