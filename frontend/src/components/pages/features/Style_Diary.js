import React from 'react'
import { IoMdSend } from "react-icons/io";
import User from "../User";
import Features from "../Features";
import "./styles/diary.css"
const Style_Diary = ({ show,userName, userEmail, userAddress  }) => {
    return (
        <div
          style={{ minHeight: "89vh", backgroundColor: "white", padding: "6px" }}
        >
          
          {show.user && <User userName={userName}  userEmail={userEmail} userAddress={userAddress}/>}
          {show.features && <Features />}
          <div
            style={{
              marginTop: "0vh",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              height: "88.5vh",
              backgroundColor: "pink",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px",
            }}
          >
            <div className='diary'>
              <div className='diary-text'>
                main diary
              </div>
              <div className='diary-input'>
                <input type='text' placeholder='Write Here..'/>
                <IoMdSend  style={{width:"4vw",height:"5vh" , cursor:"pointer"}}/>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Style_Diary
