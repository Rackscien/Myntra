import React, { useEffect, useState } from "react";
import User from "../../User";
import Features from "../../Features";
import "../styles/Quiz.css";
import { getQuiz } from "../../../../utils/Quiztils";
import QuizCards from "./QuizCards";



const Style_quiz = ({ show, setShow }) => {
  
  const [allquiz,setAllQuiz]=useState([]);
  
  useEffect(()=>{
    getQuiz(setAllQuiz);
  },[])
  return (
    <div
      style={{ minHeight: "88vh", backgroundColor: "white", padding: "6px" }}
    >
      {show.user && <User />}
      {show.features && <Features />}
      <div className="quizMain">
        <div className="quizleft"></div>
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
