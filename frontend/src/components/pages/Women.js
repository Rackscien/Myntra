import React, { useEffect, useState } from "react";
import User from "./User";
import Features from "./Features";
import "./features/styles/Men.css";
// import { getMenData } from "../../utils/AlldataUtils";
import { Box, Grid } from "@mui/material";
import MenCard from "./Cards/MenCard";
import WomenCard from "./Cards/WomenCard";
import { getGenderData } from "../../utils/AlldataUtils";

function Women({ show,setShow,setWishListData,setCartData }) {
  const [WomenData, setWomenData] = useState([]);
  const gender = "Women";
  useEffect(() => {
    getGenderData(gender, setWomenData);
  }, []);
  return (
    <div
      style={{ minHeight: "88vh", backgroundColor: "white", padding: "6px" }}
    >
      {show.user && <User />}
      {show.features && <Features show={show} setShow={setShow} />}
      <div className="men">
        <div style={{backgroundColor:"white", overflowY:"scroll"}}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{ padding: "5px",  }}>
              {WomenData.map((val) => {
                return (
                  <Grid item xs={2}>
                    <WomenCard val={val} setWishListData={setWishListData} setCartData={setCartData}/>
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

export default Women;
