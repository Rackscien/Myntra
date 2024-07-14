import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
function User({  }) {
  const { loginWithRedirect, isAuthenticated, logout ,user} = useAuth0();
  // isAuthenticate=isAuthenticated;
 console.log(isAuthenticated);
  return (
    <div>
      {isAuthenticated ? (
        <div
          style={{
            position: "fixed",
            backgroundColor: "white",
            right: "6.5px",
            border: "3px solid #FB6F90",
            borderRadius: "5px",
            zIndex: "100",
            height: "15vh",
            width: "15vw",
            top: "11vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              {user.name}
            </p>
            <p style={{ fontFamily: "cursive", margin: "5px", color: "blue" }}>
              {user.email}
            </p>

            <button
              style={{
                cursor: "pointer",
                height: "25px",
                width: "14vw",
                fontSize: "17px",
                fontWeight: "bold",
                border: "2px solid #FB6F90",
                borderRadius: "5px",
                background: "white",
              }}
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </button>
          </div>
        </div>
      ) : (
        <div
        style={{
          position: "fixed",
          backgroundColor: "white",
          right: "6.5px",
          border: "3px solid #FB6F90",
          borderRadius: "5px",
          zIndex: "100",
          height: "5vh",
          width: "15vw",
          top: "11vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        >
          <button onClick={loginWithRedirect}  style={{
                cursor: "pointer",
                height: "25px",
                width: "14vw",
                fontSize: "17px",
                fontWeight: "bold",
                border: "2px solid #FB6F90",
                borderRadius: "5px",
                background: "white",
              }}>Log In</button>
        </div>
      )}
    </div>
  );
}

export default User;
