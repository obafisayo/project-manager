import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { DASHBOARD } from '../../routes/RouteConstants';

const Navbar = () => {
  return (
    <div className="navbar">
        <h1>Logo</h1>
        <div className="links">
            <a href="/">home </a>
            <a href="/about">about </a>
            <a href="/contact">contact </a>
            <Link to={DASHBOARD}>Dashboard</Link>
            <a href="/sign-up">
                <button className="btn-1">Sign Up</button>
            </a>
            <a href="/sign-in">
                <button className="btn-1">Sign In</button>
            </a>
        </div>
    </div>
  )
}

export default Navbar;
