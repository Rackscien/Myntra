import React from "react";

import "./documentaries.css";
import User from "../../User";
import Features from "../../Features";
import YoutubeEmbed from "./YoutubeEmbed";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Documentaries = ({ show, setShow }) => {
  const embedId = "rokGy0huYEA";
  return (
    <div
      style={{ minHeight: "88vh", backgroundColor: "white", padding: "6px" }}
    >
      {show.user && <User />}
      {show.features && <Features />}

      <div className="documentaries">
        <div className="documentariesTop">
          <div className="d1">
            <p>Youtube Id</p>
            <input type="text" />
          </div>
          <div className="d1">
            <p>URL</p>
            <input type="text" />
          </div>
          <div className="d1">
            <p>Context</p>
            <input type="text" />
          </div>
          <div className="d1">
            <button>ADD</button>
          </div>
        </div>
        <div className="documentariesBottom">
          <div className="documentariesBottomIn">
          
            <YoutubeEmbed embedId="rokGy0huYEA" />
            <div style={{marginLeft:"20px"}}>
              <p style={{fontFamily:"serif", fontSize:"30px"}}>URL : <Link to="https://www.youtube.com/watch?v=oJM7v0Jpn3E" style={{fontSize:"25px"}}>https://www.youtube.com/watch?v=oJM7v0Jpn3E</Link></p>
              <p style={{fontFamily:"serif", fontSize:"30px"}}>Context : </p>
              <p style={{fontFamily:"serif", fontSize:"30px"}}>By :</p>
            </div>
         
          </div>
          <div className="documentariesBottomIn">
          
            <YoutubeEmbed embedId="rokGy0huYEA" />
            <div style={{marginLeft:"20px"}}>
              <p style={{fontFamily:"serif", fontSize:"30px"}}>URL : <Link to="https://www.youtube.com/watch?v=oJM7v0Jpn3E" style={{fontSize:"25px"}}>https://www.youtube.com/watch?v=oJM7v0Jpn3E</Link></p>
              <p style={{fontFamily:"serif", fontSize:"30px"}}>Context : </p>
              <p style={{fontFamily:"serif", fontSize:"30px"}}>By :</p>
            </div>
         
          </div>
          
            
          
        </div>
      </div>

    </div>
  );
};

export default Documentaries;
