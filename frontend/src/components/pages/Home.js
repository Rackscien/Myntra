import React, { useEffect, useState } from "react";

import User from "./User";
import Features from "./Features";
import "./features/styles/Home.css";
import {
  getData,
  getMenData,
  getWatch,
  getWomenData,
} from "../../utils/AlldataUtils";

const Home = ({ show, setShow }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMenData("Men", setData);
  }, []);

  const [women, setWomen] = useState([]);
  useEffect(() => {
    getWomenData("Women", setWomen);
  }, []);
  console.log("Length", women.length);
  const someWomen = [];
  for (let i = 0; i < 14; i++) {
    someWomen.push(women[i]);
  }
  const [watch, setWatch] = useState([]);
  useEffect(() => {
    getWatch("Watch", setWatch);
  }, []);
  const someWatch = [];
  return (
    <div
      style={{
        minHeight: "90vh",
        backgroundColor: "pink",
        padding: "6px",
        position: "",
        top: "",
      }}
    >
      {show.user && <User />}
      {show.features && <Features show={show} setShow={setShow} />}
      <div style={{minHeight:"89vh", backgroundColor:"white"}}>
      <div className="slide-main">
        <div className="slider">
          <div className="slide-track">
            {women.map((val) => {
              return (
                <div className="slide">
                  <img
                    src={val.img0}
                    alt="men"
                    style={{ height: "40vh", width: "249px" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        style={{
          // position: "relat",
          marginTop: "5px",
          // boxShadow:
          //   "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
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
       
      </div>
      <div
        style={{
          // boxShadow:
          //   "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
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
        {watch.map((val) => {
          return (
            <div>
              <img
                src={val.img0}
                style={{ width: "230px", height: "38vh" }}
                alt="kid"
              />
            </div>
          );
        })}
      </div>

      <div className="slide-main">
        <div className="slider">
          <div className="slide-track">
            {data.map((val) => {
              return (
                <div className="slide">
                  <img
                    src={val.img0}
                    alt="men"
                    style={{ height: "40vh", width: "249px" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
