import React from "react";

const Topbar = () => {
  return (
    <>
      <div className="topbar-container">
        <h6>
          <i className="fa-solid fa-phone"></i> Emergency Call: 1234567890
        </h6>
        <h6>
          <i className="fa-solid fa-clock"></i> 10:00 AM To 10:00 PM
        </h6>
        <h6>
          {" "}
          <i className="fa-solid fa-envelope"></i> help@zainmath.com
        </h6>
        <h6>
          {" "}
          <i className="fa-solid fa-caret-down"></i> English
        </h6>
      </div>
    </>
  );
};

export default Topbar;
