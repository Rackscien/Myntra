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
import { useAuth0 } from "@auth0/auth0-react";
function Bag({
  show,
  setShow,
  CartData,
  setCartData,
 
}) {
  // const [WomenData, setWomenData] = useState([]);
  // const gender = "Women";
  const { isAuthenticated, user } = useAuth0();
  const userEmail=user?.email
  useEffect(() => {
    getCart(userEmail, setCartData);
  }, []);
  let length = CartData.length;
  return (
    <div
      style={{ minHeight: "88vh", backgroundColor: "white", padding: "6px" }}
    >
      {show.user && (
        <User
        />
      )}
      {show.features && <Features show={show} setShow={setShow} />}
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
