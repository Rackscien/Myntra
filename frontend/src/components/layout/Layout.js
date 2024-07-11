import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({show,setShow}) => {
  
  return (
    <div style={{ backgroundColor: "white" }}>
      <Header show={show} setShow={setShow}/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
