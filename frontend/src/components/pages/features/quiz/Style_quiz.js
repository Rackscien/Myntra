import React, { useEffect, useState } from "react";
import User from "../../User";
import Features from "../../Features";
import "../styles/Quiz.css";
import { addQuiz, getQuiz } from "../../../../utils/Quiztils";
import QuizCards from "./QuizCards";



const Style_quiz = ({ show, setShow}) => {
  
  const [allquiz,setAllQuiz]=useState([]);
  const [question, setQuestion] =useState("")
  const [option1, setOption1] =useState("")
  const [option2, setOption2] =useState("")
  const [option3, setOption3] =useState("")
  const [option4, setOption4] =useState("")
  const [answer , setAnswer]=useState("")
 
  useEffect(()=>{
    getQuiz(setAllQuiz);
    console.log('all quiz--->',allquiz);
  },[])
  return (
    <div
      style={{ minHeight: "88vh", backgroundColor: "white", padding: "6px" }}
    >
      {show.user && <User/>}
      {show.features && <Features show={show} setShow={setShow} />}
      <div className="quizMain">
        <div className="quizleft">
          <div className="question">
            <p>Question :</p>
            <textarea placeholder="Write the question here.." rows={5} value={question} onChange={(e)=>{setQuestion(e.target.value)}}/>
          </div>
          <div className="options">
            <p>Options : </p>
            <div>
            <input placeholder="Option 1" value={option1} onChange={(e)=>{setOption1(e.target.value)}}/>
            <input placeholder="Option 2" value={option2} onChange={(e)=>{setOption2(e.target.value)}}/>
            <input placeholder="Option 3" value={option3} onChange={(e)=>{setOption3(e.target.value)}}/>
            <input placeholder="Option 4" value={option4} onChange={(e)=>{setOption4(e.target.value)}}/>
            
            </div>
            
          </div>
          <div className="answer">
            <p>Correct Answer</p>
            <input placeholder="Correct Answer" value={answer} onChange={(e)=>{setAnswer(e.target.value)}}/>
          </div>
          <div className="AddQuestion" style={{display:"flex", marginLeft:"5px"}}>
            <button onClick={()=>{addQuiz(question,setQuestion,option1,setOption1,option2,setOption2,option3,setOption3,option4,setOption4,answer,setAnswer, setAllQuiz)}}>ADD</button>
          </div>
        </div>
        <div className="quizRight">
          {
            allquiz.map((val)=>{
              return <QuizCards val={val}/>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Style_quiz;
