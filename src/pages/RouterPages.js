import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Home from './home'
import About from './About'
import Login from './Login'
export default function RouterPages() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}exact />
                <Route path="/About" element={<About/>} />
                <Route path="/Login" element={<Login/>} />
          
            </Routes>
            </Router>
            
            
        
        </div>
  )
}
