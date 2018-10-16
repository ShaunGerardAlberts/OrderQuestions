import React from "react"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark py-4">
      <div className="container">
        <a href="index.html" className="navbar-brand">
          YOUI CHALLENGE
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">TOP 10</Link>
            </li>
            <li className="nav-item">
              <a href="https://www.youi.com.au" className="nav-link">
                YOUI
              </a>
            </li>
            <li className="nav-item">
              <a href="https://stackoverflow.com/" className="nav-link">
                STACKOVERFLOW
              </a>
            </li>
            <li className="nav-item">
              <a href="https://www.youi.com.au/contact" className="nav-link">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
