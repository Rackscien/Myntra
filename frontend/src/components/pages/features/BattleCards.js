import React,{useState} from "react";
import Vote from "../../../assets/Vote.png";
import { addVote } from "../../../utils/BattleUtils";

const BattleCards = ({ val,Theme,setContent }) => {
    let id=val._id;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #FB6F90",
        backgroundColor: "pink",
        paddingTop: "",
      }}
    >
      <img src={val.image} style={{ width: "100%", height: "40vh",border:"1px solid black" }} alt="val"/>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "90%",
          alignItems: "center",
        }}
      >
        <h4>{val.name}</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            width: "100%",
            alignItems: "center",
            marginRight: "5px",
            gap: "2px",
          }}
        >
          <img
            src={Vote}
            style={{ width: "20px", height: "20px", cursor: "pointer", }}
            onClick={()=>{addVote(id,Theme,setContent)}}
            alt="vote"
          />
          <span style={{ fontSize: "20px" }}>{val.vote}</span>
        </div>
      </div>
    </div>
  );
};

export default BattleCards;
