import React from 'react'
import { Link } from 'react-router-dom'
import '../landingPage.css'
import Card from './shared/Card'
import { PropTypes } from 'prop-types'
function FormItem({item, heading}) {
  return (
    <Card>
        <div key={item.title}>{item.title}</div>
        <div key={heading}>{item.heading}</div>
        <div key={item.date}>{item.date}</div>
    {/* // <div className='col' id='myCard'>
    //       <div className='card mb-4 rounded-3 border-primary' id='inMyCard'>
    //         <div className='card-header py-3 text-bg-primary border-primary'>
    //           <h4 className='my-0 fw-normal'>{item.title}</h4>
    //         </div>
    //         <div className='card-body'>
    //           <h1 className='card-title pricing-card-title'>
    //             {item.heading}
    //           </h1>
    //           <ul className='list-unstyled mt-3 mb-4'>
    //             <li>Floated on:2/09/23</li>
    //             <li >Accepted till:{item.date}</li>
    //           </ul> */}
    {/* //           <Link to={'/form'}> */}
    {/* //             <button */}
    {/* //               type='button' */}
    {/* //               className=' btn btn-lg btn-success' */}
    {/* //               id='my-form-buttom' */}
    {/* //             >share your experience */}
    {/* //             </button> */}
    {/* //           </Link> */}
    {/* //         </div> */}
    {/* //       </div> */}
    {/* //     </div> */}
    </Card>
  )
}
FormItem.propTypes={
    item:PropTypes.object,
    }
export default FormItem
