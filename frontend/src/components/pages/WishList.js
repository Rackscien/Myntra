import React, { useEffect, useState } from 'react'
import User from "./User";
import Features from "./Features";
import "./features/styles/Men.css";
import { Box, Grid } from "@mui/material";
import MenCard from "./Cards/MenCard";
import { getWishList } from '../../utils/WishListUtils';
import WishListCard from './Cards/WishListCard';
import { useAuth0 } from "@auth0/auth0-react";

function WishList({show,setShow,wishListData,setWishListData,setCartData}) {
  // const [WomenData, setWomenData] = useState([]);
  // const gender = "Women";
  const { isAuthenticated, user } = useAuth0();
  const userEmail=user?.email
  useEffect(() => {
    getWishList(userEmail,setWishListData);
  }, []);
  const length=wishListData.length;
  return (
    <div
    style={{ minHeight: "88vh", backgroundColor: "white", padding: "6px" }}
  >
    {show.user && <User />}
    {show.features && <Features show={show} setShow={setShow} />}
    <div className="men">
    {
        length===0?<div style={{backgroundColor:"white",width:"97vw",height:"89vh", display:"flex",alignItems:"center", justifyContent:"center", fontSize:"8vh",color:"#FB6F90"}}> Nothing Wishlisted Yet !</div>:
      <div style={{backgroundColor:"white", overflowY:"scroll",width:"97vw",height:"89vh"}}>
     
        
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} style={{ padding: "5px",  }}>
            {wishListData.map((val) => {
              return (
                <Grid item xs={2}>
                  <WishListCard val={val} setCartData={setCartData} />
                  {/*  */}
                </Grid>
              );
            })}
          </Grid>
        </Box>
        </div>
        }
      

     
    </div>
  </div>
  )
}

export default WishList
