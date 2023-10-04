import { useState } from 'react'
import './landingPage.css'
import { Link } from 'react-router-dom'

function LandingPage() {
  const [count, setCount] = useState(0)

  return (
    <>
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
      <div class="form-floating mb-3 mx-5">
      <label for="formId1">Name of the Authority</label>
        <input
          type="text"
          class="form-control" name="formId1" id="formId1" placeholder=""/>
      </div>
      <div class="form-floating mb-3 mx-5">
      <label for="formId1">Grievance</label>
        <input
          type="text"
          class="form-control" name="formId1" id="formId1" placeholder=""/>
      </div>
      <div>
         <button type="submit" class="btn btn-primary mx-5">Submit</button>
      </div>

      <div className='text-center'>
        <h2 className='nav-link px-2 text-success' id='myTitle'>
          Update about the work done in this week
        </h2>
      </div>
      <div class="form-floating mb-3 mx-5">
      <label for="formId1">Name of the employee</label>
        <input
          type="text"
          class="form-control" name="formId1" id="formId1" placeholder=""/>
      </div>
      <div class="form-floating mb-3 mx-5">
      <label for="formId1">No.of project submitted</label>
        <input
          type="text"
          class="form-control" name="formId1" id="formId1" placeholder=""/>
      </div>
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <h4 class="mx-5">Project submission time:</h4>
        <label class="btn btn-primary mx-2">
          <input type="radio" name="options" id="option1" autocomplete="off" checked/>On Time
        </label>
        <label class="btn btn-primary mx-2">
          <input type="radio" name="options" id="option2" autocomplete="off"/> Late
        </label>
      </div>
      <br></br>
      <br></br>
      <div>
         <button type="submit" class="btn btn-primary mx-5">Submit</button>
      </div>

      <div className='text-center mx-5' id="Review">
        <h2 className='nav-link px-2 text-success' id='myTitle'>
           Read what the employers think about your work!
        </h2>
        <div className='col' id='myCard1'>
          <div className='card mb-4 rounded-3 border-primary' id='ReviewCard'>
            <div className='card-header py-3 text-bg-primary border-primary'>
              <h4 className='my-0 fw-normal'>The CEO</h4>
            </div>
            <div className='card-body'>
              <h1 className='card-title pricing-card-title'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur itaque laborum omnis recusandae ducimus culpa ipsum odit suscipit et ipsa!
              </h1>
            </div>
          </div>
        </div>
        <div className='col' id='myCard1'>
          <div className='card mb-4 rounded-3 border-primary' id='ReviewCard'>
            <div className='card-header py-3 text-bg-primary border-primary'>
              <h4 className='my-0 fw-normal'>Project Manager</h4>
            </div>
            <div className='card-body'>
              <h1 className='card-title pricing-card-title'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur itaque laborum omnis recusandae ducimus culpa ipsum odit suscipit et ipsa!
              </h1>
            </div>
          </div>
        </div>
      </div>


      <div className='text-center'>
        <h2 className='nav-link px-2 text-success' id='myTitle'>
           Check out the best employees of the month!
        </h2>
        <div id="BestEmp">
        <div className='col' id='myCard1'>
          <div className='card mb-4 rounded-3 border-primary' id='inMyCard'>
            <div className='card-header py-3 text-bg-primary border-primary'>
              <h4 className='my-0 fw-normal'>Mr.Ashwin</h4>
            </div>
          </div>
        </div>
        <div className='col' id='myCard1'>
          <div className='card mb-4 rounded-3 border-primary' id='inMyCard'>
            <div className='card-header py-3 text-bg-primary border-primary'>
              <h4 className='my-0 fw-normal'>Mr.Williams</h4>
            </div>
          </div>
        </div>
        <div className='col' id='myCard1'>
          <div className='card mb-4 rounded-3 border-primary' id='inMyCard'>
            <div className='card-header py-3 text-bg-primary border-primary'>
              <h4 className='my-0 fw-normal'>Mrs.Sands</h4>
            </div>
          </div>
        </div>
        </div>
        
      </div>
      
    </>
  )
}

export default LandingPage
