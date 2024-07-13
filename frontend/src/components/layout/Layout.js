import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({show,setShow,setSearchContent,setSearchData}) => {
  
  return (
    <div style={{ backgroundColor: "white" }}>
      <Header show={show} setShow={setShow} setSearchContent={setSearchContent} setSearchData={setSearchData}/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
