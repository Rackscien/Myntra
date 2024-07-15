import React, { useEffect, useState } from 'react'
import { IoMdSend } from "react-icons/io";
import User from "../User";
import Features from "../Features";
import "./styles/squad.css"
import { addSquadData, getSquadData } from '../../../utils/SquadUtils';
import SquadCard from '../Cards/SquadCard';
import SquadCard2 from '../Cards/SquadCard2';
import { useAuth0 } from "@auth0/auth0-react";
import { addFashionGroup, getFashionGroup } from '../../../utils/SquadGroupUtils';
const Style_Squads = ({ show,setShow }) => {
  const [content,setContent]=useState("")
  const [squadData,setSquadData]=useState([]);
  const { isAuthenticated, user } = useAuth0();
  const userEmail = user?.email;
  const userName =user?.name;
  const [FashionGroup,setFashionGroup]=useState([]);
  const [Fashion,setFashion]=useState("");
  const [selectedGroup,setSelectedGroup]=useState("");
  useEffect(()=>{
    getSquadData(selectedGroup,setSquadData);
  },[selectedGroup])
  useEffect(()=>{
    getFashionGroup(setFashionGroup)
  })
  return (
    <div
      style={{ minHeight: "90vh", backgroundColor: "white", padding: "6px" }}
    >
      {show.user && <User />}
      {show.features && <Features show={show} setShow={setShow} />}
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
          justifyContent: "center",
          // borderRadius: "5px",
          padding:"5px"
        }}
      >
         <div className="left">
          <div className="left-inner">
            <h3>Fashion Groups</h3>
            <div>
              <input
                type="text"
                placeholder="Create new Group"
                className="inputTheme"
                value={Fashion}
                onChange={(e) => {
                  setFashion(e.target.value);
                  console.log(Fashion);
                }}
              />
              <button
                className="addTheme"
                onClick={() => {
                  addFashionGroup(Fashion, setFashion, setFashionGroup);
                }}
              >
                +
              </button>
            </div>
          </div>
          <div style={{ padding: "10px", margin: "0px" }}>
            {/* <ul> */}
              {
                // console.log(themes);
                FashionGroup.map((val, ind) => {
                  return (
                    <div className="theme"
                     
                      // value={Theme}
                      key={ind}
                      onClick={(e) => {
                        setSelectedGroup(`${val.Fashion}`);
                        console.log(selectedGroup);
                      }}
                    >
                      {val.Fashion}
                    </div>
                  );
                })
              }
            {/* </ul> */}
          </div>
        </div>
        <div className='squad'>
        {selectedGroup === "" ? (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "80vh",
                }}
              >
                <h1>Welcome to the Myntra Squad ! :)</h1>
              </div>
            </>
          ) : (<>
          
          <div className='squad-text'>
               {
                squadData.map((val)=>{
                  return <>{
                    val.userEmail===userEmail?
                    <SquadCard2 val={val}/>
                  :<SquadCard val={val}/>
                  }
                  </>
                })
               }
              </div>
              <div className='squad-input'>
                <input type='text' placeholder='Write Here..' value={content} onChange={(e)=>{
                  setContent(e.target.value)
                }}/>
                <IoMdSend className='sendlogo' style={{width:"4vw",height:"5vh" , cursor:"pointer",marginLeft:"4px", border:""}} onClick={()=>{addSquadData(content,userName,userEmail,selectedGroup,setContent,setSquadData)}}/>
              </div></>)
}
            </div>
          </div>
    </div>
  );
};

export default Style_Squads;
