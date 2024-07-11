import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Features = ({show, setShow}) => {
  const x = {
    textDecoration: "none",
    color: "black",
    fontSize: "15px",
    fontWeight: "500",
    color:'#FB6F90'
    // width:"100%"
  };
  const x1 = {
    // boxShadow:' rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset', 
    //  border:'1px solid #FB6F90',
      borderRadius:"5px",
      margin:"2px",
      padding:"4px",
      cursor:'pointer',
    //   backgroundColor:'pink',
  };
  const remove=()=>{
    setShow({
        men: false,
        women: false,
        kids: false,
        user: false,
        features:false,
      })
  }
  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: "white",
        top: "11vh",
        width: "15vw",
        left: "25vw",
        height: "40vh",
        border: "3px solid #FB6F90",
        borderRadius: "5px",
        zIndex: "100",
      }}
    >
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          //   alignItems: "center",
          padding: "10px",
          
        }}
      >
        <li style={{ textAlign: "center" }}>
          <h4>FEATUERS</h4>
        </li>
        <li style={x1}>
          <Link to="/squad" style={x} onClick={remove}>
            Style Squads
          </Link>
        </li>
        <li style={x1}>
          <Link to="/battles" style={x} onClick={remove}>
            Style Battles
          </Link>
        </li>
        <li style={x1}>
          <Link to="/quiz" style={x} onClick={remove}>
            Style Quiz
          </Link>
        </li>
        <li style={x1}>
          <Link to="/diary" style={x} onClick={remove}>
            Style Diary
          </Link>
        </li>
        <li style={x1}>
          <Link to="/scenes" style={x} onClick={remove}>
            Behind the scenes
          </Link>
        </li>
        <li style={x1}>
          <Link to="/fashion" style={x} onClick={remove}>
            Fashion Documentaries
          </Link>
        </li>
        <li style={x1}>
          <Link to="/documentaries" style={x} onClick={remove}>
            Latest Fashion
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Features;
