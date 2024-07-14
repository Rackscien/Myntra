import React from "react";
import { addWishListData } from "../../../utils/WishListUtils";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { addCartData } from "../../../utils/CardUtils";

const MenCard = ({ val,setWishListData,setCartData ,userName}) => {
  const notify = () => toast("Successfully WishListed");
  const notify1 = () => toast("Successfully Added to Cart");
  console.log(val);
  // const discount = val.discount;
  const name=val.name;
  const img=val.img;
  const price=val.price;
  const mrp=val.mrp;
  const discount=val.discount;
  const seller=val.seller;
  return (
    <div style={{ backgroundColor: "white", height: "60vh" }}>
      <div style={{height:"40.5vh", display:"flex", alignItems:"center"}}>
        <img
          src={val.img0}
          alt="clothes"
          style={{ width: "15vw", margin: "2px", height: "40vh" }}
        />
      </div>
      <div style={{ padding: "10px", height:"19vh" }}>
        <div style={{height:"11vh"}}>
        <p style={{ fontWeight: "600", fontSize: "14px", margin: "1px" }}>
          {val.seller}
        </p>
        <p
          style={{
            fontWeight: "lighter",
            color: "grey",
            fontSize: "15px",
            margin: "1px",
          }}
        >
          {val.name}
        </p>
        <div style={{ display: "flex", alignItems:"center",marginTop:"3px" }}>
          <p style={{ fontWeight: "600", fontSize: "14px", marginRight: "4px" }}>
            Rs. {val.price}
          </p>
          {discount != 0 ? <p style={{fontSize:"10px", color:"orange",marginLeft:"2px"}}>{discount} %off</p> : <></>}
        </div>
        </div>
       
       

        <div style={{height:"3vh",display:"flex", alignItems:"center", justifyContent:"space-between",}}>
          <button className="menButton" onClick={()=>{addWishListData(name,img,price,mrp,discount,seller,userName,setWishListData); notify()}}>WishList</button>
         
          <button className="menButton" onClick={()=>{addCartData(name,img,price,mrp,discount,seller,userName, setCartData); notify1()}}>Add</button>
         

        </div>
      </div>
    </div>
  );
};

export default MenCard;
