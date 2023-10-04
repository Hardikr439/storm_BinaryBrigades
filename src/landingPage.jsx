import { useState } from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'

function LandingPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <header className='d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom'>
          <div className='col-md-3 mb-2 mb-md-0'>
            <a
              href='/'
              className='d-inline-flex link-body-emphasis text-decoration-none'
            >
              <svg
                className='bi'
                width='40'
                height='32'
                role='img'
                aria-label='Bootstrap'
              >
                <use xlink:href='#bootstrap'></use>
              </svg>
            </a>
            <a
              href='D:\codeissance\storm_BinaryBrigades\images\feedback.png'
              alt=''
            ></a>
          </div>

          <ul className='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 '>
            <li>
              <Link to='/' className='nav-link px-2 link-secondary'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/' className='nav-link px-2'>
                Feedbacks
              </Link>
            </li>
            <li>
              <Link to='/' className='nav-link px-2'>
                Grievances
              </Link>
            </li>
            <li>
              <Link to='/' className='nav-link px-2'>
                Results
              </Link>
            </li>
            <li>
              <Link to='/' className='nav-link px-2'>
                your review
              </Link>
            </li>
          </ul>

          <div className='col-md-3 text-end'>
            <button type='button' className='btn btn-outline-primary mx-2'>
              Employee
            </button>
            <button type='button' className='btn btn-primary'>
              Employer
            </button>
          </div>
        </header>
      </div>
      <div className='text-center '>
        <h2 className='nav-link px-2 text-success'>Ongoing feedback forms</h2>
      </div>{' '}
      <br></br>
      <div className='row row-cols-1 row-cols-md-3 mb-3 text-center '>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm border-primary'>
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
                <button type='button' className='w-100 btn btn-lg btn-success'>
                  tell us about the tour
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm border-primary'>
            <div className='card-header py-3 text-bg-primary border-primary'>
              <h4 className='my-0 fw-normal'>Client meeting form</h4>
            </div>
            <div className='card-body'>
              <h1 className='card-title pricing-card-title'>
                Meeting with the Walmart CE0
              </h1>
              <ul className='list-unstyled mt-3 mb-4'>
                <li>Floated on:2/09/23</li>
                <li>Accepted till:2/10/23</li>
              </ul>
              <Link to={'/form'}>
                <button type='button' className='w-100 btn btn-lg btn-success'>
                  share your experience
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card mb-4 rounded-3 shadow-sm border-primary'>
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
                <button type='button' className='w-100 btn btn-lg btn-success'>
                  share your thoughts
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <h2 className='nav-link px-2 text-success'>
          Share your Grievances anonymously about the higher authorities
        </h2>
      </div>
      <div className='d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center'>
        <div className='list-group list-group-checkable d-grid gap-2 border-0'>
          <button type='button' className='w-100 btn btn-lg btn-warning m-3'>
            <h2 className='text-center'>CEO</h2>
            <h4 className='text-center'>mrs.Kriya trivedi</h4>
          </button>

          <button type='button' className='w-100 btn btn-lg btn-warning m-3'>
            <h2 className='text-center'>HR</h2>
            <h4 className='text-center'>mr.Shyam Rajput</h4>
          </button>

          <button type='button' className='w-100 btn btn-lg btn-warning m-3'>
            <h2 className='text-center'>Project Manager</h2>
            <h4 className='text-center'>mr.aayush Shah</h4>
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
