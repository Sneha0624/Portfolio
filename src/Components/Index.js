import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Header from './Header'
import './style.css'

function index() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/profile' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
                <Route path='/skill' element={''} />
                <Route path='/resume' element={''} />
                <Route path='*' element={<Navigate replace to='/profile' />} />
            </Routes>
        </>
    )
}

export default index