import { useState } from 'react'
import './landingPage.css'
import LandingPage from './landingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FeedbackForm from './components/FeedbackForm'
import CreateForm from './components/CreateForm'
import FormData from './components/FormData'
import Employer from './Employer'
import Navbar from './fixed/Navbar'
import { DataProvider } from './Context/DataContext'
function App() {
  return (
    <>
    <DataProvider>
    <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route
            path='/form1'
            element={<CreateForm />}
          />
          <Route exact path='/employer' element={<Employer />} />
        </Routes>
      </Router>
    </DataProvider>
    </>
  )
}

export default App
