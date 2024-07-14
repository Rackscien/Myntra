import React from 'react'

function DiaryCards({val}) {
  return (
    <div style={{backgroundColor:"white",minWidth:"40vw",padding:"10px",borderRadius:"5px", margin:"5px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",backgroundColor:"white",marginLeft:"10px",maxWidth:"66vw"}}>
      <p style={{color:"grey", fontSize:"20px"}}>{val.content}</p>
      {/* <p>{val.userName}</p> */}
    </div>
  )
}

export default DiaryCards
