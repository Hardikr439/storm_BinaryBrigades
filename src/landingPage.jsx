import { useState } from 'react'
import './landingPage.css'
import { Link } from 'react-router-dom'
import FormData from './components/FormData'
import Card from './components/shared/Card'
import FormItem from './components/FormItem'
import FormShow from './components/shared/FormShow'
function LandingPage() {
  // const [count, setCount] = useState(FormData.length)
  return (<>
    <div>
      <FormShow />
    </div>

      {/* {FormData.map((item) => {(
        <div>{item.title}</div>
        // <div>{'item.heading'}</div>
        // <div>{'item.date'}</div>
          // <div className='col' id='myCard'>
          //   <div className='card mb-4 rounded-3 border-primary' id='inMyCard'>
          //     <div className='card-header py-3 text-bg-primary border-primary'>
          //       <h4 className='my-0 fw-normal'>{item.heading}</h4>
          //     </div>
          //     <div className='card-body'>
          //       <h1 className='card-title pricing-card-title'>{item.title}</h1>
          //       <ul className='list-unstyled mt-3 mb-4'>
          //         <li>{item.date}</li>
          //         <li>Accepted till:2/10/23</li>
          //       </ul>
          //       <Link to={'/form'}>
          //         <button
          //           type='button'
          //           className=' btn btn-lg btn-success'
          //           id='my-form-button'
          //         >
          //           share your experience
          //         </button>
          //       </Link>
          //     </div>
          //   </div>
          // </div>
        )
      })} */}

      <div className='text-center'>
        <h2 className='nav-link px-2 text-success' id='myTitle'>
          Share your Grievances <strong id='myStrong'>anonymously</strong> about
          the higher authorities
        </h2>
      </div>
      <div className='form-floating mb-3 mx-5'>
        <label htmlFor='formId1'>Name of the Authority</label>
        <input
          type='text'
          className='form-control'
          name='formId1'
          id='formId1'
          placeholder=''
        />
      </div>
      <div className='form-floating mb-3 mx-5'>
        <label htmlFor='formId1'>Grievance</label>
        <input
          type='text'
          className='form-control'
          name='formId1'
          id='formId1'
          placeholder=''
        />
      </div>
      <div>
        <button type='submit' className='btn btn-primary mx-5'>
          Submit
        </button>
      </div>

      <div className='text-center'>
        <h2 className='nav-link px-2 text-success' id='myTitle'>
          Update about the work done in this week
        </h2>
      </div>
      <div className='form-floating mb-3 mx-5'>
        <label htmlFor='formId1'>Name of the employee</label>
        <input
          type='text'
          className='form-control'
          name='formId1'
          id='formId1'
          placeholder=''
        />
      </div>
      <div className='form-floating mb-3 mx-5'>
        <label htmlFor='formId1'>No.of project submitted</label>
        <input
          type='text'
          className='form-control'
          name='formId1'
          id='formId1'
          placeholder=''
        />
      </div>
      <div className='btn-group btn-group-toggle' data-toggle='buttons'>
        <h4 className='mx-5'>Project submission time:</h4>
        <label className='btn btn-primary mx-2'>
          <input
            type='radio'
            name='options'
            id='option1'
            autoComplete='off'
            defaultChecked
          />
          On Time
        </label>
        <label className='btn btn-primary mx-2'>
          <input type='radio' name='options' id='option2' autoComplete='off' />{' '}
          Late
        </label>
      </div>
      <br></br>
      <br></br>
      <div>
        <button type='submit' className='btn btn-primary mx-5'>
          Submit
        </button>
      </div>

      <div className='text-center mx-5' id='Review'>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur itaque laborum omnis recusandae ducimus culpa ipsum
                odit suscipit et ipsa!
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur itaque laborum omnis recusandae ducimus culpa ipsum
                odit suscipit et ipsa!
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center'>
        <h2 className='nav-link px-2 text-success' id='myTitle'>
          Check out the best employees of the month!
        </h2>
        <div id='BestEmp'>
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
