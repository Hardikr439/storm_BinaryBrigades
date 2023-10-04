import { useState } from "react";
import Card from "./shared/Card"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
function FeedbackForm() {
    const [text,setText]=useState('')
    const [rating,setRating]=useState(10)
    const [btnDisabled,setBtnDisabled]=useState(true)
    const [message,setMessage]=useState('')
    const handleTextChange=(e)=>{
      if(text===''){
        setBtnDisabled(true)
        setMessage(null)
      }
       else if(text!==''&& text.trim().length<=10){
       
       setMessage('Text must be atleast 10 charcters')
       setBtnDisabled(true)
      }
      else 
      {
        setMessage(null)
        setBtnDisabled(false)
      }
      setText(e.target.value)
    }
    const handleSumbit=(e)=>{
      e.preventDefault()
      if(text.trim().length>10)
      { const Feedback={
        rating,
        text
      }
      setText('')
    }
    }
  return (
    <div className="center"> 
    <Card>
        <form onSubmit={handleSumbit}>
         <h2>How would you rate your service with us?</h2>
         <RatingSelect select={(rating)=>{setRating(rating)}} />
         <div className="input-group">          
            <input onChange={handleTextChange} type="text" placeholder="Write A Review" required value={text}/>
            {/* <Button type="submit" isDisabled={btnDisabled}>Submit</Button> */}
         </div>
         {message && <div className="message">{message}</div>}
         <div className="input-group"><input onChange={handleTextChange} type="text" placeholder="Write A Review" required value={text}/></div>
          <div>
            <h3>Gender</h3>
          </div>
          <div className="gender"><div><input type="radio" name="gender" value='Male' />
           Male</div>
           <div> <input  type='radio' name="gender" value='Female'/>
           Female</div>
         <div><input type="radio" name="gender" value='Others'/>
           Others</div>
          </div>
          
        </form>
    </Card>
    </div>
  )
}

export default FeedbackForm