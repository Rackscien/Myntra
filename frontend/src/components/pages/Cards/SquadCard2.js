import React from 'react'

function SquadCard2({val}) {
  return (
    <div style={{backgroundColor:"white",width:"35vw",position:"relative", left:"33vw",padding:"10px",borderRadius:"5px", margin:"9px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}}>
      <p style={{color:"#FB6F90"}}>{val.userName}</p>
      <p style={{color:"grey"}}>{val.content}</p>
    </div>
  )
}

export default SquadCard2
