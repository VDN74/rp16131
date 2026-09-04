import React, { useState } from "react";
import "./vv.css";

const Vv = ({ cellNumber, location, isActive, handleToggle }) => {
  return (
    <div className="vv">
      <div
        className={`rr-vv ${isActive ? "rr-vv_active" : ""}`}
        onClick={() =>
          handleToggle({ cellNumber, location, status: !isActive })
        }
      ></div>
    </div>
  );
};

export default Vv;
