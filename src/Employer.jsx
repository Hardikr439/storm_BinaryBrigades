import React, { Component } from 'react'
import { Link } from 'react-router-dom'
function Employer() {
  return (
    <>
      <div class='d-flex gap-2 justify-content-center pb-5'>
        <Link to={'/form1'}>
          <button class='btn btn-success p-3 lh-1 mx-5' type='button'>
            <svg class='bi' width='24' height='24'>
              <use xlink:href='#x-lg'></use>
            </svg>
            <span class='visually-hidden'>
              <h4>CREATE A FORM</h4>
            </span>
          </button>
        </Link>
        <button class='btn btn-danger p-3 lh-1' type='button'>
          <svg class='bi' width='24' height='24'>
            <use xlink:href='#x-lg'></use>
          </svg>
          <span class='visually-hidden'>
            <h4>DELETE A FORM</h4>
          </span>
        </button>
      </div>

      <div class='mx-5 my-3 p-3 bg-body border-primary rounded shadow-sm'>
        <h6 class='border-bottom pb-2 mb-0 text-success text-center'>
          Created & active forms
        </h6>
        <div class='d-flex text-body-secondary pt-3 mx-4'>
          <svg
            class='bd-placeholder-img flex-shrink-0 me-2 rounded'
            width='32'
            height='32'
            xmlns='http://www.w3.org/2000/svg'
            role='img'
            aria-label='Placeholder: 32x32'
            preserveAspectRatio='xMidYMid slice'
            focusable='false'
          >
            <title>Placeholder</title>
            <rect width='100%' height='100%' fill='#007bff'></rect>
            <text x='50%' y='50%' fill='#007bff' dy='.3em'>
              32x32
            </text>
          </svg>
          <p class='pb-3 mb-0 small lh-sm border-bottom mx-2'>
            <strong class='d-block text-gray-dark'>Industry visit form</strong>
            Google headoffice visit on 12th august
          </p>
        </div>
        <div class='d-flex text-body-secondary pt-3 mx-4'>
          <svg
            class='bd-placeholder-img flex-shrink-0 me-2 rounded'
            width='32'
            height='32'
            xmlns='http://www.w3.org/2000/svg'
            role='img'
            aria-label='Placeholder: 32x32'
            preserveAspectRatio='xMidYMid slice'
            focusable='false'
          >
            <title>Placeholder</title>
            <rect width='100%' height='100%' fill='#e83e8c'></rect>
            <text x='50%' y='50%' fill='#e83e8c' dy='.3em'>
              32x32
            </text>
          </svg>
          <p class='pb-3 mb-0 small lh-sm border-bottom mx-2'>
            <strong class='d-block text-gray-dark'>Client meeting form</strong>
            Meeting with the Walmart CE0
          </p>
        </div>
        <div class='d-flex text-body-secondary pt-3 mx-4'>
          <svg
            class='bd-placeholder-img flex-shrink-0 me-2 rounded'
            width='32'
            height='32'
            xmlns='http://www.w3.org/2000/svg'
            role='img'
            aria-label='Placeholder: 32x32'
            preserveAspectRatio='xMidYMid slice'
            focusable='false'
          >
            <title>Placeholder</title>
            <rect width='100%' height='100%' fill='#6f42c1'></rect>
            <text x='50%' y='50%' fill='#6f42c1' dy='.3em'>
              32x32
            </text>
          </svg>
          <p class='pb-3 mb-0 small lh-sm border-bottom mx-2'>
            <strong class='d-block text-gray-dark'>Ongoing project form</strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            consequatur quibusdam ipsum illum nulla perferendis nemo amet eum
            similique rerum!
          </p>
        </div>
        <small class='d-block text-end mt-3'>
          <a href='#'>load more forms</a>
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
        <br></br>

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
