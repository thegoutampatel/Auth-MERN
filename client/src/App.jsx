import React from 'react'
import Header from './components/Header'
import Register from './components/Register'
import Login from './components/Login'
import {Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Header/> 
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
     
    </div>
  )
}

export default App