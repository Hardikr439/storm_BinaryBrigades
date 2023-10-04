import {useState} from 'react'
import Template from "./shared/template"
function CreateForm({handleAdd}) {
    const[heading,setHeading]=useState('')
    const [title,setTitle]=useState('')
    const [date,setDate]=useState('')
    const handleTextChange=(e)=>{
        setHeading(e.target.value)
      }
      const handleTextChange1=(e)=>{
        setTitle(e.target.value)
      }
      const handleDate=(e)=>{
        setDate(e.target.value)
      }
      const handleSubmit=(e)=>{
        e.preventDefault()
       const NewFormData={
        heading:{heading},
        title:{title},
        date:{date}
       }
       handleAdd(NewFormData)
       setHeading('')
       setTitle('')
      }
  return (
    <>
     <Template>
        <h1>Creating Form</h1>
     <div><input onChange={handleTextChange} className="input-group" type="text" placeholder="Heading" value={heading} /></div>
     <div><input  onChange={handleTextChange1} className="input-group" type="text" placeholder="Title" value={title} /></div>
     <div>End Date:
     <input onChange={handleDate} type="date" value={date} /></div>
     <button onClick={handleSubmit}className="btn btn-large btn-block btn-outline-primary mt-3 ">Submit</button>
     </Template>
    </>
  )
}

export default CreateForm
