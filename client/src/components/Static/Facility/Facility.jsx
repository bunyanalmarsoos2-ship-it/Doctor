import React from "react";
import "./Facility.css";
import FacilityData from "./FacilityData.js";
const Facility = () => {
  return (
    <>
      <h1 className="facilityHeading">Facilities</h1>
      <div className="facility-container">
        {FacilityData.map((d, i) => (
          <div className="card">
            <i className={`${d.icon} card-img-top`}></i>
            <div className="card-body">
              <h5 className="cart-title">{d.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Facility;
