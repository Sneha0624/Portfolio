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
                        <div className='circle'>
                            <i class="fa-brands fa-linkedin-in"></i>
                        </div>
                        <div className='circle'>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                        <div className='circle'>
                            <i class="fa-brands fa-github"></i>
                        </div>
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