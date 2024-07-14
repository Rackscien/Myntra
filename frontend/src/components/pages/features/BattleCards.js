import React,{useState} from "react";
import Vote from "../../../assets/Vote.png";
import { addVote } from "../../../utils/BattleUtils";

const BattleCards = ({ val,Theme,setContent }) => {
    let id=val._id;
    const [vote, setVote] = useState(val.vote);
    const [isVoted, setIsVote] = useState(false);
    const handleClick=()=>{
        console.log(id);
        if(isVoted){
          setVote(vote-1);
          setIsVote(false);
        }
        else{
          setVote(vote+1);
          setIsVote(true);
        }
        addVote(id,vote,Theme,setContent);
    }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // border: "1px solid #FB6F90",
        // backgroundColor: "pink",
        paddingTop: "",
      }}
    >
      <img src={val.image} style={{ width: "15vw", height: "43vh",border:"1px solid grey" ,borderBottom:"none"}} alt="val"/>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "15vw",
          border:"1px solid grey",
          alignItems: "center",
          padding:"5px",
          borderTop:"none"
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
            textTransform:"uppercase",
          }}
        >
          <img
            src={Vote}
            style={{ width: "20px", height: "20px", cursor: "pointer", }}
            onClick={handleClick}
            alt="vote"
          />
          <span style={{ fontSize: "20px" }}>{val.vote}</span>
        </div>
      </div>
    </div>
  );
};

export default BattleCards;
