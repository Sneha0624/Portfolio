import React from 'react'
import me from '../Images/sneha.png'

function Home() {
    return (
        <div className='home-container'>
            <div className='content-container'>
                <div className='text-container'>
                    <div className='my-name'>
                        <div className='static-txt'>Hello, I am</div>
                        <ul className='dynamic-txt'>
                            <li><span>Sneha Singhal</span></li>
                            <li><span>Developer</span></li>
                        </ul>
                    </div>
                    <div className='para'>I am a MERN Stack Developer with strong cletch of abilities as React Js, Express Js, MySQL, Node Js.</div>
                    <div className='links'>
                        <a target="_blank" href='https://www.linkedin.com/in/sneha-singhal-543964208/' className='circle'>
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/snehas_.6/" className='circle'>
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a target="_blank" href='https://github.com/Sneha0624' className='circle'>
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                    <button className='resume-btn'>Download Resume</button>
                </div>
                <div className='right-container'>
                    <div className='img-container'></div>
                    <div className='overlay'>
                        <img src={me} alt='me' className='img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home