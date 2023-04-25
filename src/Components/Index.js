import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import './style.css'

function index() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/skill' element={''} />
            <Route path='/resume' element={''} />
            <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>
    )
}

export default index