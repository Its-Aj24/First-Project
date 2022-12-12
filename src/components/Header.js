import React from 'react'
import { NavLink } from 'react-router-dom';
import stylesheet from './header.module.css';
import logo from '../assets/logo3.png';
function Header() {
  return (

    <>
    <div className={stylesheet.head}>
        <div className={stylesheet.logo}>
            {/* <img src={logo} alt="Image can not found" /> */}
            <h1>Learnig React</h1>
        </div>
        <div className={stylesheet.menu}>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/user">Users</NavLink></li>
                <li><NavLink to="/test">User</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Header