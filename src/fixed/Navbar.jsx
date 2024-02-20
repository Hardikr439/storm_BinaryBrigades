import React from 'react'
import '../landingPage.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='myNavbar '>
      <nav className='navbar navbar-expand-lg bg-body-tertiary '>
        <div className='container-fluid '>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 '>
              <li className='nav-item '>
                <a
                  className='nav-link active text-white'
                  aria-current='page'
                  href='/'
                >
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-white' href='#'>
                  Feedbacks
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-white' href='#'>
                  Grievances
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-white' href='#'>
                  Results
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-white' href='#'>
                  Your review
                </a>
              </li>
            </ul>
            <form className='d-flex' role='search'>
              <Link to='/'>
                <button className='btn btn-primary mx-2' type='submit'>
                  Employee
                </button>
              </Link>
              <Link to='/employer'>
                <button className='btn btn-primary' type='submit'>
                  Employer
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
