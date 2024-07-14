import React, { useEffect, useState } from "react";
import User from "./User";
import Features from "./Features";
import "./features/styles/Men.css";
import { getMenData } from "../../utils/AlldataUtils";
import { Box, Grid } from "@mui/material";
import MenCard from "./Cards/MenCard";

function Men({ show,setShow,wishListData,setWishListData, CartData,setCartData ,userName, userEmail, userAddress }) {
  
  const [MenData, setMenData] = useState([]);
  const gender = "Men";
  useEffect(() => {
    getMenData(gender, setMenData);
  }, []);
  return (
    <div
      style={{ minHeight: "88vh", backgroundColor: "white", padding: "6px" }}
    >
      {show.user && <User userName={userName}  userEmail={userEmail} userAddress={userAddress}/>}
      {show.features && <Features />}
      <div className="men">
        <div style={{backgroundColor:"white", overflowY:"scroll",position:""}}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{ padding: "5px",  }}>
              {MenData.map((val) => {
                return (
                  <Grid item xs={2}>
                    <MenCard val={val} setWishListData={setWishListData} setCartData={setCartData} userName={userName}/>
                    {/*  */}
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        
        </div>

       
      </div>
    </div>
  );
}

export default Men;
