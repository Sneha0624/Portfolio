import React from 'react'
import Header from './Header'
import profile from '../Images/profile.png'

function Home() {
    return (
        <div className='home-container'>
            <Header />
            <div className='content-container'>
                <div className='img-container'>
                    <img src={profile} alt='me' className='img' />
                </div>
                <div className='text-container'>
                    <div className='static-txt'>Hello! I am</div>
                    <ul className='dynamic-txt'>
                        <li><span>Sneha Singhal</span></li>
                        <li><span>Developer</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home