import React, { useState } from "react";
import { addContent } from "../../../utils/BattleUtils";
import "../features/styles/battle.css"
const BattleForm = ({name, setName,image, setImage, Theme, setTheme,vote,setContent, battleForm, setBattleForm}) => {
  // const [postImage, setPostImage] = useState("");
  // const [name,setName]=useState("")

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImage(base64);
    console.log(image);
  };
  return (
    <div
      style={{
        position: "fixed",
        width: "30vw",
        left: "45vw",
        height: "50vh",
        top: "25vh",
        border: "4px solid #FB6F90",
        borderRadius: "10px",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:"white",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
            height: "40vh",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              // justifyContent: "space-evenly",
              width: "10vw",
              margin: "10px",
            }}
          >
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e)=>{
                setName(e.target.value);
                console.log(name)
              }}
              style={{ height: "40px", width: "8vw",border:"1px solid #FB6F90",borderRadius:"5px", fontSize:"18px", padding:"5px" }}
            />
            <input
              style={{
                display: "",
                width: "10vw",
                marginTop: "10px",
                height: "40px",
                border:"1px solid #FB6F90",
                borderRadius:"5px",
                alignContent:"center",
                padding:"5px",
                cursor:"pointer"

              }}
              type="file"
              label="Image"
              name="myFile"
              id="file-upload"
              accept=".jpeg, .png, .jpg"
              onChange={(e) => handleFileUpload(e)}
            />
          </div>
          <div style={{ width: "15vw", margin: "10px", display:"flex", alignItems:"center", justifyContent:"center", border:"1px solid black", height:"35vh" , backgroundColor:"white"}}>
            <img src={image} style={{ width: "14.8vw", height:"34.8vh" }} />
          </div>
        </div>
        <button type="submit" className="battleB" style={{width:"9vw", height:"35px",  cursor:"pointer",borderRadius:"5px", border:"2px solid #FB6F90",fontSize:"20px"}} onClick={()=>{addContent(name,setName, image,setImage,Theme,vote,setContent); setBattleForm(!battleForm);}}>Submit</button>
      </div>
    </div>
  );
};

export default BattleForm;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
