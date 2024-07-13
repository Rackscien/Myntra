import React, { useState } from 'react'
import "../styles/QuizCard.css"
import { checkquiz } from '../../../../utils/Quiztils';

const QuizCards = ({val}) => {
  //very wrong way to do this
  //but as of now i am doing this
  const [answer,setAnswer]=useState("");
  const [check,setCheck] =useState(false)
  const [status,setStatus]=useState("");
  const [showResult,setShowResult]=useState(false);
  const [css,setCss]=useState(["","","",""]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted-->');
    setShowResult(true);
    checkquiz(val._id,answer,setAnswer,setStatus);
    setCheck(false);
    setCss(["","","",""]);
  }
  return (
    <div className='battleCard'>
      <div className='battleCardTop'>
      <h3>{val.question}</h3>
      </div>
      
      <div className='battleCardBottom'>
        <h4>Options</h4>
        <p className={`p1 ${css[0]}`} value={answer} onClick={(e)=>{setAnswer(`${val.option1}`); setCheck(true); setCss(["checked","","",""]); }}>{val.option1}</p>
        <p className={`p1 ${css[1]}`} value={answer} onClick={(e)=>{setAnswer(`${val.option2}`); setCheck(true); setCss(["","checked","",""]);}}>{val.option2}</p>
        <p className={`p1 ${css[2]}`} value={answer} onClick={(e)=>{setAnswer(`${val.option3}`); setCheck(true); setCss(["","","checked",""]);}}>{val.option3}</p>
        <p className={`p1 ${css[3]}`} value={answer} onClick={(e)=>{setAnswer(`${val.option4}`); setCheck(true); setCss(["","","","checked"]);}}>{val.option4}</p>
      </div>
      {(check)?<button onClick={handleSubmit} style={{height:"100px"}}>Submit</button> : <></>}
      {showResult && <>
          {(status===true)?<h3 style={{color:"green",margin:"2px"}}>Correct</h3>:<h3 style={{color:"red",margin:"2px"}}>Incorrect</h3>}
        </>
      }
    </div>
  )
}

export default QuizCards
