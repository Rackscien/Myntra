import React from 'react'

function SquadCard({val}) {
  return (
    <div style={{backgroundColor:"#D0F0C0",width:"30vw",padding:"10px",borderRadius:"5px", margin:"5px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",marginLeft:"10px"}}>
      <p style={{color:"#FB6F90"}}>{val.userName}</p>
      <p style={{color:"grey"}}>{val.content}</p>
    </div>
  )
}

export default SquadCard
