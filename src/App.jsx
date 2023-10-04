import { useState } from 'react'

import './landingPage.css'
import LandingPage from './landingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FeedbackForm from './components/FeedbackForm'
import CreateForm from './components/CreateForm'
import FormData from './components/FormData'
import Employer from './Employer'
import Navbar from './fixed/Navbar'
function App() {
  const [formData, setformData] = useState(FormData)
  const addFormData = (NewFormData) => {
    if (window.confirm('Are you sure you want to add?')) {
      setformData([...formData, NewFormData])
    }
    console.log(formData)
  }
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route
            path='/form1'
            element={<CreateForm handleAdd={addFormData} />}
          />
          <Route exact path='/employer' element={<Employer />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
