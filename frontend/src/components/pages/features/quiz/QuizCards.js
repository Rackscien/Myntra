import React, { useState } from 'react'
import "../styles/QuizCard.css"
import { checkquiz } from '../../../../utils/Quiztils';

const QuizCards = ({val}) => {
  const [id,setId]=useState("");
  const [answer,setAnswer]=useState("");
  const [check,setCheck] =useState()
  const [status,setStatus]=useState({});
  return (
    <div className='battleCard' onClick={()=>{setId(`${val._id}`); }}>
      <div className='battleCardTop'>
      <h3>{val.question}</h3>
      </div>
      
      <div className='battleCardBottom'>
        <h4>Options</h4>
        <p className="p1" value={answer} onClick={(e)=>{setAnswer(`${val.option1}`); }}>{val.option1}</p>
        <p className='p1 ' value={answer} onClick={(e)=>{setAnswer(`${val.option2}`); }}>{val.option2}</p>
        <p className='p1 ' value={answer} onClick={(e)=>{setAnswer(`${val.option3}`); }}>{val.option3}</p>
        <p className='p1 ' value={answer} onClick={(e)=>{setAnswer(`${val.option4}`); }}>{val.option4}</p>
      </div>
      <button onClick={()=>{checkquiz(id,answer,setAnswer,setStatus); console.log(status)}}>Submit</button>
    </div>
  )
}

export default QuizCards
