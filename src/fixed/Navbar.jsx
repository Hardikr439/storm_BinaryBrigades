import React from 'react'
import '../landingPage.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='myNavbar '>
      <nav class='navbar navbar-expand-lg bg-body-tertiary '>
        <div class='container-fluid '>
          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav me-auto mb-2 mb-lg-0 '>
              <li class='nav-item '>
                <a
                  class='nav-link active text-white'
                  aria-current='page'
                  href='/'
                >
                  Home
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link text-white' href='#'>
                  Feedbacks
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link text-white' href='#'>
                  Grievances
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link text-white' href='#'>
                  Results
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link text-white' href='#'>
                  Your review
                </a>
              </li>
            </ul>
            <form class='d-flex' role='search'>
              <Link to={'/'}>
                <button class='btn btn-primary mx-2' type='submit'>
                  Employee
                </button>
              </Link>
              <Link to={'/employer'}>
                <button class='btn btn-primary' type='submit'>
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
