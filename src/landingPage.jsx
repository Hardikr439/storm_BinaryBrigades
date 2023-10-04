import { useState } from 'react'
<<<<<<< HEAD
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './landingPage.css'
=======
import './LandingPage.css'
>>>>>>> 781d9cf6b45f8df711003fd516c309ecd4f80b2d
import { Link } from 'react-router-dom'

function LandingPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='myNavbar '>
        <nav class='navbar navbar-expand-lg bg-body-tertiary '>
          <div class='container-fluid '>
            <div class='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul class='navbar-nav me-auto mb-2 mb-lg-0 '>
                <li class='nav-item '>
                  <a
                    class='nav-link active text-white'
                    aria-current='page'
                    href='#'
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
                <button class='btn btn-primary mx-2' type='submit'>
                  Employee
                </button>
                <button class='btn btn-primary' type='submit'>
                  Employer
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div className='text-center '>
        <h2 className='nav-link px-2 text-success' id='myTitle'>
          Ongoing Feedback Forms
        </h2>
      </div>{' '}
      <br></br>
      <div className='row row-cols-1 row-cols-md-3 mb-3 text-center'>
        <div className='col ' id='myCard'>
          <div className='card mb-4 rounded-3 border-primary' id='inMyCard'>
            <div className='card-header py-3 text-bg-primary border-primary'>
              <h4 className='my-0 fw-normal'>Industry visit form</h4>
            </div>
            <div className='card-body'>
              <h1 className='card-title pricing-card-title'>
                Google headoffice visit on 12th august
              </h1>
              <ul className='list-unstyled mt-3 mb-4'>
                <li>Floated on:2/09/23</li>
                <li>Accepted till:2/10/23</li>
              </ul>
              <Link to={'/form1'}>
                <button
                  type='button'
                  className='btn btn-lg btn-success'
                  id='my-form-buttom'
                >
                  tell us about the tour
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className='col' id='myCard'>
          <div className='card mb-4 rounded-3 border-primary' id='inMyCard'>
            <div className='card-header py-3 text-bg-primary border-primary'>
              <h4 className='my-0 fw-normal'>Client meeting form</h4>
            </div>
            <div className='card-body'>
              <h1 className='card-title pricing-card-title'>
                Meeting with the Walmart CEO
              </h1>
              <ul className='list-unstyled mt-3 mb-4'>
                <li>Floated on:2/09/23</li>
                <li>Accepted till:2/10/23</li>
              </ul>
              <Link to={'/form'}>
                <button
                  type='button'
                  className=' btn btn-lg btn-success'
                  id='my-form-buttom'
                >
                  share your experience
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className='col' id='myCard'>
          <div className='card mb-4 rounded-3  border-primary' id='inMyCard'>
            <div className='card-header py-3 text-bg-primary border-primary'>
              <h4 className='my-0 fw-normal'>Ongoing project form</h4>
            </div>
            <div className='card-body'>
              <h1 className='card-title pricing-card-title'>
                Project on scaling our company
              </h1>
              <ul className='list-unstyled mt-3 mb-4'>
                <li>Floated on:2/09/23</li>
                <li>Accepted till:2/10/23</li>
              </ul>
              <Link to={'/form'}>
                <button
                  type='button'
                  className=' btn btn-lg btn-success'
                  id='my-form-buttom'
                >
                  share your thoughts
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <h2 className='nav-link px-2 text-success' id='myTitle'>
          Share your Grievances <strong id='myStrong'>anonymously</strong> about
          the higher authorities
        </h2>
      </div>
      <div className='d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center'>
        <div className='list-group list-group-checkable d-grid gap-2 border-0'>
          <button type='button' className='w-100 btn btn-lg btn-warning m-3'>
            <h2 className='text-center'>CEO</h2>
            <h4 className='text-center'>Mrs.Kriya trivedi</h4>
          </button>

          <button type='button' className='w-100 btn btn-lg btn-warning m-3'>
            <h2 className='text-center'>HR</h2>
            <h4 className='text-center'>Mr.Shyam Rajput</h4>
          </button>

          <button type='button' className='w-100 btn btn-lg btn-warning m-3'>
            <h2 className='text-center'>Project Manager</h2>
            <h4 className='text-center'>Mr.aayush Shah</h4>
          </button>

          <button type='button' className='w-100 btn btn-lg btn-warning m-3'>
            <h2 className='text-center'>Employee</h2>
            <h4 className='text-center'>Any employee working in our firm</h4>
          </button>
        </div>
      </div>
    </>
  )
}

export default LandingPage
