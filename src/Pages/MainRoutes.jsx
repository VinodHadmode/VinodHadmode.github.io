import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import Contact from './Contact'
import Skills from './Skills'
import Projects from './Projects'
import About from './About'

function MainRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/skills" element={<Skills/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="*" element={<h2>404 Page not found</h2>}/>
            </Routes>
        </div>
    )
}

export default MainRoutes
