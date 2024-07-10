import React from "react";
import Vote from "../../../assets/Vote.png";
import { addVote } from "../../../utils/BattleUtils";
const BattleCards = ({ val, id, setId,setVote,vote,Theme,setContent }) => {
    vote=val.vote;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid black",
        backgroundColor: "white",
        paddingTop: "10px",
      }}
    >
      <img src={val.image} style={{ width: "15vw", height: "15vw",border:"1px solid black" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "90%",
          alignItems: "center",
        }}
      >
        <h2>{val.name}</h2>
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
            onClick={() => {setVote(vote+1); addVote(id,vote,Theme,setContent)}}
          />
          <span style={{ fontSize: "20px" }}>{val.vote}</span>
        </div>
      </div>
    </div>
  );
};

export default BattleCards;
