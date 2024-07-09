import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Myntra from "../../assets/Myntra-Logo.png";
import WhishList from "../../assets/WhishList.png";
import Bag from "../../assets/shopping-bag.jpg";
import User from "../../assets/user.jpg";
import { BsSearch } from "react-icons/bs";
const Button = styled.button`
  width: 8vw;
  background-color: pink;
  border-radius: 5px;
  height: 5vh;
  margin: 5px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  color: black;
  border: none;
`;
const Header = ({ show, setShow }) => {
  const [isNotRegistered, setIsNotRegistered] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div
      style={{
        width: "100vw",
        position: "fixed",
        height: "10vh",
        backgroundColor: "#FB6F90",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      <div
        style={{
          marginLeft: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={Myntra} style={{ width: "10vh" }} />
        <h2 style={{ color: "white" }}>MYNTRA</h2>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px",
          }}
        >
          <button
            style={{
              border: "none",
              backgroundColor: "#FB6F90",
              marginLeft: "10px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "18px",
            }}
            onClick={() => {
              setShow({
                men: !show.men,
                women: false,
                kids: false,
                user: false,
              });
            }}
          >
            MEN
          </button>
          <button
            style={{
              border: "none",
              backgroundColor: "#FB6F90",
              marginLeft: "10px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "18px",
            }}
            onClick={() => {
              setShow({
                men: false,
                women: !show.women,
                kids: false,
                user: false,
              });
            }}
          >
            WOMEN
          </button>
          <button
            style={{
              border: "none",
              backgroundColor: "#FB6F90",
              marginLeft: "10px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "18px",
            }}
            onClick={() => {
              setShow({
                men: false,
                women: false,
                kids: !show.kids,
                user: false,
              });
            }}
          >
            KIDS
          </button>
        </div>
      </div>
      <div
        style={{
          borderRadius: "5px",
          height: "5vh",
          backgroundColor: "white",
          border: "1px solid black",
          width: "20vw",
          // padding: "5px",
          display: "flex",
          alignItems: "center",
          // justifyContent:"center"
        }}
      >
        <BsSearch style={{ margin: "2px" }} />
        <input
          type="text"
          placeholder="search products, brands here"
          style={{
            border: "0 solid white",
            height: "4vh",
            width: "15vw",
            marginLeft: "4px",
            // textAlign:"center"
          }}
        />
      </div>
      <div style={{ display: "flex", marginRight: "10px" }}>
       
       
          <Link to="/wishList"  style={{
              display: "flex",
              flexDirection: "column",
              margin: "0 10px",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              textDecoration:"none",
              color:"black"
            }}>
            <img
              src={WhishList}
              style={{ width: "20px", backgroundColor: "", margin: "" }}
            />
            <span style={{ fontWeight: "bold", fontSize: "12px" }}>
              WishList
            </span>
          </Link>
        
        
          <Link
            to="/bag"
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "0 10px",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              textDecoration:"none",
              color:"black"
            }}
          >
            <img
              src={Bag}
              style={{ width: "20px", backgroundColor: "", margin: "" }}
            />
            <span style={{ fontWeight: "bold", fontSize: "12px" }}>Bag</span>
          </Link>
        
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0 10px",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={() => {
            setShow({
              men: false,
              women: false,
              kids: false,
              user: !show.user,
            });
          }}
        >
          <img
            src={User}
            style={{ width: "20px", backgroundColor: "", margin: "" }}
          />
          <span style={{ fontWeight: "bold", fontSize: "12px" }}>Profile</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
