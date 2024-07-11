import React, { useState } from "react";
import { addContent } from "../../../utils/BattleUtils";

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
        width: "40vw",
        left: "40vw",
        height: "50vh",
        top: "25vh",
        border: "1px solid #FB6F90",
        borderRadius: "5px",
        backgroundColor: "pink",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:"pink"
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
              alignItems: "",
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
              style={{ height: "30px", width: "1oopx" }}
            />
            <input
              style={{
                display: "",
                width: "90px",
                margin: "10px",
                height: "80px",
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
            <img src={image} style={{ width: "13vw", height:"30vh" }} />
          </div>
        </div>
        <button type="submit" style={{width:"10vw", height:"30px", backgroundColor:"#FB6F90", cursor:"pointer"}} onClick={()=>{addContent(name,setName, image,setImage,Theme,vote,setContent); setBattleForm(!battleForm);}}>Submit</button>
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
