import React, { useEffect, useState } from "react";
import User from "./User";
import Features from "./Features";
import "./features/styles/Men.css";
import { Box, Grid } from "@mui/material";
import MenCard from "./Cards/MenCard";
import { getWishList } from "../../utils/WishListUtils";
import WishListCard from "./Cards/WishListCard";
import { getCart } from "../../utils/CardUtils";
import CartCard from "./Cards/CartCard";

function Bag({
  show,
  CartData,
  setCartData,
  userName,
  userEmail,
  userAddress,
}) {
  // const [WomenData, setWomenData] = useState([]);
  // const gender = "Women";
  useEffect(() => {
    getCart(userName, setCartData);
  }, []);
  let length = CartData.length;
  return (
    <div
      style={{ minHeight: "88vh", backgroundColor: "white", padding: "6px" }}
    >
      {show.user && (
        <User
          userName={userName}
          userEmail={userEmail}
          userAddress={userAddress}
        />
      )}
      {show.features && <Features />}
      <div className="men">
        {length === 0 ? (
          <div
            style={{
              backgroundColor: "white",
              width: "97vw",
              height: "89vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "8vh",
              color: "black",
            }}
          >
            {" "}
            Nothing Added Yet !
          </div>
        ) : (
          <div
            style={{
              backgroundColor: "white",
              overflowY: "scroll",
              width: "97vw",
              height: "89vh",
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} style={{ padding: "5px" }}>
                {CartData.map((val) => {
                  return (
                    <Grid item xs={2}>
                      <CartCard
                        val={val}
                        setCartData={setCartData}
                        userName={userName}
                      />
                      {/*  */}
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </div>
        )}
      </div>
    </div>
  );
}

export default Bag;
