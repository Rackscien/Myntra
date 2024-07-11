import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
function User() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
      <div>
        <div style={{zIndex: "100",position: "fixed",right:"6.5px", height:"50vh",width:"15vw",top:"11vh",border:"1px solid white", borderRadius:"5px",backgroundColor:"#FB6F90"}}>
          {(isAuthenticated) ? 
            <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button> 
            : <button onClick={loginWithRedirect}>Log In</button>}
       </div>
      </div>
  )
} 

export default User
