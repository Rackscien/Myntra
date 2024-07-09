import React, { useState } from "react";
import Men from "./Men";
import Women from "./Women";
import Kids from "./Kids";
import User from "./User";

const Home = ({show,setShow}) => {
    
  return (
    <div style={{ minHeight: "90vh", backgroundColor: "white",padding: "6px", }}>
        {
            show.men && <Men/>
        }
        {
            show.women && <Women/>
        }
        {
            show.kids && <Kids/>
        }
        {
            show.user && <User/>
        }
      <div
        style={{
            marginTop:"10vh",
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          height: "40vh",
          backgroundColor: "pink",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "5px",
          
        }}
      >
        <h1 style={{ fontSize: "8vh" }}>HackerRamp</h1>
        <h2>WeForShe</h2>
        <h3 style={{color:"gray"}}>Myntra</h3>
      </div>
      <div 
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          height: "40vh",
          backgroundColor: "pink",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "5px",
          margin:"5px 0"
          
        }}>
            Women latest style images
      </div>
      <div 
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          height: "40vh",
          backgroundColor: "pink",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "5px",
           margin:"5px 0"
          
        }}>
            Men Style images
      </div>
      <div 
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          height: "40vh",
          backgroundColor: "pink",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "5px",
           margin:"5px 0"
          
        }}>
            Kids style image
      </div>
    </div>
  );
};

export default Home;
