import React, { useEffect, useState } from "react";

import User from "../User";
import Features from "../Features";
import "./styles/battle.css";
import { getContent } from "../../../utils/BattleUtils";
import { addThemes, getThemes } from "../../../utils/BattleThemeUtils";
import BattleForm from "./BattleForm";
import { styled } from "@mui/material/styles";
import BattleCards from "./BattleCards";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";

const Style_Battles = ({ show,  }) => {
  const [id,setId]=useState("");
  const [themes, setThemes] = useState([]);
  const [Theme, setTheme] = useState("");
  const [newTheme, setNewTheme] = useState("");
  const [content, setContent] = useState([]);
  const [battleForm, setBattleForm] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  // const [theme, setTheme]=useState("")
  const [vote, setVote] = useState(0);
  useEffect(() => {
    getThemes(setThemes);
  }, []);

  useEffect(() => {
    getContent(Theme, setContent);
  }, [Theme]);
//  console.log(content)
  return (
    <div
      style={{ minHeight: "88vh", backgroundColor: "white", padding: "6px" }}
    >
      {show.user && <User />}
      {show.features && <Features />}
      <div
        style={{
          marginTop: "0vh",
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          Height: "80vh",
          backgroundColor: "pink",
          display: "flex",
          //   flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "5px",
          padding:"5px"
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
                        cursor:"pointer"
                      }}
                      // value={Theme}
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
                <button
                  onClick={() => {
                    setBattleForm(!battleForm);
                  }}
                >
                  UPLOAD
                </button>
              </div>
              {battleForm && (
                <BattleForm
                  name={name}
                  setName={setName}
                  image={image}
                  setImage={setImage}
                  Theme={Theme}
                  setTheme={setTheme}
                  vote={vote}
                  setContent={setContent}
                  battleForm={battleForm}
                  setBattleForm={setBattleForm}
                />
              )}
              <div className="right-bottom" >
                {/* {
                  content.map((val)=>{
                    return<h1>{val.name}</h1>
                  })
                } */}
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2} style={{padding:"5px"}}>
                    {content.map((val) => {
                     return <Grid item xs={3}>
                        <BattleCards val={val} Theme={Theme} setContent={setContent}/>
                      </Grid>;
                    })}
                    
                  </Grid>
                </Box>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Style_Battles;
