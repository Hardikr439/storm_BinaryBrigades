import { useState } from 'react'

import './landingPage.css'
import LandingPage from './landingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FeedbackForm from './components/FeedbackForm'
import CreateForm from './components/CreateForm'
import FormData from './components/FormData'
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
    <CreateForm handleAdd={addFormData}/>
      {/* <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/form1' element={<FeedbackForm />} />
          <Route path='/form2' element={<FeedbackForm />} />
          <Route path='/form3' element={<FeedbackForm />} />
        </Routes>
      </Router> */}
    </>
  )
}

export default App
