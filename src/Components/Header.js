import React from 'react'
import { NavLink } from 'react-router-dom'

function header() {
    const pathName = window.location.pathname.includes('profile');
    console.log('pathName', pathName)
    return (
        <div className='header-container' style={{ backgroundColor: !pathName && 'blue' }}>
            <div className='name' style={{ backgroundColor: pathName && 'white' }}>Portfolio.</div>
            <ul className='list-items'>
                <li className='item'>
                    <NavLink to='/profile' className='link' activeClassName='active'>
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
            </ul>
        </div>
    )
}

export default header