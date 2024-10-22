import React, { useEffect, useState } from "react";
import User from "./User";
import Features from "./Features";
import "./features/styles/Men.css";
import { getGenderData} from "../../utils/AlldataUtils";
import { Box, Grid } from "@mui/material";
import MenCard from "./Cards/MenCard";

function Men({ show,setShow,setWishListData,setCartData }) {
  
  const [MenData, setMenData] = useState([]);
  const gender = "Men";
  useEffect(() => {
    getGenderData(gender, setMenData);
  }, []);
  return (
    <div
      style={{ minHeight: "88vh", backgroundColor: "white", padding: "6px" }}
    >
      {show.user && <User />}
      {show.features && <Features show={show} setShow={setShow} />}
      <div className="men">
        <div style={{backgroundColor:"white", overflowY:"scroll",position:""}}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{ padding: "5px",  }}>
              {MenData.map((val) => {
                return (
                  <Grid item xs={2}>
                    <MenCard val={val} setWishListData={setWishListData} setCartData={setCartData} />
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
