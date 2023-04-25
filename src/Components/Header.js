import React from 'react'
import { NavLink } from 'react-router-dom'

function header() {
    return (
        <div className='header-container'>
            <div className='name'>Sneha Singhal</div>
            <ul className='list-items'>
                <li className='item'>
                    <NavLink to='/' className='link' activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li className='item'>
                    <NavLink to='/about' className='link' activeClassName='active'>
                        About
                    </NavLink>
                </li>
                <li className='item'>
                    <NavLink to='/skill' className='link' activeClassName='active'>
                        My Skills
                    </NavLink>
                </li>
                <li className='item'>
                    <NavLink to='/resume' className='link' activeClassName='active'>
                        Resume
                    </NavLink>
                </li>
                <li className='item'>
                    <NavLink to='/contact' className='link' activeClassName='active'>
                        Contact
                    </NavLink>
                </li>
                <li className='item'>
                    <i class="fa-regular fa-moon"></i>
                </li>
            </ul>
        </div>
    )
}

export default header