import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Myntra from "../../assets/Myntra-Logo.png";
import WhishList from "../../assets/WhishList.png";
import Bag from "../../assets/shopping-bag.jpg";
import User from "../../assets/user.jpg";
import { BsSearch } from "react-icons/bs";
import { getAnyData } from "../../utils/AlldataUtils";
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
const Header = ({ show, setShow,setSearchContent, setSearchData }) => {
  const { isAuthenticated, user } = useAuth0();
  if (isAuthenticated) {
    User = user.picture;
  }
  const [input,setInput]= useState("")
  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        width: "99vw",
        height: "10vh",
        backgroundColor: "#FB6F90",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        zIndex: "100",
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
        <img src={Myntra} style={{ width: "10vh" }} alt="Myntra" />
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          onClick={() => {
            setShow({
              user: false,
              features: false,
            });
          }}
        >
          <h2 style={{ color: "white" }}>MYNTRA</h2>
        </Link>

        <div
          style={{
            display: "flex",
            height: "100%",
            // alignItems: "center",
            justifyContent: "center",
            // margin: "10px",
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
                user: false,
                features: false,
              });
            }}
          >
            <Link to="/men" style={{ textDecoration: "none", color: "black" }}>
              {" "}
              MEN
            </Link>
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
                user: false,
                features: false,
              });
            }}
          >
            <Link
              to="/women"
              style={{ textDecoration: "none", color: "black" }}
            >
              {" "}
              WOMEN
            </Link>
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
                user: false,
                features: !show.features,
              });
            }}
          >
            FEATURES
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
          justifyContent:"space-between",
          padding:"5px"
        }}
        onClick={()=>{setShow({
          user: false,
          features: false,
        });}}
      >
        {/*  */}
        <input
          type="text"
          placeholder="search products, brands here"
          style={{
            border: "0 solid white",
            height: "4vh",
            width: "17vw",
            // marginLeft: "4px",
            paddingLeft:"5px",
            textTransform:"capitalize"
            // textAlign:"center"
          }}
          value={input}
          onChange={(e)=>{setInput(e.target.value); console.log(input)}}
        />
        <Link to="/search"><button className="searchButton" onClick={()=>{getAnyData(input,setSearchData,setInput)}}><BsSearch style={{ margin: "2px" }} /></button></Link>
      </div>
      <div style={{ display: "flex", marginRight: "10px" }}>
        <Link
          to="/wishList"
          onClick={() => {
            setShow({
              user: false,
              features: false,
            });
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0 10px",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            textDecoration: "none",
            color: "black",
          }}
        >
          <img
            src={WhishList}
            style={{ width: "20px", backgroundColor: "", margin: "" }}
            alt="wishList"
          />
          <span style={{ fontWeight: "bold", fontSize: "12px" }}>WishList</span>
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
            textDecoration: "none",
            color: "black",
          }}
          onClick={() => {
            setShow({
              user: false,
              features: false,
            });
          }}
        >
          <img
            src={Bag}
            style={{ width: "20px", backgroundColor: "", margin: "" }}
            alt="bag"
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
              features: false,
            });
          }}
        >
          <img
            src={User}
            style={{ width: "20px", backgroundColor: "", margin: "" }}
            alt="user"
          />
          <span style={{ fontWeight: "bold", fontSize: "12px" }}>Profile</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
