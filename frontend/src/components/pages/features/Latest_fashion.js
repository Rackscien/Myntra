import React from 'react'

import User from "../User";
import Features from "../Features";

const Latest_fashion = ({ show,setShow}) => {
    return (
        <div
          style={{ minHeight: "90vh", backgroundColor: "white", padding: "6px" }}
        >
          {show.user && <User/>}
          {show.features && <Features show={show} setShow={setShow} />}
          <div
            style={{
              marginTop: "10vh",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              minHeight: "90vh",
              backgroundColor: "pink",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px",
            }}
          >
            Latest_fashion
          </div>
        </div>
      );
}

export default Latest_fashion
