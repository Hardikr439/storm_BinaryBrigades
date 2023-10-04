import { useState } from 'react'

import './landingPage.css'
import LandingPage from './landingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FeedbackForm from './components/FeedbackForm'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/form1' element={<FeedbackForm />} />
          <Route path='/form2' element={<FeedbackForm />} />
          <Route path='/form3' element={<FeedbackForm />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
