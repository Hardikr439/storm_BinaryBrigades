import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './LandingPage.css'

function LandingPage(){
    const [count, setCount] = useState(0)

  return (
    <>

      <div class="container">
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
          <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>
        <a href="D:\codeissance\storm_BinaryBrigades\images\feedback.png" alt=""></a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#" class="nav-link px-2">Feedbacks</a></li>
        <li><a href="#" class="nav-link px-2">Grievances</a></li>
        <li><a href="#" class="nav-link px-2">Results</a></li>
        <li><a href="#" class="nav-link px-2">your review</a></li>
      </ul>

        <div class="col-md-3 text-end">
            <button type="button" class="btn btn-outline-primary me-2">Employee</button>
            <button type="button" class="btn btn-primary">Employer</button>
        </div>
        </header>
        </div>


        <div class="text-center ">
            <h2 class="nav-link px-2 text-success">Ongoing feedback forms</h2>
        </div> <br></br>


        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 text-bg-primary border-primary">
            <h4 class="my-0 fw-normal">Industry visit form</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">Google headoffice visit on 12th august</h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Floated on:2/09/23</li>
              <li>Accepted till:2/10/23</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-success">tell us about the tour</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 text-bg-primary border-primary">
            <h4 class="my-0 fw-normal">Client meeting form</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">Meeting with the Walmart CE0</h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Floated on:2/09/23</li>
              <li>Accepted till:2/10/23</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-success">share your experience</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 text-bg-primary border-primary">
            <h4 class="my-0 fw-normal">Ongoing project form</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">Project on scaling our company</h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Floated on:2/09/23</li>
              <li>Accepted till:2/10/23</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-success">share your thoughts</button>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center">
            <h2 class="nav-link px-2 text-success">Share your Grievances anonymously about the higher authorities</h2>
    </div>

    <div class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
    <div class="list-group list-group-checkable d-grid gap-2 border-0">
    
    <button type="button" class="w-100 btn btn-lg btn-warning m-3">
            <h2 class="text-center">CEO</h2>
            <h4 class="text-center">mrs.Kriya trivedi</h4>
    </button>

    <button type="button" class="w-100 btn btn-lg btn-warning m-3">
            <h2 class="text-center">HR</h2>
            <h4 class="text-center">mr.Shyam Rajput</h4>
    </button>

    <button type="button" class="w-100 btn btn-lg btn-warning m-3">
            <h2 class="text-center">Project Manager</h2>
            <h4 class="text-center">mr.aayush Shah</h4>
    </button>

    <button type="button" class="w-100 btn btn-lg btn-warning m-3">
            <h2 class="text-center">Employee</h2>
            <h4 class="text-center">Any employee working in our firm</h4>
    </button>


    </div>
    </div>
    

    
    </>
  )
}

export default LandingPage