import React, { useEffect, useState } from "react";
import User from "./User";
import Features from "./Features";
import "./features/styles/Men.css";
// import { getMenData } from "../../utils/AlldataUtils";
import { Box, Grid } from "@mui/material";
import MenCard from "./Cards/MenCard";
import WomenCard from "./Cards/WomenCard";
import { getWomenData } from "../../utils/AlldataUtils";

function Search({ show,setShow,setWishListData,setCartData,searchData,setSearchData, userName, userEmail, userAddress  }) {
//   const [WomenData, setWomenData] = useState([]);
//   const gender = "Women";
//   useEffect(() => {
//     getWomenData(gender, setWomenData);
//   }, []);
  return (
    <div
    style={{ minHeight: "88vh", backgroundColor: "white", padding: "6px" }}
  >
    {show.user && <User userName={userName}  userEmail={userEmail} userAddress={userAddress}/>}
    {show.features && <Features />}
    <div className="men">
      <div style={{backgroundColor:"white", overflowY:"scroll",width:"97vw",height:"89vh"}}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{ padding: "5px",  }}>
              {searchData.map((val) => {
                return (
                  <Grid item xs={2}>
                    <WomenCard val={val} setWishListData={setWishListData} setCartData={setCartData} userName={userName}/>
                    
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



export default Search
