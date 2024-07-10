import React, { useEffect, useState } from "react";
import Men from "../Men";
import Women from "../Women";
import Kids from "../Kids";
import User from "../User";
import Features from "../Features";
import "./styles/battle.css";
import { getContent } from "../../../utils/BattleUtils";
import { addThemes, getThemes } from "../../../utils/BattleThemeUtils";
import BattleForm from "./BattleForm";
const Style_Battles = ({ show, setShow }) => {
  const [themes, setThemes] = useState([]);
  const [Theme, setTheme] = useState("x1");
  const [newTheme, setNewTheme] = useState("");
  const [content, setContent] = useState([]);
  const [battleForm, setBattleForm] = useState(false)
  useEffect(() => {
    getContent(Theme, setContent);
  }, [Theme]);

  useEffect(() => {
    getThemes(setThemes);
  }, []);
  // console.log(themes);
  return (
    <div
      style={{ minHeight: "90vh", backgroundColor: "white", padding: "6px" }}
    >
      {show.men && <Men />}
      {show.women && <Women />}
      {show.kids && <Kids />}
      {show.user && <User />}
      {show.features && <Features />}
      <div
        style={{
          marginTop: "10vh",
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          minHeight: "90vh",
          backgroundColor: "pink",
          display: "flex",
          //   flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          borderRadius: "5px",
        }}
      >
        <div className="left">
          <div className="left-inner">
            <h3>Themes</h3>
            <div>
              <input
                type="text"
                placeholder="Create new theme"
                className="inputTheme"
                value={newTheme}
                onChange={(e) => {
                  setNewTheme(e.target.value);
                  console.log(newTheme);
                }}
              />
              <button
                className="addTheme"
                onClick={() => {
                  addThemes(newTheme, setThemes, setNewTheme);
                }}
              >
                +
              </button>
            </div>
          </div>
          <div style={{ padding: "10px", margin: "0px" }}>
            <ul>
              {
                // console.log(themes);
                themes.map((val, ind) => {
                  return (
                    <li
                      style={{
                        listStyleType: "none",
                        margin: "5px 0px",
                        backgroundColor: "pink",
                        fontSize: "20px",
                        height: "29px",
                        borderRadius: "5px",
                        paddingLeft: "5px",
                      }}
                      key={ind}
                      onClick={(e) => {
                        setTheme(`${val.theme}`);
                        console.log(Theme);
                      }}
                    >
                      {val.theme}
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
        <div className="right">
          {/* {content.map((val) => {
            return <h1>{val.name}</h1>;
          })} */}
          {Theme === "" ? (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "80vh",
                }}
              >
                <h1>Welcome to the Myntra Battle</h1>
              </div>
            </>
          ) : (
            <>
              <div className="right-top">
                <button onClick={()=>{setBattleForm(!battleForm)}}>UPLOAD</button>
              </div>
              {
                battleForm && <BattleForm/>
              }
              <div className="right-bottom">content</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Style_Battles;
