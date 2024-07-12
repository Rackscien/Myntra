import React, { useState } from "react";
import Men from "./Men";
import Women from "./Women";
import Kids from "./Kids";
import User from "./User";
import Features from "./Features";
import "./features/styles/Home.css";

import img2 from "../../assets/clothes/2.jpeg";
import img3 from "../../assets/clothes/3.jpeg";
import img4 from "../../assets/clothes/4.jpg";

import img6 from "../../assets/clothes/6.jpg";
import img7 from "../../assets/clothes/7.jpg";
import img8 from "../../assets/clothes/8.jpg";

import men1 from "../../assets/mens/1.jpg"
import men2 from "../../assets/mens/2.jpg"
import men3 from "../../assets/mens/3.jpeg"
import men4 from "../../assets/mens/4.jpg"
import men5 from "../../assets/mens/5.jpg"

import kid1 from "../../assets/kids/1.jpg"
import kid2 from "../../assets/kids/2.jpg"
import kid3 from "../../assets/kids/3.jpg"
import kid4 from "../../assets/kids/4.jpeg"
import kid5 from "../../assets/kids/5.jpeg"
const Home = ({ show, setShow }) => {
  return (
    <div
      style={{ minHeight: "90vh", backgroundColor: "pink", padding: "6px",position:"",top:"" }}
    >
      {show.user && <User />}
      {show.features && <Features show={show} setShow={setShow} />}
      <div
        style={{
          // position: "relat",
          marginTop: "0",
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          height: "15vh",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "5px",
          // overflow:"hidden"
        }}
      >
        <h1 className="hackName">HackerRamp</h1>
        {/* <div style={{ display:"flex", justifyContent:"space-around", alignItems:"center"}}>
        <h2 style={{margin:"5px"}}>WeForShe</h2>
        <h3 style={{color:"gray",margin:"5px"}}>(Myntra)</h3>
        </div> */}
      </div>
      <div
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          height: "40vh",
          backgroundColor: "white",
          display: "flex",
          // flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          borderRadius: "5px",
          margin: "5px 0",
        }}
      >
        <div>
          <img src={kid1} style={{width:"200px", height:"35vh"}} alt="kid"/>
        </div>
        <div>
          <img src={kid2} style={{width:"200px", height:"35vh"}} alt="kid"/>
        </div>
        <div>
          <img src={kid3} style={{width:"200px", height:"35vh"}} alt="kid"/>
        </div>
        <div>
          <img src={kid4} style={{width:"200px", height:"35vh"}} alt="kid"/>
        </div>
        <div>
          <img src={kid5} style={{width:"200px", height:"35vh"}} alt="kid"/>
        </div>
        <div>
          <img src={kid1} style={{width:"200px", height:"35vh"}} alt="kid"/>
        </div>
      </div>
      <div className="slide-main">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src={img2} alt="women"/>
            </div>
            <div className="slide">
              <img src={img3} alt="women"/>
            </div>
            <div className="slide">
              <img src={img2} alt="women"/>
            </div>
            <div className="slide">
              <img src={img4} alt="women"/>
            </div>
            <div className="slide">
              <img src={img6} alt="women"/>
            </div>
            <div className="slide">
              <img src={img7} alt="women"/>
            </div>
            <div className="slide">
              <img src={img8} alt="women"/>
            </div>
            <div className="slide">
              <img src={img2} alt="women"/>
            </div>
            <div className="slide">
              <img src={img3} alt="women"/>
            </div>
            <div className="slide">
              <img src={img2} alt="women"/>
            </div>
            <div className="slide">
              <img src={img4} alt="women"/>
            </div>
            <div className="slide">
              <img src={img6} alt="women"/>
            </div>
            <div className="slide">
              <img src={img7} alt="women"/>
            </div>
            <div className="slide">
              <img src={img8} alt="women"/>
            </div>
          </div>
        </div>
      </div>

      <div className="slide-main">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src={men1} alt="men"/>
            </div>
            <div className="slide">
              <img src={men2} alt="men"/>
            </div>
            <div className="slide">
              <img src={men3} alt="men"/>
            </div>
            <div className="slide">
              <img src={men4} alt="men"/>
            </div>
            <div className="slide">
              <img src={men5} alt="men"/>
            </div>
            <div className="slide">
              <img src={men1} alt="men"/>
            </div>
            <div className="slide">
              <img src={men2} alt="men"/>
            </div>
            <div className="slide">
              <img src={men3} alt="men"/>
            </div>
            <div className="slide">
              <img src={men4} alt="men"/>
            </div>
            <div className="slide">
              <img src={men5} alt="men"/>
            </div>
            <div className="slide">
              <img src={men1} alt="men"/>
            </div>
            <div className="slide">
              <img src={men2} alt="men"/>
            </div>
            <div className="slide">
              <img src={men3} alt="men"/>
            </div>
            <div className="slide">
              <img src={men4} alt="men"/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
