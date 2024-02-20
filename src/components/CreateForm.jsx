import { useState ,useContext } from 'react'
import {Link} from 'react-router-dom'
import Template from './shared/template'
import DataContext from '../Context/DataContext'
function CreateForm({ handleAdd }) {
  const [heading, setHeading] = useState('')
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [questions, setQuestions] = useState([])
  const [q, setq] = useState('')
  const { Data ,addData}=useContext(DataContext)
  const handleTextChange = (e) => {
    setHeading(e.target.value)
  }
  const handleTextChange1 = (e) => {
    setTitle(e.target.value)
  }
  const handleTextChange2 = (e) => {
    setq(e.target.value)
  }
  const handleDate = (e) => {
    setDate(e.target.value)
  }
  const handleAddQuestions = (e) => {
    setQuestions([...questions, q])
    e.preventDefault()
    setq('')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const NewFormData = {
      heading: { heading },
      title: { title },
      date: { date },
      qa: { questions },
    }
    addData(NewFormData)
    setHeading('')
    setTitle('')
    setQuestions('')

  }

  return (
    <>
      <Template>
        <h1>Creating Form</h1>
        <div>
          <input
            onChange={handleTextChange}
            className='input-group'
            type='text'
            placeholder='Heading'
            value={heading}
          />
        </div>
        <div>
          <input
            onChange={handleTextChange1}
            className='input-group'
            type='text'
            placeholder='Title'
            value={title}
          />
        </div>
        <div>
          End Date:
          <input onChange={handleDate} type='date' value={date} />
        </div>
        <div>
          <input
            onChange={handleTextChange2}
            className='input-group'
            type='text'
            placeholder='Add a Question'
            value={q}
          />
        </div>
        <button
          onClick={handleAddQuestions}
          className='btn btn-large btn-block btn-outline-primary mt-3 '
        >
          ADD QUESTION
        </button>
        <Link to='/'>
        <button
          onClick={handleSubmit}
          className='btn btn-large btn-block btn-outline-primary mt-3 '
        >
          Submit
        </button>
        </Link>
      </Template>
    </>
  )
}
export default CreateForm
