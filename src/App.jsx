import { useState } from 'react'

import './landingPage.css'
import LandingPage from './landingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FeedbackForm from './components/FeedbackForm'
import CreateForm from './components/CreateForm'
import FormData from './components/FormData'
import Employer from './Employer'
function App() {
  const [formData,setformData]=useState(FormData)
  const addFormData=(NewFormData)=>{
    if(window.confirm('Are you sure you want to add?'))
    {
   setformData([...formData,NewFormData])
    }
  }
  return (
     <>
    {/* // <CreateForm handleAdd={addFormData}/> */}
    
      <Router>
        <Routes>
          
           <Route path='/form1' element={<CreateForm handleAdd={addFormData}/>} />
           <Route path='/' element={<Employer />} />
           {/* <Route path='/form3' element={<FeedbackForm />} />   */}
        </Routes>
      </Router>
      {/* <Employer /> */}
    </>
  )
}

export default App
