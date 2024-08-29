import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <h1>Logo</h1>
        <div className="links">
            <a href="/">home </a>
            <a href="/about">about </a>
            <a href="/contact">contact </a>
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
