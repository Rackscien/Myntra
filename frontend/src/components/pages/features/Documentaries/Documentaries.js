import React, { useEffect, useState } from "react";

import "./documentaries.css";
import User from "../../User";
import Features from "../../Features";
import YoutubeEmbed from "./YoutubeEmbed";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { addDocumentaries, getDocumentaries } from "./DocumentaryUtils";

const Documentaries = ({ show, setShow }) => {
  const [youtube_id,setYoutube_id]=useState("")
  const [url,setUrl]=useState("")
  const [ Context,setContext]=useState("")
  const [hashtags,setHashtages]=useState("")
  const [documentaries,setDocumentaries]=useState([])
  // const embedId = "rokGy0huYEA";
  useEffect(()=>{
    getDocumentaries(setDocumentaries);
  },[])
  return (
    <div
      style={{ minHeight: "88vh", backgroundColor: "white", padding: "6px" }}
    >
      {show.user && <User/>}
      {show.features && <Features show={show} setShow={setShow} />}

      <div className="documentaries">
        <div className="documentariesLeft">
          <div className="d1">
            <p>Youtube Id : </p>
            <input type="text" value={youtube_id} onChange={(e)=>{setYoutube_id(e.target.value)}}/>
          </div>
          <div className="d1">
            <p>URL : </p>
            <input type="text" value={url} onChange={(e)=>{setUrl(e.target.value)}}/>
          </div>
          <div className="d1">
            <p>Context : </p>
            <input type="text" value={Context} onChange={(e)=>{setContext(e.target.value)}}/>
          </div>
          <div className="d1">
            <p>Hashtage : </p>
            <input type="text" value={hashtags} onChange={(e)=>{setHashtages(e.target.value)}}/>
          </div>
          <div className="d1">
            <button onClick={()=>{addDocumentaries(youtube_id,setYoutube_id, url,setUrl, Context,setContext,hashtags,setHashtages,setDocumentaries)}}>ADD</button>
          </div>
        </div>
        <div className="documentariesRight">
          {
            documentaries.map((val)=>{
              return  <div className="documentariesBottomIn">
          
              <YoutubeEmbed embedId={val.youtube_id} />
              <div style={{marginLeft:"0px"}}>
                <p style={{fontFamily:"serif", fontSize:"22px"}}>URL : <Link to={val.url} style={{fontSize:"20px"}}>{val.url}</Link></p>
                <p style={{fontFamily:"serif", fontSize:"20px"}}>Context : {val.Context}</p>
                <p style={{fontFamily:"serif", fontSize:"22px",display:"flex",alignItems:"center" }}>By : <p style={{color:"blue", fontSize:"18px"}}>{val.hashtags}</p></p>
              </div>
           
            </div>
            })
          }
          
          
            
          
        </div>
      </div>

    </div>
  );
};

export default Documentaries;
