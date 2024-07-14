import React, { useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import User from "../User";
import Features from "../Features";
import "./styles/diary.css";
import { addDiaryData, getDiaryData } from "../../../utils/DiaryUtils";
import DiaryCards from "../Cards/DiaryCards";

const Style_Diary = ({ show, userName, userEmail, userAddress }) => {
  const [content, setContent] = useState("");
  const [DiaryData, setDiaryData] = useState([]);
  useEffect(() => {
    getDiaryData(userName, setDiaryData);
  }, []);
  return (
    <div
      style={{ minHeight: "90vh", backgroundColor: "white", padding: "6px" }}
    >
      {show.user && (
        <User
          userName={userName}
          userEmail={userEmail}
          userAddress={userAddress}
        />
      )}
      {show.features && <Features />}
      <div
        style={{
          marginTop: "0vh",
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          minHeight: "90vh",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "5px",
        }}
      >
        <div className="diary">
          <div className="diary-text">
            {DiaryData.map((val) => {
              return <DiaryCards val={val} />;
            })}
          </div>
          <div className="diary-input">
            <input
              type="text"
              placeholder="Write Here.."
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
            <IoMdSend
              className="sendlogo"
              style={{
                width: "4vw",
                height: "5vh",
                cursor: "pointer",
                marginLeft: "4px",
                border: "",
              }}
              onClick={() => {
                addDiaryData(content, userName, setContent, setDiaryData);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Style_Diary;
