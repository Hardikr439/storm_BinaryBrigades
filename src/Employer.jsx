import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Employer.css'
function Employer() {
  return (
    <>
      <div class='d-flex gap-2 justify-content-center p-5'>
        <Link to={'/form1'}>
          <button class='btn btn-success p-4 lh-1 mx-5' type='button'>
            <span class='visually-hidden'>
              <h4>CREATE NEW FORM</h4>
            </span>
          </button>
        </Link>
      </div>

      <div class='mx-5 bg-body border-primary  ' id='main-myCards'>
        <h6 class='border-bottom pb-2  my-1 text-center'>
          Created & active forms
        </h6>
        <div
          class='d-flex text-body-secondary pt-3 mx-4 justify-content-between'
          id='myCards'
        >
          <div className='d-flex'>
            <p class='pb-3 mb-0 small lh-sm border-bottom mx-2' id='myText'>
              <strong class='d-block text-gray-dark'>
                Industry visit form
              </strong>
              Google headoffice visit on 12th august
            </p>
          </div>
          <div>
            <button class='btn btn-danger mt-0' type='button' id='deleteButton'>
              <span class='visually-hidden'>DELETE FORM</span>
            </button>
          </div>
        </div>
        <div
          class='d-flex text-body-secondary pt-3 mx-4 my-3 justify-content-between'
          id='myCards'
        >
          <div className='d-flex'>
            <p class='pb-3 mb-0 small lh-sm border-bottom mx-2' id='myText'>
              <strong class='d-block text-gray-dark'>
                Client meeting form
              </strong>
              Meeting with the Walmart CE0
            </p>
          </div>
          <div>
            <button class='btn btn-danger mt-0' type='button' id='deleteButton'>
              <span class='visually-hidden'>DELETE FORM</span>
            </button>
          </div>
        </div>
        <div
          class='d-flex text-body-secondary pt-3 mx-4 justify-content-between'
          id='myCards'
        >
          <div className='d-flex'>
            <p class='pb-3 mb-0 small lh-sm border-bottom mx-2' id='myText'>
              <strong class='d-block text-gray-dark '>
                Ongoing project form
              </strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              consequatur quibusdam ipsum illum nulla perferendis nemo
            </p>
          </div>
          <div>
            <button class='btn btn-danger mt-0' type='button' id='deleteButton'>
              <span class='visually-hidden'>DELETE FORM</span>
            </button>
          </div>
        </div>
        <small class='d-block text-end mt-3'>
          <a href='#' id='loadForms'>
            load more forms
          </a>
        </small>
      </div>

      <main class='col-md-5 ms-sm-auto col-lg-10 px-md-4'>
        <div class='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom my-3'>
          <h1 class='h2 mx-5 text-primary'>select a form name to view </h1>
          <div class='btn-toolbar mb-2 mb-md-0'>
            <select class='form-select mx-2' id='country' required=''>
              <option value=''>form name</option>
              <option>United States</option>
            </select>
            <select class='form-select mx-2' id='country' required=''>
              <option value=''>choose by date</option>
              <option>United States</option>
            </select>
          </div>
        </div>

        <h2 class='text-center text-primary'>Check out the responses</h2>
        <div class='table-responsive small mx-5'>
          <table class='table table-striped table-sm'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>name</th>
                <th scope='col'>gender</th>
                <th scope='col'>age</th>
                <th scope='col'>rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1,001</td>
                <td>name1</td>
                <td>male</td>
                <td>25</td>
                <td>5</td>
              </tr>
              <tr>
                <td>1,001</td>
                <td>name1</td>
                <td>male</td>
                <td>25</td>
                <td>5</td>
              </tr>
              <tr>
                <td>1,001</td>
                <td>name1</td>
                <td>male</td>
                <td>25</td>
                <td>5</td>
              </tr>
              <tr>
                <td>1,001</td>
                <td>name1</td>
                <td>male</td>
                <td>25</td>
                <td>5</td>
              </tr>
              <tr>
                <td>1,001</td>
                <td>name1</td>
                <td>male</td>
                <td>25</td>
                <td>5</td>
              </tr>
              <tr>
                <td>1,001</td>
                <td>name1</td>
                <td>male</td>
                <td>25</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}
export default Employer
